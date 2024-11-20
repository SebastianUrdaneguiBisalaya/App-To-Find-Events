import { useRef, useState } from "react";
import { cn } from "../utils";
import { TicketCard } from "../components";

type TicketCardProps = {
  ticket_id: string;
  event_name: string;
  event_date: string;
  event_place: string;
  order_id: string;
  event_hour: string;
  ticket_type: string;
  bar_code: string;
  purchase_quantity: number;
};

type TicketsArray = {
  purchases: TicketCardProps[];
};
export const Tickets = ({ purchases }: TicketsArray) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const nextCard = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % purchases.length);
  };

  const prevCard = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + purchases.length) % purchases.length);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full max-h-screen overflow-y-auto">
      <div className="flex space-x-4 justify-center items-center py-4">
        <button
          onClick={prevCard}
          className="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 20 20"
          >
            <path
              fill="#761CBC"
              d="M7.712 4.819A1.5 1.5 0 0 1 10 6.095v2.973c.104-.131.234-.248.389-.344l6.323-3.905A1.5 1.5 0 0 1 19 6.095v7.81a1.5 1.5 0 0 1-2.288 1.277l-6.323-3.905a1.505 1.505 0 0 1-.389-.344v2.973a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.5 1.5 0 0 1 0-2.553L7.712 4.82Z"
            />
          </svg>
        </button>

        <button
          onClick={nextCard}
          className="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 20 20"
          >
            <path
              fill="#761CBC"
              d="M3.288 4.819A1.5 1.5 0 0 0 1 6.095v7.81a1.5 1.5 0 0 0 2.288 1.277l6.323-3.905c.155-.096.285-.213.389-.344v2.973a1.5 1.5 0 0 0 2.288 1.276l6.323-3.905a1.5 1.5 0 0 0 0-2.553L12.288 4.82A1.5 1.5 0 0 0 10 6.095v2.973a1.506 1.506 0 0 0-.389-.344L3.288 4.82Z"
            />
          </svg>
        </button>
      </div>

      <div className="flex w-full flex-1">
        <div
          className="flex justify-center rounded-2xl w-full"
          ref={cardRef}
        >
          {purchases.map((card, index) => (
            <div
              key={`${card.ticket_id}-${card.bar_code}`}
              className={cn(
                "absolute rounded-2xl shadow-lg transition-all duration-300 ease-in-out",
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0",
              )}
            >
              <TicketCard
                nameEvent={card.event_name}
                dateEvent={card.event_date}
                placeEvent={card.event_place}
                nameUser={card.event_name}
                orderId={card.order_id}
                dayEvent={"Lunes"}
                hourEvent={card.event_hour}
                typeTicket={card.ticket_type}
                quantity={card.purchase_quantity}
                barcode={card.bar_code}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
