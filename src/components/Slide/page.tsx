import Image from "next/image";
import React from "react";

export const Slide = () => {
  return (
    <>
      <div className="bg-sunset-background relative">
        <Image 
        src={require('../../../public/compreAqui.png')} 
        alt="compre aqui"
        className="p-6 absolute right-[12rem] bottom-[12rem] cursor-pointer"
        />
      </div>
    </>
  );
};
