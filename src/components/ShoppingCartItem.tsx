import { Texts } from "./Texts";

interface ShoppingCartItemProps {
  title?: string;
  tickettype: string;
  price: string;
  taxes: string;
  details: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({
  title,
  tickettype,
  price,
  taxes,
  details,
  onChange,
}) => {
  return (
    <div className="flex justify-between items-center m-3 max-w-[342px]">
      <div className="max-w-[280px]">
        <h4 className="font-[700] text-primary font-poppins truncate">{title}</h4>
        <h6 className="font-medium text-sm font-poppins truncate">{tickettype}</h6>
        <div className="flex items-center mb-[-8px]">
          <Texts
            text={price}
            type="body"
            color="black"
            className="mr-2"
          />
          <small className="text-xs text-[#7C7C7C] font-[300] font-poppins truncate"> {taxes}</small>
        </div>
        <small className="text-xs text-[#7C7C7C] font-[300] font-poppins truncate">{details}</small>
      </div>
      <div>
        <select
          className="border border-[#7C7C7C] rounded-md"
          name="quantity"
          onChange={onChange}
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
