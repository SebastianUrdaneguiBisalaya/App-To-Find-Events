import { Barcode } from "./barcode";

type TicketCardProps = {
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

export const TicketCard = ({
  nameEvent,
  dateEvent,
  placeEvent,
  nameUser,
  orderId,
  dayEvent,
  hourEvent,
  typeTicket,
  quantity,
  barcode,
}: TicketCardProps) => {
  return (
    <div className="max-w-[22rem] h-full font-poppins rounded-2xl shadow-xl bg-white">
      <div className="p-4">
        <img
          className="w-full rounded-xl h-[10rem] object-cover"
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image of Ticket"
        />
      </div>
      <div className="flex flex-col gap-2 px-4">
        <h4 className="text-xl font-bold">{nameEvent}</h4>
        <p className="text-xs text-left">{`${dateEvent ? dateEvent : ""} ~ ${placeEvent ? placeEvent : ""}`}</p>
      </div>
      <div className="bg-gray-200 w-full mt-4 px-4 flex flex-row justify-center items-center">
        <hr className="border-none border-t-2 h-[0.01rem]" />
      </div>
      <div className="flex flex-col gap-2 px-4">
        <div className="flex flex-row justify-between text-xs mt-4">
          <div className="w-full">
            <p className="font-bold">Apellidos y Nombres</p>
            <p>{nameUser}</p>
          </div>
          <div className="w-full">
            <p className="font-bold">Número de Orden</p>
            <p>{orderId}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between text-xs mt-4">
          <div className="w-full">
            <p className="font-bold">Día del Evento</p>
            <p>{dayEvent}</p>
          </div>
          <div className="w-full">
            <p className="font-bold">Hora del Evento</p>
            <p>{hourEvent}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between text-xs mt-4">
          <div className="w-full">
            <p className="font-bold">Tipo de Ticket</p>
            <p>{typeTicket}</p>
          </div>
          <div className="w-full">
            <p className="font-bold">Cantidad</p>
            <p>{quantity}</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 flex flex-row justify-center items-center">
        <svg
          width="20"
          height="40"
          viewBox="0 0 20 40"
          className="overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,0,0)"
        >
          <path
            d="M 20 0 A 20 20 0 0 0 20 40"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="2"
          ></path>
        </svg>
        <div className="flex-grow border-t-2 border-dashed border-gray-300 mx-[-1px]"></div>
        <svg
          width="20"
          height="40"
          viewBox="0 0 20 40"
          className="overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,0,0)"
        >
          <path
            d="M 0 0 A 20 20 0 0 1 0 40"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="2"
          ></path>
        </svg>
      </div>
      <div className="w-full flex flex-col justify-center items-center pt-3">
        <div className="w-[17rem] h-[9rem]">
          <Barcode code={barcode} />
        </div>
        <p className="text-xs my-4">Escanea el código de barras</p>
      </div>
    </div>
  );
};
