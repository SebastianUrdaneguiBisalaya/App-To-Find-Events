import { Texts } from "./Texts";

interface ShoppingCartItemProps {
  title: string;
  price: string;
  taxes: string;
  details: string;
}

export const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ title, price, taxes, details }) => {
  return (
    <div className="flex justify-between items-center m-3 max-w-[342px]">
      <div>
        <h4 className="font-[700] font-poppins">{title}</h4>
        <div className="flex items-center mb-[-8px]">
          <Texts
            text={price}
            type="body"
            color="black"
            className="mr-2"
          />
          <small className="text-xs text-[#7C7C7C] font-[300] font-poppins"> {taxes}</small>
        </div>
        <small className="text-xs text-[#7C7C7C] font-[300] font-poppins">{details}</small>
      </div>
      <div>
        <select
          className="border border-[#7C7C7C] rounded-md"
          name="quantity"
        >
          {[...Array(11)].map((_, index) => (
            <option
              key={index}
              value={index}
            >
              {index}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
