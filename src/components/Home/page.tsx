"use client";
import React from "react";
import { Header } from "../Header/page";
import { Slide } from "../Slide/page";
import { Services } from "../HelpDesk/page";
import { Brand } from "../Brands/page";
import { Oportunities } from "@/app/Oportunities/page";

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Slide />
      <Services />
      <Brand />
      <Oportunities />
    </div>
  );
};
