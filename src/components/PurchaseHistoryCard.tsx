type PurchaseHistoryCardProps = {
  order_date: string;
  event_name: string;
  event_date: string;
  event_place: string;
  event_hour: string;
  onClick: () => void;
};

export const PurchaseHistoryCard = ({
  order_date,
  event_name,
  event_date,
  event_place,
  event_hour,
  onClick,
}: PurchaseHistoryCardProps) => {
  return (
    <button
      className="flex flex-col md:min-w-[15rem] h-auto shadow-xl rounded-2xl p-4 font-poppins justify-start items-start"
      onClick={onClick}
    >
      <div className="w-full">
        <p className="flex justify-between items-center text-left font-bold text-xs">
          Día de compra: <span className="font-normal text-sm">{order_date ? order_date : ""}</span>
        </p>
        <div className="flex xs:flex-row flex-col justify-between xs:items-center items-start">
          <h4 className="max-w-56 text-left text-base font-bold mt-2">{event_name ? event_name : ""}</h4>
        </div>
        <p className="text-left text-xs text-gray-600 mt-2">Datos del evento:</p>
        <p className="flex justify-between items-center text-left text-xs font-medium text-gray-500 mt-2">
          Día: <span className="text-sm font-normal text-black">{event_date ? event_date : ""}</span>
        </p>
        <p className="flex justify-between items-center text-left text-xs font-medium text-gray-500">
          Lugar: <span className="text-sm font-normal text-black">{event_place ? event_place : ""}</span>
        </p>
        <p className="flex justify-between items-center text-left text-xs font-medium text-gray-500">
          Hora: <span className="text-sm font-normal text-black">{event_hour ? event_hour : ""}</span>
        </p>
      </div>
    </button>
  );
};
