import Image from "next/image";
import React from "react";

export const Brands = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-12">
        <div className="max-w-[85px] sm:max-h-[27px] cursor-pointer pointer">
          <Image
            src={require("../../../public/logo marca parceira suvinil.png")}
            alt=""
            className="object-contain min-w-[30px] w-[50rem] pointer-events-none"
          />
        </div>
        <div className="max-w-[85px] sm:max-h-[27px] cursor-pointer pointer">
          <Image
            src={require("../../../public/logo marca parceira stihl.png")}
            alt=""
            className="object-contain min-w-[30px] w-[50rem] pointer-events-none"
          />
        </div>
        <div className="max-w-[85px] sm:max-h-[27px] cursor-pointer pointer">
          <Image
            src={require("../../../public/Logo Marca parceira Tigre.png")}
            alt=""
            className="object-contain min-w-[30px] w-[50rem] pointer-events-none"
          />
        </div>
        <div className="max-w-[85px] sm:max-h-[27px] cursor-pointer pointer">
          <Image
            src={require("../../../public/Logo marca parceira tarmontina.png")}
            alt=""
            className="object-contain min-w-[30px] w-[50rem] pointer-events-none"
          />
        </div>
        <div className="max-w-[85px] sm:max-h-[27px] cursor-pointer pointer">
          <Image
            src={require("../../../public/Logo marca parceira portobello.png")}
            alt=""
            className="object-contain min-w-[30px] w-[50rem] pointer-events-none"
          />
        </div>
        <div className="max-w-[85px] sm:max-h-[27px] cursor-pointer pointer">
          <Image
            src={require("../../../public/Logo marca parceira 3m.png")}
            alt=""
            className="object-contain min-w-[30px] w-[50rem] pointer-events-none"
          />
        </div>
      </div>
    </>
  );
};
