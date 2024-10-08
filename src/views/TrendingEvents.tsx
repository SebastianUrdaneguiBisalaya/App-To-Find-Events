import { TrendingEventCard } from "../components/TrendingEventCard";
import { InputSearch } from "../components";

export const TrendingEvents = () => {
  return (
    <div className="font-poppins max-w-[1500px] mx-auto my-0 px-10">
      <div className="bg-red-300 flex flex-row">
        <h2 className="text-3xl font-bold pt-6">Trending Events</h2>
        <InputSearch />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <TrendingEventCard
          imageUrl="https://elcomercio.pe/resizer/tlW6F-sWlnB3e1G0e_QHznPOOEA=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/V6L3WBLI3JC6RK2LHHDEEVJR5Y.JPG"
          eventTitle="Anuel AA RHLM 2"
          artist="Anuel AA"
          location="Buenos Aires, Argentina"
          date="2025-02-01"
          price="100$"
        />
        <TrendingEventCard
          imageUrl="https://elcomercio.pe/resizer/tlW6F-sWlnB3e1G0e_QHznPOOEA=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/V6L3WBLI3JC6RK2LHHDEEVJR5Y.JPG"
          eventTitle="Anuel AA RHLM 2"
          artist="Anuel AA"
          location="Buenos Aires, Argentina"
          date="2025-02-01"
          price="100$"
        />
        <TrendingEventCard
          imageUrl="https://elcomercio.pe/resizer/tlW6F-sWlnB3e1G0e_QHznPOOEA=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/V6L3WBLI3JC6RK2LHHDEEVJR5Y.JPG"
          eventTitle="Anuel AA RHLM 2"
          artist="Anuel AA"
          location="Buenos Aires, Argentina"
          date="2025-02-01"
          price="100$"
        />
        <TrendingEventCard
          imageUrl="https://elcomercio.pe/resizer/tlW6F-sWlnB3e1G0e_QHznPOOEA=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/V6L3WBLI3JC6RK2LHHDEEVJR5Y.JPG"
          eventTitle="Anuel AA RHLM 2"
          artist="Anuel AA"
          location="Buenos Aires, Argentina"
          date="2025-02-01"
          price="100$"
        />
        <TrendingEventCard
          imageUrl="https://elcomercio.pe/resizer/tlW6F-sWlnB3e1G0e_QHznPOOEA=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/V6L3WBLI3JC6RK2LHHDEEVJR5Y.JPG"
          eventTitle="Anuel AA RHLM 2"
          artist="Anuel AA"
          location="Buenos Aires, Argentina"
          date="2025-02-01"
          price="100$"
        />
        <TrendingEventCard
          imageUrl="https://elcomercio.pe/resizer/tlW6F-sWlnB3e1G0e_QHznPOOEA=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/V6L3WBLI3JC6RK2LHHDEEVJR5Y.JPG"
          eventTitle="Anuel AA RHLM 2"
          artist="Anuel AA"
          location="Buenos Aires, Argentina"
          date="2025-02-01"
          price="100$"
        />
        <TrendingEventCard
          imageUrl="https://elcomercio.pe/resizer/tlW6F-sWlnB3e1G0e_QHznPOOEA=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/V6L3WBLI3JC6RK2LHHDEEVJR5Y.JPG"
          eventTitle="Anuel AA RHLM 2"
          artist="Anuel AA"
          location="Buenos Aires, Argentina"
          date="2025-02-01"
          price="100$"
        />
      </div>
    </div>
  );
};
