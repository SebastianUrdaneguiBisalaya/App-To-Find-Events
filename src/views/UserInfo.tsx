import { Button, UserCard, UserConfigurations } from "../components";
import { Link } from "react-router-dom";

export const UserInfo = () => {
  return (
    <>
      <div className="md:h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-white md:flex-row md:w-[906px] mx-auto my-auto px-10 py-10 md:shadow-md rounded-[20px]">
          <div className=" flex items-center justify-center md:p-10 ">
            <UserCard
              name="Nombre"
              lastName=" Apellido"
              email="email@gmail.com"
              avatar="https://www.w3schools.com/w3images/avatar1.png"
            />
          </div>
          <div>
            <UserConfigurations
              name="Nombre de usuario"
              lastName=" Apellido"
              email="email@gmail.com"
            />
            <div className="flex flex-col items-center justify-center space-y-6">
              <button className="font-medium hover:text-primary font-poppins text-sm">Guardar Cambios</button>
              <Link
                className="font-medium hover:text-primary font-poppins text-sm"
                to={"/trendingEvents"}
              >
                Ir al Home
              </Link>
              <Button
                text="Cerrar Sesión"
                className="w-[15.625rem] h-[3.75rem]"
              />
              <button className="text-[#F00606] font-medium font-poppins text-sm">Eliminar sesión</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
