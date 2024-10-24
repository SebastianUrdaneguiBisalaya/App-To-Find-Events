import { Link } from "react-router-dom";

export const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white rounded-3xl shadow-lg p-8 text-center min-w-[300px]">
        <h1 className="text-2xl font-bold font-poppins">Tu compra ha sido exitosa</h1>
        <div className="my-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            className="mx-auto"
          >
            <path
              fill="#761CBC"
              d="m23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68zm-13 5l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9z"
            />
          </svg>
        </div>
        <p className="font-poppins text-xl my-2 mx-4">En breve recibirás un mail con la información de tu compra.</p>
        <p className="font-poppins text-xl mb-6">
          Puedes ver tus tickets en la sección{" "}
          <Link
            className="text-primary hover:text-secondary cursor-pointer"
            to={"/history"}
          >
            historial de compras
          </Link>
        </p>
      </div>
    </div>
  );
};
