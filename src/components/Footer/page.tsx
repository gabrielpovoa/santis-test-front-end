import React from "react";
import { Social } from "../Socials/page";

export const Footer = () => {
  return (
    <div className="my-24 flex justify-center">
      <section className="flex flex-col sm:flex-row items-start justify-center gap-12 sm:gap-[14rem] p-12">
        <div className="flex flex-col gap-6 mr-6">
          {" "}
          {/* Add mr-6 here */}
          <h2 className="text-purple font-bold text-2xl">Institucional</h2>
          <ul className="flex flex-col gap-6">
            <li className="font-bold cursor-pointer">Quem somos</li>
            <li className="font-bold cursor-pointer">Nossas Lojas</li>
            <li className="font-bold cursor-pointer">Trabalhe conosco</li>
            <li className="font-bold cursor-pointer">Seja um parceiro</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 mr-6">
          <h2 className="text-purple font-bold text-2xl">Políticas</h2>
          <ul className="flex flex-col gap-4">
            <li className="font-bold cursor-pointer">
              Políticas de privacidade
            </li>
            <li className="font-bold cursor-pointer">Garantias</li>
            <li className="font-bold cursor-pointer">E-commerce</li>
            <li className="font-bold cursor-pointer">Fale conosco</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-purple font-bold text-2xl">Lorem ipsum</h2>
          <p className="font-bold break-words">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.<br></br> Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s.
          </p>
          <div className="flex gap-4 items-center">
            <Social FbColor="#2E3080" FiColor="#2E3080" FyColor="#2E3080" FcColor="#2E3080" />
          </div>
        </div>
      </section>
    </div>
  );
};
