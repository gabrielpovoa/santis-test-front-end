import Image from 'next/image'
import React from 'react'

export const CardFlex = () => {
  return (
    <div className='flex flex-col gap-8'>
        <p className='text-center text-[#2E3080] text-2xl font-semibold'>Transforma</p>
        <Image src={require("../../../public/bg-sunset.jpeg")} alt='image sun'
        className='w-[30rem]'
        />
        <div className='flex flex-col gap-6 text-wrap w-[20rem] '>
            <p className='text-gray-color font-semibold mt[32px]'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            <p className='bord cursor-pointer font-bold'>Ver novidades</p>
        </div>
    </div>
  )
}
