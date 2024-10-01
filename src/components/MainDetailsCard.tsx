import { Texts } from "./TextTypes/Texts";

interface MainDetailsCardProps {
  artist: string;
  eventTitle: string;
  location: string;
  date: string;
  capacity: string;
}

export const MainDetailsCard: React.FC<MainDetailsCardProps> = ({ artist, eventTitle, location, date, capacity }) => {
  return (
    <div className=" bg-white mx-auto shadow-sm py-10 pl-6 pr-10 rounded-[14px] w-[346px] ">
      <div>
        <p className="font-semibold text-base">
          {artist} <span className="text-[#761CBC]">{eventTitle}</span>
        </p>
        <p className="flex items-center">
          <span className="text-xs text-[#2D264B50] mr-2 icon-[tdesign--location]"></span>
          <Texts
            text={location}
            type="body"
            color="black"
            className="font-normal text-sm"
          />
        </p>
        <p className="flex items-center">
          <span className="text-xs text-[#2D264B50] mr-2 icon-[solar--calendar-search-outline]"></span>
          <Texts
            text={date}
            type="body"
            color="black"
            className="font-normal text-sm"
          />
        </p>
        <p className="font-medium text-sm">{capacity}</p>
      </div>
    </div>
  );
};
