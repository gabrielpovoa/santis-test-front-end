import Image from "next/image";
import React from "react";

export const Brands = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-20">
        <Image
          src={require("../../../public/logo marca parceira suvinil.png")}
          alt=""
          className="object-contain w-[85px] h-[37px] cursor-pointer"
        />
        <Image
          src={require("../../../public/logo marca parceira stihl.png")}
          alt=""
          className="object-contain w-[85px] h-[37px] cursor-pointer"
        />
        <Image
          src={require("../../../public/Logo Marca parceira Tigre.png")}
          alt=""
        />
        <Image
          src={require("../../../public/Logo marca parceira tarmontina.png")}
          alt=""
          className="object-contain w-[85px] h-[37px] cursor-pointer"
        />
        <Image
          src={require("../../../public/Logo marca parceira portobello.png")}
          alt=""
          className="object-contain w-[85px] h-[37px] cursor-pointer"
        />
        <Image
          src={require("../../../public/Logo marca parceira 3m.png")}
          alt=""
          className="object-contain w-[85px] h-[37px] cursor-pointer"
        />
      </div>
    </>
  );
};
