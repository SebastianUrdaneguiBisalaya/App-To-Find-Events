import { useEffect, useRef, useState } from "react";
import { PurchaseHistoryCard } from "../components";
import { Tickets } from "./Tickets";
import { fetchData } from "../services";
import { useAuthStore } from "../store/AuthStore";

type Order = {
  order_id: string;
  order_date: string;
  event_name: string;
  event_date: string;
  event_place: string;
  event_hour: string;
  onClickData: {
    order_date: string;
    purchases: {
      ticket_id: string;
      event_name: string;
      event_date: string;
      event_place: string;
      order_id: string;
      event_hour: string;
      ticket_type: string;
      bar_code: string;
      purchase_quantity: number;
    }[];
  };
};

export const ListTicketHistory = () => {
  const [selectedTicket, setSelectedTicket] = useState<{
    order_date: string;
    purchases: {
      ticket_id: string;
      event_name: string;
      event_date: string;
      event_place: string;
      order_id: string;
      event_hour: string;
      ticket_type: string;
      bar_code: string;
      purchase_quantity: number;
    }[];
  } | null>(null);
  const [data, setData] = useState<Order[]>([]);
  const abortControllerRef = useRef<AbortController | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthStore((state) => state);

  const handleCardClick = (orderData: Order["onClickData"]) => {
    setSelectedTicket(orderData);
  };

  const fetchHistoryTickets = async () => {
    try {
      setIsLoading(true);
      if (!user) return;
      const controller = new AbortController();
      abortControllerRef.current = controller;
      const result = await fetchData({
        baseUrl: `http://localhost:3000/userhistoryevents/${user.id}`,
        signal: controller.signal,
        options: {
          credentials: "include",
        },
      });
      if (result) {
        setData(result);
      }
    } catch (error) {
      throw new Error(`Unnable to fetch data: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHistoryTickets();
    return () => {
      if (abortControllerRef.current && isLoading) {
        abortControllerRef.current.abort();
      }
    };
  }, []);
  return (
    <div className="font-poppins max-w-[1500px] mx-auto my-0 px-10 pt-5">
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-4">
        <h2 className="text-3xl font-bold items-center justify-center">
          Historial&nbsp;
          <span className="text-primary">de Compras</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {data.map((item) => (
          <PurchaseHistoryCard
            key={item.order_id}
            order_date={item.order_date}
            event_name={item.event_name}
            event_date={item.event_date}
            event_place={item.event_place}
            event_hour={item.event_hour}
            onClick={() => handleCardClick(item.onClickData)}
          />
        ))}
        {isLoading &&
          Array.from({ length: 10 }).map((_, index) => (
            <div
              role="status"
              key={`loading-${index}`}
              className="relative md:min-w-[15rem] h-52 flex items-center justify-center p-4 bg-gray-300 animate-pulse rounded-lg"
            ></div>
          ))}
      </div>

      {selectedTicket && (
        <dialog
          className="fixed inset-0 w-full h-full bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center z-100 overflow-y-auto"
          open={true}
        >
          <div className="flex flex-col items-center justify-center w-full h-screen relative">
            <button
              className="py-4 top-0 left-0 pl-8 cursor-pointer absolute"
              onClick={() => setSelectedTicket(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 1216 1312"
              >
                <path
                  fill="#761CBC"
                  d="M1202 1066q0 40-28 68l-136 136q-28 28-68 28t-68-28L608 976l-294 294q-28 28-68 28t-68-28L42 1134q-28-28-28-68t28-68l294-294L42 410q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294l294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68L880 704l294 294q28 28 28 68"
                />
              </svg>
            </button>
            <div className="w-96 h-full">
              <Tickets purchases={selectedTicket.purchases} />
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};
