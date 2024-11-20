import { SuccessMesagge } from "./SuccessMessage";

export const Success = () => {
  return (
    <SuccessMesagge
      title="Tu compra ha sido exitosa"
      message="Puedes ver tus tickets en la sección "
      linkText="historial de compras"
      linkTo="/history"
    />
  );
};
