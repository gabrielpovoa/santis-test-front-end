import React from "react";
import { Brands } from "./Brands";
import { ButtonWithProp } from "../Button/button";

export const Brand = () => {
    
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 h-[400px]">
        <h1 className="font-semibold text-light-gray mb-[37px] text-[30px] text-center p-[.4rem]">
          Grandes parcerias com as
          <span className="text-light-hover-underlin,-green"> melhores marcas
          </span>
        </h1>
        <Brands />
        <ButtonWithProp
        borderColor="#005d5a"
        text="Ver Mais"
        weight={800} 
        />
      </div>
    </>
  );
};
