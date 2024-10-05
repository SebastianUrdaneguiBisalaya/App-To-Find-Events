import { ShoppingCartItem, TotalAmountBar, Texts } from "../components";
import { useQuantity } from "../hooks/useQuantity";

interface CartItem {
  title: string;
  tickettype: string;
  price: string;
  taxes: string;
  details: string;
}

const cartItems: CartItem[] = [
  {
    title: "Keane: Hopes and Fears 20 years world tour",
    tickettype: "Entrada General",
    price: "80.00",
    taxes: "Incluye impuestos",
    details: "Tribuna",
  },
  {
    title: "Keane: Hopes and Fears 20 years world tour",
    tickettype: "Entrada VIP",
    price: "100.00",
    taxes: "Incluye impuestos",
    details: "Campo",
  },
  {
    title: "Keane: Hopes and Fears 20 years world tour",
    tickettype: "Entrada VIP + Meet & Greet",
    price: "180.00",
    taxes: "Incluye impuestos",
    details: "Incluye meet & greet",
  },
];

export const ShoppingCart: React.FC = () => {
  const { quantities, handleQuantityChange } = useQuantity(Array(cartItems.length).fill(0));

  const handleSelectChange = (index: number) => (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleQuantityChange(index, parseInt(event.target.value));
  };

  return (
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8">
      <Texts
        text="Tu carrito de compras"
        type="subtitle"
        color="#761CBC"
      />
      <div className="flex flex-col items-center w-full max-w-md">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="w-full mb-4"
            onChange={handleSelectChange(index)}
          >
            <ShoppingCartItem
              title={item.title}
              tickettype={item.tickettype}
              price={item.price}
              taxes={item.taxes}
              details={item.details}
            />
          </div>
        ))}
      </div>
      <div className="w-full max-w-lg">
        <TotalAmountBar
          dataTotalBuy={cartItems.map((item, index) => ({
            id: item.title,
            product: item.title,
            price: (parseFloat(item.price) * quantities[index]).toFixed(2),
          }))}
        />
      </div>
    </div>
  );
};
