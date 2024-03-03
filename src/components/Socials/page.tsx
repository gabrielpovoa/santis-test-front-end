import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

import Image from "next/image";

interface Props {
  FbColor: string;
  FiColor: string;
  FyColor: string;
  FcColor: string;
}

export const Social = ({ FbColor,FcColor, FiColor, FyColor }: Props) => {
  const FaIconsStyle = {
    color: FbColor || FiColor || FyColor || FcColor,
  };

  return (
    <>
      <FaInstagram
        className="text-white text-[1.8rem] cursor-pointer"
        style={FaIconsStyle}
      />
      <FaFacebookSquare
        className="text-white text-[1.8rem] cursor-pointer"
        style={FaIconsStyle}
      />
      <FaYoutube
        className="text-white text-[1.8rem] cursor-pointer"
        style={FaIconsStyle}
      />
      <FiShoppingCart
        className="text-white text-[1.8rem] cursor-pointer"
        style={FaIconsStyle}
      />
      {/* <Image
        src={require("../../../public/storeIcons.svg")}
        alt="imag of a monitor and a cart - white with a text write loja"
        className="cursor-pointer text-white"
      /> */}
    </>
  );
};
