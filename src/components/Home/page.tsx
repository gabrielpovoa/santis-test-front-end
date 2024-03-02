import React from "react";
import { Header } from "../Header/page";
import { Slide } from "../Slide/page";
import { Services } from "../HelpDesk/page";
import { Brand } from "../Brands/page";

export const Home = () => {
  return (
    <>
      <Header />
      <Slide />
      <Services />
      <Brand />
    </>
  );
};
