"use client";
import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { Menu } from "../Menu/page";
import { Social } from "../Socials/page";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input,setInput] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="bg-blue-header flex xl:justify-end sm:justify-start items-center flex-wrap p-4 w-[100%]">
        <div className="flex items-center justify-between h-5 ">
          <div className="relative my-input-my mr-input-mr">
            <input
              type="search"
              name="search"
              id=""
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full sm:w-auto h-input-height rounded-input-radius p-2 outline-none "
              placeholder="Search"
            />
            <FaMagnifyingGlass className="text-black text-2xl ml-0 absolute right-6 top-1/2 transform -translate-y-1/2" />
          </div>
          <div className=" gap-6 items-center xl:flex hidden mr-[8rem]">
            <Social 
            FbColor="#fff"
            FiColor="#fff"
            FyColor="#fff"
            FcColor="#fff"
            />
          </div>
        </div>
        <div className="xl:hidden">
          {isOpen ? (
            <FaTimes
              className="text-white text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <FaBars
              className="text-white text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </header>
      <div className=" gap-6 items-center justify-center hidden xl:flex">
        <Menu />
      </div>
      {isOpen && <Menu isOpen={isOpen} />}
    </>
  );
};
