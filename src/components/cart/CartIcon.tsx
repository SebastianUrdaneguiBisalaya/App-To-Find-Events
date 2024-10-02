import React from "react";

interface CartIconProps {
  itemCount: number;
}

export const CartIcon: React.FC<CartIconProps> = ({ itemCount }) => {
  return (
    <div className="relative w-9">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-8 w-8 text-primary-color"
      >
        <path
          fill="currentColor"
          d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.99 1.99 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921"
        />
        <circle
          cx="10.5"
          cy="19.5"
          r="1.5"
          fill="currentColor"
        />
        <circle
          cx="17.5"
          cy="19.5"
          r="1.5"
          fill="currentColor"
        />
      </svg>

      {itemCount > 0 && (
        <div className="absolute top-0 right-0 bg-red-700 text-white text-xs font-medium rounded-full h-4 w-4 flex items-center justify-center">
          <span>{itemCount}</span>
        </div>
      )}
    </div>
  );
};
