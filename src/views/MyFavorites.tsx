import { useEffect, useRef, useState } from "react";
import { TrendingEventCard } from "../components";
import { fetchData } from "../services";
import { useAuthStore } from "../store/AuthStore";

export interface FavoriteEvent {
  event_id: string;
  event_img: string;
  event_artist: string;
  event_name: string;
  event_place: string;
  event_date: string;
  event_price: string;
  is_favorite: boolean;
}

export const MyFavorites = () => {
  const [data, setData] = useState<FavoriteEvent[]>([]);
  const abortController = useRef<AbortController | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthStore((state) => state);
  const fetchFavoriteEvents = async () => {
    try {
      if (!user) return;
      setIsLoading(true);
      const controller = new AbortController();
      abortController.current = controller;
      const result = await fetchData({
        baseUrl: `${import.meta.env.VITE_API_EVENT_FAVORITES}/${user.id}`,
        signal: controller.signal,
        options: {
          credentials: "include",
        },
      });
      setData(result);
    } catch (error) {
      throw new Error(`Unnable to fetch data: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchFavoriteEvents();
    return () => {
      if (abortController.current && isLoading) {
        abortController.current.abort();
      }
    };
  }, []);

  return (
    <div className="font-poppins max-w-[1500px] mx-auto my-0 px-10 pt-5">
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-4">
        <h2 className="text-3xl font-bold items-center justify-center">
          Mis Eventos&nbsp;
          <span className="text-primary">Favoritos</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {data.map((item) => (
          <TrendingEventCard
            key={item.event_id}
            id={item.event_id}
            imageUrl={item.event_img}
            artist={item.event_artist}
            eventTitle={item.event_name}
            location={item.event_place}
            date={item.event_date}
            price={item.event_price}
            is_favorite={item.is_favorite}
          />
        ))}
        {isLoading &&
          Array.from({ length: 10 }).map((_, index) => (
            <div
              role="status"
              key={`loading-${index}`}
              className="relative min-w-[200px] min-h-[200px] flex items-center justify-center p-4 bg-gray-300 animate-pulse rounded-lg"
            ></div>
          ))}
      </div>
    </div>
  );
};
