export const InputSearch = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="border-2 border-gray-500 rounded-md px-2 py-3 max-w-xs w-full mr-4 ml-4 mt-2 mb-2 flex flex-row items-center justify-between">
        <input
          type="text"
          className="w-full mx-1 px-1 outline-none bg-transparent text-gray-600"
          placeholder="Buscar eventos"
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <circle
                cx="11"
                cy="11"
                r="8"
              />
              <path d="m21 21l-4.3-4.3" />
            </g>
          </svg>
        </button>
      </div>
      <div className="flex flex-row items-center justify-end max-w-xs w-full mr-4 ml-4">
        <input
          type="date"
          className="mx-1 px-1 outline-none bg-transparent text-sm text-gray-600"
        />
      </div>
    </div>
  );
};
