import { Link } from "react-router-dom";

export const Cancel = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white rounded-3xl shadow-lg p-8 text-center min-w-[300px]">
        <h1 className="text-2xl font-bold font-poppins">No pudimos procesar tu compra</h1>
        <div className="my-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 16 16"
            className="mx-auto"
          >
            <path
              fill="#9d0627"
              d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8L4.646 5.354a.5.5 0 1 1 .708-.708"
            />
          </svg>
        </div>
        <p className="font-poppins text-xl my-2 mx-4">Algo salió mal,.</p>
        <p className="font-poppins text-xl mb-6">
          <Link
            className="text-primary hover:text-secondary cursor-pointer"
            to={"/"}
          >
            intenta nuevamente
          </Link>
        </p>
      </div>
    </div>
  );
};
