import React from "react";
import { GalleryItem } from "./GalleryItem";
import { ButtonWithProp } from "../Button/button";

export const Gallery = () => {
  return (
    <div className="flex flex-col items-center justify-center my-[8rem] gap-12">
      <p className="text-gray-color-lighter font-semibold text-sm text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting<br></br>
        industry. Lorem Ipsum has been the industry's standard dummy
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
  <GalleryItem />
  <GalleryItem />
  <GalleryItem />
  <GalleryItem />
  <GalleryItem />
  <GalleryItem />
  <GalleryItem />
  <GalleryItem />
</div>
      <ButtonWithProp borderColor="#000" text="Acesse" weight={600} textColor="#000"/>
    </div>
  );
};
