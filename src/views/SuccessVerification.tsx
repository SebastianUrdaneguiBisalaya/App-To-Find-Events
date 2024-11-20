import { SuccessMesagge } from "./SuccessMessage";

export const SuccessVerification = () => {
  return (
    <SuccessMesagge
      title="Tu cuenta ha sido verificada"
      message="Conoce los eventos que tenemos para ti "
      linkText="iniciando sesión aquí"
      linkTo="/login"
    />
  );
};
