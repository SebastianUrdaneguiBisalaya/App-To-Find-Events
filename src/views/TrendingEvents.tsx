import { InputSearch, CategoryTags, TrendingEventCard } from "../components";
import { useEffect, useRef, useState } from "react";
import { fetchData } from "../services";
import { useInfiniteScroll } from "../hooks";
import { useAuthStore } from "../store/AuthStore";

export const TrendingEvents = () => {
  const [data, setData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<Array<string>>([]);
  const abortControllerRef = useRef<AbortController | null>(null);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const { user } = useAuthStore((state) => state);

  const fetchTrendingEvents = async (currentOffset: number, resetData = false) => {
    if (loading) return;

    try {
      setLoading(true);
      const controller = new AbortController();
      abortControllerRef.current = controller;

      const baseUrl =
        searchQuery || (startDate && endDate)
          ? "http://localhost:3000/istrendingevents"
          : "http://localhost:3000/trendingEvents";

      const params = new URLSearchParams({
        limit: "10",
        offset: currentOffset.toString(),
      });

      if (searchQuery !== "" && startDate === "" && endDate === "") {
        params.append("event_name", searchQuery);
      } else if (searchQuery !== "" && startDate !== "" && endDate !== "") {
        params.append("event_name", searchQuery);
        params.append("event_date_start", startDate);
        params.append("event_date_end", endDate);
      } else if (searchQuery === "" && startDate !== "" && endDate !== "") {
        params.append("event_date_start", startDate);
        params.append("event_date_end", endDate);
      }

      if (sortOrder) params.append("sort", sortOrder);

      if (user) params.append("user_id", user.id);

      const fetchUrl = `${baseUrl}?${params.toString()}`;
      const response = await fetchData({ baseUrl: fetchUrl, signal: controller.signal });
      if (response.length < 10) setHasMore(false);
      setData((previousData) => (resetData ? response : [...previousData, ...response]));
    } catch (error: any) {
      console.error(`Error fetching data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasMore && !loading) {
      fetchTrendingEvents(offset);
    }
    return () => {
      if (abortControllerRef.current && loading) {
        abortControllerRef.current.abort();
      }
    };
  }, [offset, hasMore, sortOrder]);

  const lastEventElementRef = useInfiniteScroll({
    loading,
    hasMore,
    onIntersect: () => {
      if (hasMore) {
        setOffset((previousOffset) => previousOffset + 10);
      }
    },
  });

  const categoryTags = ["Concierto", "Fiesta", "Teatro", "Ballet", "Otros"];

  const toggleCategory = (category: string) => {
    setSelectedCategories((previousSelected) =>
      previousSelected.includes(category)
        ? previousSelected.filter((c) => c !== category)
        : [...previousSelected, category],
    );
  };

  const handleSearch = (startDate: string, endDate: string, searchQuery: string) => {
    setData([]);
    setOffset(0);
    setHasMore(true);
    setSearchQuery(searchQuery);
    setStartDate(startDate);
    setEndDate(endDate);
  };

  useEffect(() => {
    if (searchQuery !== "" || (startDate !== "" && endDate !== "")) {
      setData([]);
      fetchTrendingEvents(0, true);
    }
  }, [searchQuery, startDate, endDate]);

  const handleSortUpByPrice = () => {
    setSortOrder("asc");
    setData([]);
    setOffset(0);
    setHasMore(true);
  };

  const filteredData =
    selectedCategories.length === 0 ? data : data.filter((item) => selectedCategories.includes(item?.event_category));

  return (
    <div className="font-poppins max-w-[1500px] mx-auto my-0 px-10 pt-5">
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-4">
        <h2 className="text-3xl font-bold items-center justify-center">
          Encontrar
          <br />
          <span className="text-primary">Eventos en Tendencia</span>
        </h2>
        <div className="flex-1 flex-col items-center justify-end w-full">
          <InputSearch onSearch={handleSearch} />
          <div className="flex justify-center items-center">
            <div className="flex flex-col sm:flex-row justify-between sm:gap-10 items-center">
              <div className="flex flex-wrap items-center justify-center pt-6 gap-y-3">
                {categoryTags.map((category, index) => (
                  <CategoryTags
                    key={index}
                    category={category}
                    isSelected={selectedCategories.includes(category)}
                    onClick={toggleCategory}
                  />
                ))}
              </div>
              <div className="flex flex-row justify-end items-center gap-1 pt-2 sm:pt-6">
                <p className="text-sm font-poppins">Ordenar por Precio</p>
                <button
                  className="cursor-pointer flex"
                  onClick={handleSortUpByPrice}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#761CBC"
                      fillRule="evenodd"
                      d="M16.763 3.289a.75.75 0 0 1 .837.261l3 4a.75.75 0 1 1-1.2.9l-1.65-2.2V20a.75.75 0 1 1-1.5 0V4a.75.75 0 0 1 .513-.711M3.25 8A.75.75 0 0 1 4 7.25h9a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 8m2 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m2 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-poppins font-bold text-xl mt-5">Tendencia</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {filteredData &&
          filteredData.map((item, index) => (
            <TrendingEventCard
              ref={data.length === index + 1 ? lastEventElementRef : null}
              key={item?.event_id}
              id={item?.event_id}
              imageUrl={item?.event_img}
              eventTitle={item?.event_name}
              artist={item?.event_artist}
              location={item?.event_place}
              date={item?.event_date}
              price={item?.event_price}
              is_favorite={item?.is_favorite}
            />
          ))}
        {loading &&
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
