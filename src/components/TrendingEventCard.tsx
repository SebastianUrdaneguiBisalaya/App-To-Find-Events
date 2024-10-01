interface TrendingEventCardProps {
  imageUrl: string;
  artist: string;
  eventTitle: string;
  location: string;
  date: string;
  price: string;
}

export const TrendingEventCard: React.FC<TrendingEventCardProps> = ({
  imageUrl,
  artist,
  eventTitle,
  location,
  date,
  price,
}) => {
  return (
    <div
      className="max-h-[186px] max-w-[339px] inset-0 flex items-center justify-center p-4 bg-cover bg-center rounded-lg"
      style={{ backgroundImage: `url(${imageUrl})` }}
      aria-label="Event Card"
    >
      <div className="bg-[#2D264B80] bg-opacity-50 p-4 rounded-lg w-[332px] mt-20 mb-2">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold text-base text-white">
              {artist} <span>{eventTitle}</span>
            </p>
            <p className="font-normal text-sm text-white">
              <span className="text-xs text-white mr-2 icon-[tdesign--location]"></span>
              {location}
            </p>
            <p className="font-normal text-sm text-white">
              <span className="text-xs text-white mr-2 icon-[solar--calendar-search-outline]"></span>
              {date}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ml-4">
            <p className="font-normal text-white text-center text-[10px]">Entradas desde</p>
            <p className="font-semibold text-base text-white text-center">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
