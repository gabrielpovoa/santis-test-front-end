"use client";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Menu } from "../Menu/page";
import { Social } from "../Socials/page";

export const Header = () => {
  return (
    <>
      <header className="bg-blue-header flex justify-end items-center flex-wrap p-4">
        <div className="flex items-center justify-between h-5">
          <div className="relative my-input-my mr-input-mr">
            <input
              type="search"
              name="search"
              id=""
              className="w-input-width-web h-input-height rounded-input-radius p-2 outline-none "
            />
            <FaMagnifyingGlass className="text-black text-2xl ml-0 absolute right-6 top-1/2 transform -translate-y-1/2" />
          </div>
          <div className="flex gap-6 items-center ">
            <Social />
          </div>
        </div>
      </header>
      <Menu />
    </>
  );
};
