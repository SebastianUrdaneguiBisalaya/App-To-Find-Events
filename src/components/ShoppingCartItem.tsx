interface ShoppingCartItemProps {
  title: string;
  price: string;
  taxes: string;
  details: string;
}

export const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ title, price, taxes, details }) => {
  return (
    <div className="flex justify-between items-center m-3">
      <div>
        <h4 className="font-[700]">{title}</h4>
        <div className="flex items-center mb-[-8px]">
          <small className="text-base font-[400] mr-2">{price}</small>
          <small className="text-xs text-[#7C7C7C] font-[300] "> {taxes}</small>
        </div>
        <small className="text-xs text-[#7C7C7C] font-[300]">{details}</small>
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
