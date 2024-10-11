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
      className="relative min-w-[200px] min-h-[200px] flex items-center justify-center p-4 bg-cover bg-center rounded-lg cursor-pointer"
      style={{ backgroundImage: `url("${imageUrl}")` }}
      aria-label="Event Card"
    >
      <div className="bg-[#2D264B80] absolute bottom-0 bg-opacity-50 mx-4 p-4 mb-2 rounded-lg w-[calc(100%-2rem)]">
        <div className="flex justify-between">
          <div className="w-[70%]">
            <p className="font-semibold text-base text-white">
              {artist}: <span>{eventTitle}</span>
            </p>
            <div className="flex flex-row items-center font-normal text-sm text-white">
              <svg
                className="mr-1 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26 26 0 0 0 12 20.758q.262-.201.615-.49a26 26 0 0 0 2.647-2.504C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053l-.27-.197a28 28 0 0 1-3.797-3.44C5.218 16.875 3 13.636 3 9.999a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28 28 0 0 1-3.796 3.44a17 17 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0"
                />
              </svg>
              <p className="truncate">{location}</p>
            </div>
            <div className="flex flex-row items-center font-normal text-sm text-white truncate">
              <svg
                className="mr-1 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.194-.013h4.112c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827q.39.03.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87q.074.562.107 1.23a.75.75 0 0 1 .019.46c.027.801.027 1.712.027 2.743V14a.75.75 0 0 1-1.5 0v-2c0-.854 0-1.597-.013-2.25H2.763c-.013.653-.013 1.396-.013 2.25v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4a.75.75 0 0 1 0 1.5H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.031 0-1.942.027-2.744a.75.75 0 0 1 .02-.46q.032-.667.106-1.229c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2.5A.75.75 0 0 1 7 1.75m-4.168 6.5h18.336q-.024-.284-.058-.54c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 6.705 2.89 7.71q-.034.255-.058.539M18 15.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M14.25 18a3.75 3.75 0 1 1 6.879 2.068l1.401 1.402a.75.75 0 1 1-1.06 1.06l-1.402-1.401A3.75 3.75 0 0 1 14.25 18"
                  clip-rule="evenodd"
                />
              </svg>
              <p className="truncate">{date}</p>
            </div>
          </div>
          <div className="w-[30%] flex flex-col items-center justify-center ml-4 break-words">
            <p className="font-normal text-white text-center text-[10px]">Entradas desde</p>
            <p className="font-semibold text-base text-white text-center">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
