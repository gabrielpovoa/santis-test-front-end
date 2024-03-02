import React from "react";

interface Props {
  text: string;
  borderColor: string;
  weight: any;
}

export const ButtonWithProp = ({ text, borderColor, weight }: Props) => {
  const dynamicBorderColorClass = `border-${borderColor}`;

  return (
    <button
      className={` border-${dynamicBorderColorClass} border-solid border p-2 mt-[5rem] rounded-input-radius ${
        weight === 800 ? "font-bold" : "font-semibold"
      }`}
    >
      {text}
    </button>
  );
};
