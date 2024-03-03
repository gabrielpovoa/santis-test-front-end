import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  text: any;
}

export const ServiceItem = ({ src, alt, text }: Props) => {
  return (
    <div className="flex items-center p-3">
      <div className="mr-4 p-4">
        <Image src={src} alt={alt} width={50} height={50} />
      </div>
      <p className="serviceItem text-[1.6rem] text-gray-color">{text}</p>
    </div>
  );
};
