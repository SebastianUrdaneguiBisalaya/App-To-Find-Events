export interface UpcomingEvent {
  id: number;
  image: string;
  title: string;
  location: string;
  date: string;
  price: string;
}

interface UpcomingEventCardProps {
  data: UpcomingEvent;
}

export const UpcomingEventCard: React.FC<UpcomingEventCardProps> = ({ data }) => {
  const { image, title, location, date, price } = data;
  return (
    <div className="bg-white min-w-[11rem] md:min-w-[14rem] rounded-xl shadow-xl border-1 p-3">
      <img
        src={image}
        alt={title}
        className="w-full min-h-[6.5rem] md:h-[8rem] rounded-xl"
      />
      <div className="mt-2">
        <h3 className="text-base font-semibold">{title}</h3>
        <div className="flex flex-col mt-1 gap-1 text-gray-500 text-sm font-normal">
          <div className="flex items-start justify-between gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              strokeWidth={1.5}
              className="w-5 h-5"
            >
              <path
                fill="currentColor"
                d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"
              />
              <path
                fill="currentColor"
                d="m16 30l-8.436-9.949a35 35 0 0 1-.348-.451A10.9 10.9 0 0 1 5 13a11 11 0 0 1 22 0a10.9 10.9 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.9 8.9 0 0 0 25 13a9 9 0 1 0-18 0a8.9 8.9 0 0 0 1.813 5.395"
              />
            </svg>
            <p className="w-[90%]">{location}</p>
          </div>
          <div className="flex items-start justify-between gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                fill="currentColor"
                d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z"
              />
            </svg>
            <p className="w-[90%]">{date}</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-1 mt-1 text-orange-600 text-lg font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path
              fill="currentColor"
              d="m10.904 2.1l9.9 1.414l1.414 9.9l-9.192 9.192a1 1 0 0 1-1.415 0l-9.9-9.9a1 1 0 0 1 0-1.413zm.707 2.122L3.833 12l8.485 8.485l7.779-7.778l-1.061-7.425zm2.122 6.363a2 2 0 1 1 2.828-2.828a2 2 0 0 1-2.828 2.829"
            />
          </svg>
          <p className="w-[90%]">{price}</p>
        </div>
      </div>
    </div>
  );
};
