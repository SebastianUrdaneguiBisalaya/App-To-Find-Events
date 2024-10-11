import { useState } from "react";

interface UserConfigurationsProps {
  name: string;
  lastName: string;
  email: string;
}

export const UserConfigurations: React.FC<UserConfigurationsProps> = ({ name, lastName, email }) => {
  const [changeName, setChangeName] = useState<string>(name);
  const [changeLastName, setChangeLastname] = useState<string>(lastName);
  const [changeEmail, setChangeEmail] = useState<string>(email);
  return (
    <div className="flex flex-col md:flex-row mx-auto items-center justify-center bg-white max-w-[342px] p-5">
      <div className="w-full text-left px-4 md:px-10">
        <div className="font-poppins font-bold mb-4 text-md">Configuraciones</div>
        <div className="flex flex-col items-start">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-[#FBFBFB] font-[500] w-full max-w-[250px] mb-2">
              <label
                htmlFor="name"
                className="text-sm"
              >
                Nombres:
              </label>
              <input
                type="text"
                id="name"
                value={changeName}
                className="font-poppins font-[400] border-b outline-none focus:ring-0 focus:border-primary p-1 w-full"
                onChange={(event) => setChangeName(event.target.value)}
              />
            </div>
            <div className="bg-[#FBFBFB] font-[500] w-full max-w-[250px] mb-2">
              <label
                htmlFor="lastname"
                className="text-sm"
              >
                Apellidos:
              </label>
              <input
                type="text"
                id="lastname"
                value={changeLastName}
                className="font-poppins font-[400] border-b outline-none focus:ring-0 focus:border-primary p-1 w-full"
                onChange={(event) => setChangeLastname(event.target.value)}
              />
            </div>
            <div className="bg-[#FBFBFB] font-[500] w-full max-w-[250px] mb-2">
              <label
                htmlFor="email"
                className="text-sm"
              >
                Correo:
              </label>
              <input
                type="email"
                id="email"
                value={changeEmail}
                className="font-poppins font-[400] border-b outline-none focus:ring-0 focus:border-primary p-1 w-full"
                onChange={(event) => setChangeEmail(event.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
