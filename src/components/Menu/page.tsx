import React from "react";

export const Menu = () => {
  return (
    <nav className="bg-white p-24 items-center">
      <ul className="flex justify-center gap-20">
        <li className="font-semibold text-gray-color-lighter text-beloweMenu p-8 ">
          Departamentos
        </li>
        <li className="font-semibold text-gray-color-lighter text-beloweMenu p-8 ">
          Ofertas
        </li>
        <li className="font-semibold text-gray-color-lighter text-beloweMenu p-8 ">
          Dicas
        </li>
        <li className="font-semibold text-gray-color-lighter text-beloweMenu p-8 ">
          Nossas Lojas
        </li>
        <li className="font-semibold text-gray-color-lighter text-beloweMenu p-8 ">
          Quem somos
        </li>
        <li className="font-semibold text-gray-color-lighter text-beloweMenu p-8 ">
          {" "}
          Fale conosco
        </li>
      </ul>
    </nav>
  );
};
