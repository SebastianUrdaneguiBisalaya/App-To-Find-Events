import { Button } from "./Button";
import { Texts } from "../TextTypes/Texts";

interface PropTotalAmountBar {
  id: string;
  product: string;
  price: string;
}

interface DataTotalBuy {
  dataTotalBuy: PropTotalAmountBar[];
}

function getTotalAmount(dataTotalBuy: PropTotalAmountBar[]) {
  let init = 0;
  const result = dataTotalBuy.map((item) => parseFloat(item.price)).reduce((val, acc) => val + acc, init);
  return result;
}

export const TotalAmountBar = ({ dataTotalBuy }: DataTotalBuy) => {
  return (
    <div className="flex min-[300px]:flex-row flex-col justify-start min-[300px]:items-center min-[300px]:justify-between bg-[#F2F2F2] p-3 gap-1">
      <div>
        <Texts
          text="Total:"
          type="secondary"
          color="black"
        />
        <span className="flex flex-row items-center gap-1 mt-2 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="#761CBC"
              d="m12 9.289l-.688-.689l2.094-2.1H8.5v-1h4.906l-2.1-2.1l.694-.688L15.288 6zM7.308 21.116q-.633 0-1.067-.434t-.433-1.066t.433-1.067q.434-.433 1.067-.433t1.066.433t.434 1.067t-.434 1.066t-1.066.434m9.384 0q-.632 0-1.066-.434t-.434-1.066t.434-1.067q.434-.433 1.066-.433t1.067.433q.433.434.433 1.067q0 .632-.433 1.066q-.434.434-1.067.434M2 3.5v-1h2.448l4.096 8.616h6.635q.173 0 .308-.087q.134-.087.23-.24L19.213 4.5h1.14l-3.784 6.835q-.217.365-.564.573t-.763.208H8.1l-1.215 2.23q-.154.231-.01.5t.433.27h10.884v1H7.308q-.875 0-1.309-.735t-.018-1.485l1.504-2.68L3.808 3.5z"
            />
          </svg>
          <Texts
            text={`S/. ${getTotalAmount(dataTotalBuy)}`}
            type="body"
            color="black"
          />
        </span>
      </div>
      <div>
        <Button
          text="Comprar Ticket"
          onClick={() => console.log("Comprar Ticket")}
        />
      </div>
    </div>
  );
};
