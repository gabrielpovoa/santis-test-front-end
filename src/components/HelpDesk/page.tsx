import Image from "next/image";
import React from "react";
import { ServiceItem } from "./ServiceItemProp";

export const Services = () => {
  return (
    <div className="bg-services-bg-gray py-14  sm:flex xl:flex justify-center items-center">
      <div className="service flex justify-center items-center gap-8 p-12">
        <ServiceItem
          src={require("../../../public/imagechecked.png")}
          alt="compra 100% segura"
          text={<>
            Compra <b className="text-gray-color">100% segura</b>
          </>}
        /> 
        <ServiceItem
          src={require("../../../public/card.png")}
          alt="condições exclusivas de pagamento"
          text={<>
            Condições <b className="text-gray-color">exclusivas de pagamento</b>
          </>}
        />
        <ServiceItem
          src={require("../../../public/headset.png")}
          alt="atendimento personalizado"
          text={<>
            Atendimento <b className="text-gray-color">personalizado</b>
          </>}
        />
        <ServiceItem
          src={require("../../../public/truck.png")}
          alt="entrega para todo o rio grande do sul"
          text={<>
            <b className="text-gray-color">Entrega Expressa</b> para todo o rio grande do sul
          </>}
        />
      </div>
    </div>
  );
};
