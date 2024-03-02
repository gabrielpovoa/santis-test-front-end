import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";

export const Social = () => {
  return (
    <>
      <FaInstagram className="text-white text-[1.8rem] cursor-pointer" />
      <FaFacebookSquare className="text-white text-[1.8rem] cursor-pointer" />
      <FaYoutube className="text-white text-[1.8rem] cursor-pointer" />
      <Image
        src={require("../../../public/loja.png")}
        alt="imag of a monitor and a cart - white with a text write loja"
        className=" cursor-pointer"
      />
    </>
  );
};
