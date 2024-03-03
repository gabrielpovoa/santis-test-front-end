import React from "react";

interface Props {
  text: string;
  borderColor: string;
  backgroundColor?: string;
  textColor:string;
  weight: any;
}

export const ButtonWithProp = ({ text, borderColor, backgroundColor,textColor, weight }: Props) => {
  const buttonStyle = {
    borderColor: borderColor,
    backgroundColor: backgroundColor,
    color:textColor,
    fontWeight: weight === 800 || 600 ? "bold" : "normal",
  };

  return (
    <button
      className="border-solid border p-2 mt-[5rem] rounded-input-radius"
      style={buttonStyle}
    >
      {text}
    </button>
  );
};

