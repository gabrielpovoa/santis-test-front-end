import Image from "next/image";
import React from "react";

export const Services = () => {
  return (
    <>
      <div className="bg-services-bg-gray py-[7rem] flex items-center justify-center h-[200px]">
      <div className="flex justify-center gap-[12rem]">
          <div className="services opac">
            <Image
              src={require("../../../public/imagechecked.png")}
              alt="123"
            />
            <p className="text-[1.4rem] text-gray-color">Compra<br/><b className="text-gray-color">100% segura</b></p>
          </div>
          <div className="services">
            <Image src={require("../../../public/card.png")} alt="123" />
            <p className="text-[1.4rem] text-gray-color">Condições <b className="text-gray-color">exclusivas</b> de pagamento</p>
          </div>
          <div className="services">
            <Image src={require("../../../public/headset.png")} alt="123" />
            <p className="text-[1.4rem] text-gray-color">Atendimento<b className="text-gray-color"><br/> Personalizado</b></p>
          </div>
          <div className="services">
            <Image src={require("../../../public/truck.png")} alt="123" />
            <p className="text-[1.4rem] text-gray-color"><b className="text-gray-color">Entrega expressa </b>p/ todo o rio grande do sul</p>
          </div>
        </div>
      </div>
    </>
  );
};
