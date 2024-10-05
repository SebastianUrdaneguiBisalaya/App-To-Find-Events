import { ShoppingCart } from "../Layout/ShoppingCart";

export const BuyTickets = () => {
  return (
    <div className="md:h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-between bg-white w-full md:w-[700px] md:shadow-md rounded-[20px]">
        <div className="flex justify-between items-center w-full p-4 md:hidden transition-opacity duration-500 opacity-100 fade-out">
          <button className="m-4 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
            >
              <path
                fill="#761CBC"
                d="m10.8 12l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"
              />
            </svg>
          </button>
          <svg
            className="m-4"
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 512 512"
          >
            <path
              fill="#761CBC"
              d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"
            />
            <path
              fill="#761CBC"
              d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97"
            />
          </svg>
        </div>
        <div className="font-medium font-poppins text-3xl text-[#761CBC]">Carrito de compras</div>
        <ShoppingCart />
      </div>
    </div>
  );
};
