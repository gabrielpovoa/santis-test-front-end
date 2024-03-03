import React from "react";

interface Props {
  isOpen?:boolean;
}

export const Menu = ({isOpen}: Props) => {
  return (
    <nav className="bg-white py-[3rem] items-center">
      <ul className={`flex justify-center gap-12 ${isOpen ? 'flex-col' : 'flex'} `}>
        <li className="onGreenHover font-semibold text-gray-color-lighter text-beloweMenu p-8 FLEXC ">
          Departamentos
        </li>
        <li className="onGreenHover font-semibold text-gray-color-lighter text-beloweMenu p-8 ">
          Ofertas
        </li>
        <li className="onGreenHover font-semibold text-gray-color-lighter text-beloweMenu p-8 ">
          Dicas
        </li>
        <li className="onGreenHover font-semibold text-gray-color-lighter text-beloweMenu p-8 ">
          Nossas Lojas
        </li>
        <li className="onGreenHover font-semibold text-gray-color-lighter text-beloweMenu p-8 ">
          Quem somos
        </li>
        <li className="onGreenHover font-semibold text-gray-color-lighter text-beloweMenu p-8 ">
          {" "}
          Fale conosco
        </li>
      </ul>
    </nav>
  );
};
