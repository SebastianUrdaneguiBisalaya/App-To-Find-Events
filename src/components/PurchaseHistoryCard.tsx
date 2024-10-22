type PurchaseHistoryCardProps = {
  dateBuy: string;
  nameEvent: string;
  // priceEvent: number;
  dateEvent: string;
  placeEvent: string;
  hourEvent: string;
  onClick: () => void;
};

export const PurchaseHistoryCard = ({
  dateBuy,
  nameEvent,
  // priceEvent,
  dateEvent,
  placeEvent,
  hourEvent,
  onClick,
}: PurchaseHistoryCardProps) => {
  return (
    <button
      className="flex flex-col md:min-w-[15rem] h-auto shadow-xl rounded-2xl p-4 font-poppins justify-start items-start"
      onClick={onClick}
    >
      <div className="w-full">
        <p className="flex justify-between items-center text-left font-bold text-xs">
          Día de compra: <span className="font-normal text-sm">{dateBuy ? dateBuy : ""}</span>
        </p>
        <div className="flex xs:flex-row flex-col justify-between xs:items-center items-start">
          <h4 className="max-w-56 text-left text-base font-bold mt-2">{nameEvent ? nameEvent : ""}</h4>
          {/* <p className="text-base mt-2 font-bold text-green-800">{`S/. ${priceEvent ? priceEvent : ""}`}</p> */}
        </div>
        <p className="text-left text-xs text-gray-600 mt-2">Datos del evento:</p>
        <p className="flex justify-between items-center text-left text-xs font-medium text-gray-500 mt-2">
          Día: <span className="text-sm font-normal text-black">{dateEvent ? dateEvent : ""}</span>
        </p>
        <p className="flex justify-between items-center text-left text-xs font-medium text-gray-500">
          Lugar: <span className="text-sm font-normal text-black">{placeEvent ? placeEvent : ""}</span>
        </p>
        <p className="flex justify-between items-center text-left text-xs font-medium text-gray-500">
          Hora: <span className="text-sm font-normal text-black">{hourEvent ? hourEvent : ""}</span>
        </p>
      </div>
    </button>
  );
};
