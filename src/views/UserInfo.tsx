import { Button, UserCard, UserConfigurations } from "../components";

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
              <button className="font-medium">Guardar Cambios</button>
              <button className="font-medium">Ir al Home</button>
              <Button
                text="Cerrar Sesión"
                className="w-[342px] h-[60px]"
              />
              <button className="text-[#F00606] font-medium">Eliminar sesión</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
