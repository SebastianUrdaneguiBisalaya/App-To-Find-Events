import { useState } from "react";
import { ShoppingCart } from "./ShoppingCart";
import { CartIcon } from "../components";

export const BuyTickets = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="absolute top-2 right-4" //este classname puede ser retirado
        onClick={togglePopup}
      >
        <CartIcon itemCount={0} />
      </div>

      {isOpen && (
        <div className="fixed top-0 right-0 z-50">
          <div className="relative bg-white w-m-[300px] shadow-md rounded-[20px] p-4">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={togglePopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m7 7l10 10M7 17L17 7"
                />
              </svg>
            </button>

            <div className="font-medium font-poppins text-center text-3xl text-[#761CBC] mt-4 mb-4">
              Carrito de compras
            </div>
            <ShoppingCart />
          </div>
        </div>
      )}
    </div>
  );
};
