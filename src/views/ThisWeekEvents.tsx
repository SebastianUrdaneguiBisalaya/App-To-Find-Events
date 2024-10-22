import { TrendingEventCard } from "../components/TrendingEventCard";
import { InputSearch, CategoryTags } from "../components";
import { fetchData } from "../services";
import { useInfiniteScroll } from "../hooks";
import { useEffect, useRef, useState } from "react";

export const ThisWeekEvents = () => {
  const [data, setData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<Array<string>>([]);
  const abortControllerRef = useRef<AbortController | null>(null);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchThisWeekEvents = async (currentOffset: number, resetData = false) => {
    if (loading) return;

    try {
      setLoading(true);
      const controller = new AbortController();
      abortControllerRef.current = controller;

      const baseUrl =
        searchQuery || (startDate && endDate)
          ? "http://localhost:3000/istrendingevents"
          : "http://localhost:3000/isthisweekevents";

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
      fetchThisWeekEvents(offset);
    }
    return () => {
      if (abortControllerRef.current && loading) {
        abortControllerRef.current.abort();
      }
    };
  }, [offset, hasMore]);

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
      fetchThisWeekEvents(0, true);
    }
  }, [searchQuery, startDate, endDate]);

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
        </div>
      </div>
      <div>
        <h3 className="font-poppins font-bold text-xl mt-5">Esta semana</h3>
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
