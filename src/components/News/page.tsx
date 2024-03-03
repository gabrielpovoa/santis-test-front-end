import React from "react";
import { CardFlex } from "./CardFlex";
import { ButtonWithProp } from "../Button/button";

export const NewsFlex = () => {
  return (
    <div className="flex flex-col items-center justify-center my-[5rem]">
      <h1 className="text-gray-color-lighter font-semibold text-3xl text-center">
        Fique por dentro das{" "}
        <span className="text-black">nossas novidades.</span>
      </h1>
      <div className=" flex flex-wrap items-start justify-center gap-6 mt-[6rem] mx-[2rem]">
        <CardFlex />
        <CardFlex />
        <CardFlex />
      </div>
      <ButtonWithProp
      borderColor="#005D5A"
      textColor="#005D5A"
      text="Acesse"
      weight={600}
      />
    </div>
  );
};
