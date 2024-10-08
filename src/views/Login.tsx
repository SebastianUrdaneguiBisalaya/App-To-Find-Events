import React from "react";
import { Button, PasswordInput, TextInput, ToggleSwitchField } from "../components";

export const Login: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-[1500px] min-h-screen flex flex-col items-center justify-center m-auto md:gap-8 md:p-4">
      <div className="w-full lg:w-[1000px] hidden md:block">
        <h1 className="text-primary font-bold text-3xl">ExploreQ</h1>
      </div>
      <div className="w-full lg:w-[1000px]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
          {/* Image section */}
          <div>
            <img
              src="./src/assets/celebration.png"
              alt="Celebration illustration"
              className="h-full w-full hidden md:block"
            />
          </div>
          {/* Form section */}
          <div className="md:flex-1 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center ">
              <h2 className="black font-bold text-3xl">Bienvenido</h2>
              <h2 className="text-primary font-medium text-lg md:text-xl mt-2 md:mb-6">
                Encuentra el evento perfecto para ti
              </h2>
              <img
                src="./src/assets/celebration.svg"
                alt="Celebration illustration"
                className=" mi-w-[15rem] min-h-[14rem] w-[15rem] h-[14rem] sm:w-[20rem] sm:h-[18rem] md:hidden"
              />
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 md:gap-6"
              >
                <TextInput
                  label="Correo Electrónico"
                  placeholder="name@example.com"
                  type="email"
                  name="email"
                />
                <PasswordInput
                  label="Contraseña"
                  name="password"
                  placeholder="Ingresa tu contraseña"
                />
                <ToggleSwitchField label="Recuérdame" />
                <Button
                  text="Iniciar sesión"
                  type="submit"
                  className="mt-2 font-semibold text-base w-[20rem]"
                />
              </form>

              <div className="mt-4 text-center">
                <p className="text-base font-normal">¿Aún no tienes una cuenta? </p>
                <a
                  href="#"
                  className="text-base font-medium hover:text-primary"
                >
                  Regístrate aquí
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
