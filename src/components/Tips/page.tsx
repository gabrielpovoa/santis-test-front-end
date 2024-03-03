import { Card } from "./Card";

export const Inspire = () => {
  return (
    <div className="py-24 mt-24 sm:mt-10 px-4 sm:px-0 flex flex-col items-center justify-center gap-[10rem]">
      <h1 className="text-center xl:text-4xl sm:text-2xl text-black font-semibold">
        Inspire-se com várias dicas para você
        <span className="text-light-hover-underlin,-green">
          <br></br>
          construir, reformar e decorar a sua casa.
        </span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-[4rem] md:mt[8rem]">
        <div className="w-full sm:1/2 md:w-1/4 flex justify-center items-center">
          <Card />
        </div>
        <div className="w-full sm:1/2 md:w-1/4 flex justify-center items-center">
          <Card />
        </div>
        <div className="w-full sm:1/2 md:w-1/4 flex justify-center items-center">
          <Card />
        </div>
      </div>
    </div>
  );
};
