import { useState } from "react";
import { PurchaseHistoryCard } from "../components";
import { Tickets } from "./Tickets";

// type PurchaseHistoryCardProps = {
//   dateBuy: string;
//   nameEvent: string;
//   priceEvent: number;
//   dateEvent: string;
//   placeEvent: string;
//   hourEvent: string;
//   onClick: () => void;
// };

type Purchase = {
  id: string;
  nameEvent: string;
  dateEvent: string;
  placeEvent: string;
  nameUser: string;
  orderId: string;
  dayEvent: string;
  hourEvent: string;
  typeTicket: string;
  quantity: number;
  barcode: string;
};

type Order = {
  dateBuy: string;
  tickets: Purchase[];
};

export const ListTicketHistory = () => {
  const [selectedTicket, setSelectedTicket] = useState<Order | null>(null);
  const handleCardClick = (order: Order) => {
    setSelectedTicket(order);
  };
  return (
    <div className="font-poppins max-w-[1500px] mx-auto my-0 px-10 pt-5">
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-4">
        <h2 className="text-3xl font-bold items-center justify-center">
          Historial&nbsp;
          <span className="text-primary">de Compras</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <PurchaseHistoryCard
          dateBuy="2024-12-20"
          nameEvent="Bruno Mars | Stars 26"
          dateEvent="2025-01-05"
          placeEvent="Buenos Aires, Argentina"
          hourEvent="15:00"
          onClick={() =>
            handleCardClick({
              dateBuy: "2024-12-20",
              tickets: [
                {
                  id: "003",
                  nameEvent: "Coldplay | Music of the Spheres",
                  dateEvent: "2025/02/10",
                  placeEvent: "Lima, Perú",
                  nameUser: "CARLA RUIZ",
                  orderId: "002",
                  dayEvent: "2025/02/10",
                  hourEvent: "19:00",
                  typeTicket: "VIP",
                  barcode: "",
                  quantity: 1,
                },
                {
                  id: "004",
                  nameEvent: "Coldplay | Music of the Spheres",
                  dateEvent: "2025/02/10",
                  placeEvent: "Lima, Perú",
                  nameUser: "CARLA RUIZ",
                  orderId: "002",
                  dayEvent: "2025/02/10",
                  hourEvent: "19:00",
                  typeTicket: "VIP",
                  barcode: "",
                  quantity: 1,
                },
              ],
            })
          }
        />
        <PurchaseHistoryCard
          dateBuy="2024-12-20"
          nameEvent="Bruno Mars | Stars 25"
          dateEvent="2025-01-05"
          placeEvent="Buenos Aires, Argentina"
          hourEvent="15:00"
          onClick={() =>
            handleCardClick({
              dateBuy: "2024-12-20",
              tickets: [
                {
                  id: "005",
                  nameEvent: "Coldplay | Music of the Spheres",
                  dateEvent: "2025/02/10",
                  placeEvent: "Lima, Perú",
                  nameUser: "CARLA RUIZ",
                  orderId: "002",
                  dayEvent: "2025/02/10",
                  hourEvent: "19:00",
                  typeTicket: "VIP",
                  barcode: "",
                  quantity: 1,
                },
                {
                  id: "006",
                  nameEvent: "Coldplayyy | Music of the Spheres",
                  dateEvent: "2025/02/10",
                  placeEvent: "Lima, Perú",
                  nameUser: "CARLA RUIZ",
                  orderId: "002",
                  dayEvent: "2025/02/10",
                  hourEvent: "19:00",
                  typeTicket: "VIP",
                  barcode: "",
                  quantity: 1,
                },
              ],
            })
          }
        />
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
              <Tickets tickets={selectedTicket.tickets} />
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};
