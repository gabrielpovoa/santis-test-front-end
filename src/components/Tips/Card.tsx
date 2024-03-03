export const Card = () => {
  return (
    <div className="bg-image w-full sm:w-[90vw] md:w-[80vw] lg:w-[30rem] h-[361px] object-cover flex justify-center flex-col items-center rounded-[12px] p-4 sm:p-6">
      <h2 className="xl:text-[45px] md:text-[30px] text-[24px] font-bold text-white">Lorem</h2>
      <button className="hover:bg-blue-header transition-all hover:border-blue-header border border-solid sm:border-[2px] border-white text-white rounded-[20px] w-[10rem] sm:w-[12rem] p-2 mt-[2rem] text-lg sm:text-xl">Acessar</button>
    </div>
  );
};
