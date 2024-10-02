interface UserConfigurationsProps {
  name: string;
  lastName: string;
  email: string;
}

export const UserConfigurations: React.FC<UserConfigurationsProps> = ({ name, lastName, email }) => {
  return (
    <div className="flex flex-col md:flex-row mx-auto items-center justify-center bg-white max-w-[342px] p-5">
      <div className="w-full text-left px-4 md:px-10">
        <div className="font-[600] mb-4">Configuraciones</div>
        <div className="flex flex-col items-start">
          <p className="bg-[#FBFBFB] font-[500] w-full max-w-[250px] mb-2">
            Nombres: <span className="font-[400]">{name}</span>
          </p>
          <p className="bg-[#FBFBFB] font-[500] w-full max-w-[250px] mb-2">
            Apellidos: <span className="font-[400]">{lastName}</span>
          </p>
          <p className="bg-[#FBFBFB] font-[500] w-full max-w-[250px] mb-2">
            Correo: <span className="font-[400]">{email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
