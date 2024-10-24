import { ShoppingCartItem, TotalAmountBar } from "../components";
import { useQuantity } from "../hooks/useQuantity";

interface CartItem {
  event_id: string;
  ticket_id: string;
  title: string;
  tickettype: string;
  price: string;
  taxes: string;
  details: string;
}

interface ListTicketsPrice {
  cartItems: CartItem[];
}
export const ShoppingCart = ({ cartItems = [] }: ListTicketsPrice) => {
  const { quantities, handleQuantityChange } = useQuantity(Array(cartItems?.length).fill(0));

  const handleSelectChange = (index: number) => (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleQuantityChange(index, parseInt(event.target.value));
  };

  return (
    <div className="flex flex-col items-center p-2 min-w-[300px]">
      <div className="flex flex-col items-center w-full max-w-md">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="w-full flex justify-center"
          >
            <ShoppingCartItem
              title={item.title}
              tickettype={item.tickettype}
              price={`S/. ${item.price}`}
              taxes={item.taxes}
              details={item.details}
              onChange={handleSelectChange(index)}
            />
          </div>
        ))}
      </div>
      <div className="w-full max-w-96 min-w-[342px]">
        <TotalAmountBar
          dataTotalBuy={cartItems?.map((item, index) => ({
            id: item.event_id,
            ticketId: item.ticket_id,
            purchaseAmount: item.price,
            product: item.title,
            quantity: quantities[index],
            price: (parseFloat(item.price) * quantities[index]).toFixed(2),
          }))}
        />
      </div>
    </div>
  );
};
