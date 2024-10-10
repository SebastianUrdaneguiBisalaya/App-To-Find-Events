import { TrendingEventCard } from "../components/TrendingEventCard";
import { InputSearch, CategoryTags } from "../components";

export const ThisWeekEvents = () => {
  return (
    <div className="font-poppins max-w-[1500px] mx-auto my-0 px-10 pt-5">
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-4">
        <h2 className="text-3xl font-bold items-center justify-center">
          Encontrar
          <h2 className="text-primary">Eventos en Tendencia</h2>
        </h2>
        <div className="flex-1 flex-col items-center justify-end w-full">
          <InputSearch />
          <div className="flex flex-wrap items-center justify-center pt-6 gap-y-3">
            <CategoryTags category="Concierto" />
            <CategoryTags category="Fiesta" />
            <CategoryTags category="Teatro" />
            <CategoryTags category="Ballet" />
            <CategoryTags category="Otros" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-poppins font-bold text-xl mt-5">Esta semana</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <TrendingEventCard
          imageUrl="https://d35kvm5iuwjt9t.cloudfront.net/dbimages/sfx281320.jpg"
          eventTitle="24K Magic"
          artist="Bruno Mars"
          location="Buenos Aires, Argentina"
          date="2025-02-01"
          price="100$"
        />
      </div>
    </div>
  );
};
