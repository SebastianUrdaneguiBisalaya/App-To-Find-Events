import { Button } from "./Button";
import { Texts } from "./Texts";

export const Sidebar: React.FC = () => {
  return (
    <div className="w-[277px] h-screen bg-white p-4">
      <Texts
        text="ExploriQ"
        type="title"
        color="#761CBC"
        className="mb-16"
      />
      <ul className="space-y-4">
        <li className="text-lg text-gray-700">
          {" "}
          <span className=" text-[#761CBC] icon-[whh--listalt] mr-2"></span>Eventos de esta semana
        </li>
        <li className="text-lg text-gray-700">
          {" "}
          <span className="text-[#761CBC] icon-[whh--dotlist] mr-2"></span>Próximos eventos
        </li>
        <li className="text-lg text-gray-700">
          {" "}
          <span className="text-[#761CBC] icon-[lucide--scroll-text] mr-2"></span>Historial
        </li>
        <li className="text-lg text-gray-700">
          {" "}
          <span className="text-[#761CBC]  icon-[vs--profile] mr-2"></span>Perfil
        </li>
      </ul>
      <div className="mt-28 flex justify-center">
        <Button text="Regresar" />
      </div>
    </div>
  );
};
