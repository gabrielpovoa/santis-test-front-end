import Image from "next/image";
import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export const SlideHome = () => {
  return (
    <Slide arrows={false}>
      <div className="bg-sunset-background relative each-slide-effect">
        <Image 
        src={require('../../../public/compreAqui.png')} 
        alt="compre aqui"
        className="p-6 absolute sm:right-[12rem] right-[2rem] bottom-[12rem] cursor-pointer"
        />
      </div>
    </Slide>
  );
};
