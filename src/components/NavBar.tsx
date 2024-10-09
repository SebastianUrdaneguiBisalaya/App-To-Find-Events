import React, { useState } from 'react';

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="text-2xl p-4 md:hidden">
        <img src="/icons/burger-icon.png" alt="Menu" className="h-8 w-8" />
      </button>

      <div className="hidden md:flex md:justify-center md:items-center md:bg-white md:shadow-lg md:mx-20 md:px-10 md:h-20 sm:rounded-full rounded-2xl">
        <a href="#" className="font-bold text-3xl text-[#761CBC] mr-4">ExploryQ</a>

        <ul className="flex space-x-6 ">
          <li className="text-sm text-black hover:text-[#761CBC]">
            <a href="#">Home</a>
          </li>
          <li className="text-sm text-black hover:text-[#761CBC]">
            <a href="#">Eventos Esta Semana</a>
          </li>
          <li className="text-sm text-black hover:text-[#761CBC]">
            <a href="#">Próximos Eventos</a>
          </li>
          <li className="text-sm text-black hover:text-[#761CBC]">
            <a href="#">Historial</a>
          </li>
          <li className="text-sm text-black hover:text-[#761CBC]">
            <a href="#">Perfil</a>
          </li>
        </ul>

        <div className="relative mr-4">
          <img src="/icons/Shoppingcart-icon.png" alt="Carrito" className="ms-8 h-8 w-8" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1 ms-8">2</span>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-96 bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="p-4">
          <h2 className="font-bold text-4xl p-5 mb-5 text-[#761CBC]">ExploryQ</h2>

          <ul>
            <li className="my-4 flex items-center text-lg text-black">
              <img src="/icons/calendar-icon.png" alt="Eventos Esta Semana" className="h-8 w-8 m-2" />
              <a href="#" className="text-black hover:text-[#761CBC]">Eventos Esta Semana</a>
            </li>
            <li className="my-4 flex items-center text-lg text-black">
              <img src="/icons/NextEvents-icon.png" alt="Próximos Eventos" className="h-8 w-8 m-2" />
              <a href="#" className="text-black hover:text-[#761CBC]">Próximos Eventos</a>
            </li>
            <li className="my-4 flex items-center text-lg text-black">
              <img src="/icons/Historial-icon.png" alt="Historial" className="h-8 w-8 m-2" />
              <a href="#" className="text-black hover:text-[#761CBC]">Historial</a>
            </li>
            <li className="my-4 flex items-center text-lg text-black">
              <img src="/icons/Profile-icon.png" alt="Perfil" className="h-8 w-8 m-2" />
              <a href="#" className="text-black hover:text-[#761CBC]">Perfil</a>
            </li>
          </ul>

          <div className="flex justify-center mt-4">
            <button className={`bg-[#761CBC] text-white text-lg px-8 py-4 rounded ${isOpen ? '' : 'hidden'}`} onClick={toggleMenu}>
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
