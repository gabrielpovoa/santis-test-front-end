import Image from "next/image";
import React from "react";

export const Services = () => {
  return (
    <>
      <div className="bg-services-bg-gray py-[7rem] items-center justify-center h-[200px] sm:flex hidden">
        <div className="flex justify-center gap-[2rem]">
          <div className="services">
            <Image
              src={require("../../../public/imagechecked.png")}
              alt="compra 100% segura"
            />
            <p className="text-[1.4rem] text-gray-color">
              Compra
              <br />
              <b className="text-gray-color">100% segura</b>
            </p>
          </div>
          <div className="services">
            <Image src={require("../../../public/card.png")} alt="condições exclusivas de pagamento" />
            <p className="text-[1.4rem] text-gray-color">
              Condições <b className="text-gray-color">exclusivas</b> de
              pagamento
            </p>
          </div>
          <div className="services">
            <Image src={require("../../../public/headset.png")} alt="atendimento personalizado" />
            <p className="text-[1.4rem] text-gray-color">
              Atendimento<b className="text-gray-color">
                <br /> Personalizado
              </b>
            </p>
          </div>
          <div className="services">
            <Image src={require("../../../public/truck.png")} alt="entrefa para todo o rio grande do sul" />
            <p className="text-[1.4rem] text-gray-color">
              <b className="text-gray-color">Entrega expressa </b>p/ todo o
              rio grande do sul
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
