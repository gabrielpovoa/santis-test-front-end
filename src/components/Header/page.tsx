"use client";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { Menu } from "../Menu/page";

export const Header = () => {
  return (
    <>
      <header className="bg-blue-header flex justify-end items-center flex-wrap p-4">
        <div className="flex items-center justify-between h-5">
          <div className="relative my-input-my mr-input-mr">
            <input
              defaultChecked={false}
              type="search"
              name="search"
              id=""
              value=""
              className="w-input-width-web sm:min-w['200px'] h-input-height rounded-input-radius p-2 outline-none"
            />
            <FaMagnifyingGlass className="text-black text-2xl ml-0 absolute right-6 top-1/2 transform -translate-y-1/2" />
          </div>
          <div className="flex gap-6 items-center ">
            <FaInstagram className="text-white text-4xl cursor-pointer" />
            <FaFacebookSquare className="text-white text-4xl cursor-pointer" />
            <FaYoutube className="text-white text-4xl cursor-pointer" />
            <Image
              src={require("../../../public/loja.png")}
              alt="imag of a monitor and a cart - white with a text write loja"
              className=" cursor-pointer"
            />
          </div>
        </div>
      </header>
      {/* <Menu /> */}
    </>
  );
};
