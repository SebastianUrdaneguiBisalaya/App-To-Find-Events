interface MainDetailsCardProps {
  artist: string;
  eventTitle: string;
  location: string;
  date: string;
  capacity: string;
}

export const MainDetailsCard: React.FC<MainDetailsCardProps> = ({ artist, eventTitle, location, date, capacity }) => {
  return (
    <div className="inline-block shadow-sm py-10 pl-6 pr-10 rounded-[14px]">
      <div>
        <p className="font-semibold text-base">
          {artist} <span className="text-[#761CBC]">{eventTitle}</span>
        </p>
        <p className="font-normal text-sm">
          <span className="text-xs text-gray-500 mr-2 icon-[tdesign--location]"></span>
          {location}
        </p>
        <p className="font-normal text-sm">
          <span className="text-xs text-gray-500 mr-2 icon-[solar--calendar-search-outline]"></span>
          {date}
        </p>
        <p className="font- text-sm">{capacity}</p>
      </div>
    </div>
  );
};
