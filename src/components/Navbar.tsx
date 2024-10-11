import React, { useState } from "react";

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:flex md:justify-center md:items-center font-poppins">
      <button
        onClick={toggleMenu}
        className="text-2xl p-4 md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 32 32"
        >
          <path
            fill="none"
            stroke="#761CBC"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 8h22M5 16h22M5 24h22"
          />
        </svg>
      </button>

      <div className="hidden md:flex md:justify-center md:items-center md:bg-white md:shadow-lg max-w-[58rem] md:mx-auto md:px-6 md:h-20 sm:rounded-full rounded-2xl">
        <div className="md:flex m-4">
          <div className="flex">
            <a
              href="#"
              className="font-bold text-3xl text-primary mr-4"
            >
              ExploryQ
            </a>
          </div>

          <div className="flex-1">
            <ul className="flex gap-8 px-10 flex-1 justify-center">
              <li className="text-sm text-black hover:text-primary font-poppins">
                <a href="#">Home</a>
              </li>
              <li className="text-sm text-black hover:text-primary font-poppins">
                <a href="#">Eventos Esta Semana</a>
              </li>
              <li className="text-sm text-black hover:text-primary font-poppins">
                <a href="#">Próximos Eventos</a>
              </li>
              <li className="text-sm text-black hover:text-primary font-poppins">
                <a href="#">Historial</a>
              </li>
              <li className="text-sm text-black hover:text-primary font-poppins">
                <a href="#">Perfil</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mr-4 flex">
          <svg
            className="w-8 h-8 md:w-10 md:h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#761CBC"
          >
            <path d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2" />
          </svg>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs px-1">2</span>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="p-4">
          <h2 className="font-bold text-3xl p-5 mb-5 text-primary">ExploryQ</h2>
          <ul>
            <li className="my-4 flex items-center text-lg text-black">
              <svg
                className="p-1"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 14 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z"
                  fill="#761CBC"
                />
              </svg>
              <a
                href="#"
                className="text-black hover:text-primary  text-sm font-poppins"
              >
                Eventos Esta Semana
              </a>
            </li>
            <li className="my-4 flex items-center text-lg text-black">
              <svg
                className="p-1"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#761CBC"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M9 6h12M9 12h12M9 18h8M4 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
                />
              </svg>
              <a
                href="#"
                className="text-black hover:text-primary text-sm font-poppins"
              >
                Próximos Eventos
              </a>
            </li>
            <li className="my-4 flex items-center text-lg text-black">
              <svg
                className="p-1"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#761CBC"
                  d="M8 20q-.825 0-1.412-.587T6 18v-3h3v-2.25q-.875-.05-1.662-.387T5.9 11.35v-1.1H4.75L1.5 7q.9-1.15 2.225-1.625T6.4 4.9q.675 0 1.313.1T9 5.375V4h12v13q0 1.25-.875 2.125T18 20zm3-5h6v2q0 .425.288.713T18 18t.713-.288T19 17V6h-8v.6l6 6V14h-1.4l-2.85-2.85l-.2.2q-.35.35-.737.625T11 12.4zM5.6 8.25h2.3v2.15q.3.2.625.275t.675.075q.575 0 1.038-.175t.912-.625l.2-.2l-1.4-1.4q-.725-.725-1.625-1.088T6.4 6.9q-.5 0-.95.075t-.9.225z"
                />
              </svg>
              <a
                href="#"
                className="text-black hover:text-primary text-sm font-poppins"
              >
                Historial
              </a>
            </li>
            <li className="my-4 flex items-center text-lg text-black">
              <svg
                className="p-1"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 1408 1472"
              >
                <path
                  fill="#761CBC"
                  d="M704 128q-144 0-225 106t-81 271q-1 205 132 325q17 16 12 41l-23 48q-11 24-32.5 37.5T396 995q-3 1-126.5 41T138 1080q-84 35-110 73q-28 63-28 319h1408q0-256-28-319q-26-38-110-73q-8-4-131.5-44T1012 995q-69-25-90.5-38.5T889 919l-23-48q-5-25 12-41q133-120 132-325q0-165-81-271T704 128"
                />
              </svg>
              <a
                href="#"
                className="text-black hover:text-primary text-sm font-poppins"
              >
                Perfil
              </a>
            </li>
          </ul>
          <div className="flex justify-center mt-4">
            <button
              className={`bg-primary text-white text-sm px-8 py-3 rounded ${isOpen ? "" : "hidden"}`}
              onClick={toggleMenu}
            >
              Regresar
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};
