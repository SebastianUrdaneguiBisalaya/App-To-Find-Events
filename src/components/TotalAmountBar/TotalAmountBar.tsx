import { Button } from "./Button";

type PropTotalAmountBar = {
  totalAmount: number;
};

export const TotalAmountBar = ({ totalAmount }: PropTotalAmountBar) => {
  return (
    <div>
      <div>
        <div>Total:</div>
        <div>{totalAmount}</div>
      </div>
      <div>
        <Button
          text="Search"
          onClick={() => console.log("Search")}
        />
      </div>
    </div>
  );
};
