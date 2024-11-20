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
        <li className="text-lg text-gray-700 flex items-center">
          {" "}
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="11.98829268292683"
            viewBox="0 0 1025 1024"
          >
            <path
              fill="#761CBC"
              d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m64-768q0-26-19-45t-45-19h-768q-26 0-45 19t-19 45v640q0 27 19 45.5t45 18.5h768q26 0 45-18.5t19-45.5zm-96 640h-512q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h512q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0-256h-512q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h512q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0-256h-512q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h512q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-640 512h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-256h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-256h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5"
            />
          </svg>
          Eventos de esta semana
        </li>
        <li className="text-lg text-gray-700 flex items-center">
          {" "}
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="11.98829268292683"
            viewBox="0 0 1025 1024"
          >
            <path
              fill="#761CBC"
              d="M960.428 576h-512q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h512q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m0-384h-512q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h512q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-832 832q-53 0-90.5-37.5T.428 896t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m0-384q-53 0-90.5-37.5T.428 512t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m0-384q-53 0-90.5-37.5T.428 128t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m320 576h512q27 0 45.5 18.5t18.5 45.5t-18.5 45.5t-45.5 18.5h-512q-27 0-45.5-18.5t-18.5-45.5t18.5-45.5t45.5-18.5"
            />
          </svg>
          Próximos eventos
        </li>
        <li className="text-lg text-gray-700 flex items-center">
          {" "}
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#761CBC"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M15 12h-5m5-4h-5m9 9V5a2 2 0 0 0-2-2H4" />
              <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
            </g>
          </svg>{" "}
          Historial
        </li>
        <li className="text-lg text-gray-700 flex items-center">
          {" "}
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12.545454545454545"
            viewBox="0 0 1408 1472"
          >
            <path
              fill="#761CBC"
              d="M704 128q-144 0-225 106t-81 271q-1 205 132 325q17 16 12 41l-23 48q-11 24-32.5 37.5T396 995q-3 1-126.5 41T138 1080q-84 35-110 73q-28 63-28 319h1408q0-256-28-319q-26-38-110-73q-8-4-131.5-44T1012 995q-69-25-90.5-38.5T889 919l-23-48q-5-25 12-41q133-120 132-325q0-165-81-271T704 128"
            />
          </svg>{" "}
          Perfil
        </li>
      </ul>
      <div className="mt-28 flex justify-center">
        <Button text="Regresar" />
      </div>
    </div>
  );
};
