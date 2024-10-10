import { PurchaseHistoryCard } from "../components";

export const ListTicketHistory = () => {
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
          nameEvent="Bruno Mars | Stars 25"
          priceEvent={150}
          dateEvent="2025-01-05"
          placeEvent="Buenos Aires, Argentina"
          hourEvent="15:00"
        />
        <PurchaseHistoryCard
          dateBuy="2024-12-20"
          nameEvent="Bruno Mars | Stars 25"
          priceEvent={150}
          dateEvent="2025-01-05"
          placeEvent="Buenos Aires, Argentina"
          hourEvent="15:00"
        />
        <PurchaseHistoryCard
          dateBuy="2024-12-20"
          nameEvent="Bruno Mars | Stars 25"
          priceEvent={150}
          dateEvent="2025-01-05"
          placeEvent="Buenos Aires, Argentina"
          hourEvent="15:00"
        />
        <PurchaseHistoryCard
          dateBuy="2024-12-20"
          nameEvent="Bruno Mars | Stars 25"
          priceEvent={150}
          dateEvent="2025-01-05"
          placeEvent="Buenos Aires, Argentina"
          hourEvent="15:00"
        />
        <PurchaseHistoryCard
          dateBuy="2024-12-20"
          nameEvent="Bruno Mars | Stars 25"
          priceEvent={150}
          dateEvent="2025-01-05"
          placeEvent="Buenos Aires, Argentina"
          hourEvent="15:00"
        />
        <PurchaseHistoryCard
          dateBuy="2024-12-20"
          nameEvent="Bruno Mars | Stars 25"
          priceEvent={150}
          dateEvent="2025-01-05"
          placeEvent="Buenos Aires, Argentina"
          hourEvent="15:00"
        />
      </div>
    </div>
  );
};
