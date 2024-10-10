import { useRef, useState } from "react";
import { cn } from "../utils";
import { TicketCard } from "../components";

type TicketCardProps = {
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

type TicketsArray = {
  tickets: TicketCardProps[];
};
export const Tickets = ({ tickets }: TicketsArray) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);
  const cardRef = useRef<HTMLDivElement>(null);
  const nextCard = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tickets.length);
  };

  const prevCard = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + tickets.length) % tickets.length);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex-1">
        <h2 className="text-3xl font-bold items-center justify-center text-primary pt-6">Tickets de tus Eventos</h2>
      </div>
      <div className="flex-1 flex-col items-center justify-center relative">
        <div
          className="w-80 flex justify-center items-center rounded-2xl"
          ref={cardRef}
        >
          {tickets.map((card, index) => (
            <div
              key={card.id}
              className={cn(
                "absolute w-full rounded-2xl shadow-lg transition-all duration-300 ease-in-out",
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0",
              )}
            >
              <TicketCard
                nameEvent={card.nameEvent}
                dateEvent={card.dateEvent}
                placeEvent={card.placeEvent}
                nameUser={card.nameUser}
                orderId={card.orderId}
                dayEvent={card.dayEvent}
                hourEvent={card.hourEvent}
                typeTicket={card.typeTicket}
                quantity={card.quantity}
                barcode={card.barcode}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex space-x-4 justify-between items-center px-20">
        <button
          onClick={prevCard}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
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
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
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
    </div>
  );
};
