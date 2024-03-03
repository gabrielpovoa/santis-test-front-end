import { Card } from "./Card";

export const Inspire = () => {
  return (
    <section className="my-[6rem]">
      <div>
        <h1 className="text-center xl:text-4xl sm:text-2xl text-black font-semibold">
          Inspire-se com várias dicas para você
          <span className="text-light-hover-underlin,-green">
            <br></br>
            construir, reformar e decorar a sua casa.
          </span>
        </h1>
      </div>
      <div className="flex items-center justify-center flex-wrap mt-[8rem] w-full gap-6">
        <div className="p-4 mx-auto w-[30rem]">
          <Card />
        </div>
        <div className="p-4 mx-auto w-[30rem]">
          <Card />
        </div>
        <div className="p-4 mx-auto w-[30rem]">
          <Card />
        </div>
      </div>
    </section>
  );
};
