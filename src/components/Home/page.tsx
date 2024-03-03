"use client";
import React from "react";
import { Header } from "../Header/page";
import { SlideHome } from "../Slide/page";
import { Services } from "../HelpDesk/page";
import { Brand } from "../Brands/page";
import { Oportunities } from "@/components/Oportunities/page";
import { Inspire } from "../Tips/page";
import { NewsFlex } from "../News/page";
import { Gallery } from "../Gallery/page";
import { Footer } from "../Footer/page";

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <SlideHome />
      <Services />
      <Brand />
      <Oportunities />
      <Inspire />
      <NewsFlex />
      <Gallery />
      <Footer/>
    </div>
  );
};
