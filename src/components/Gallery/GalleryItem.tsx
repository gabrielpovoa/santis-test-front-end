import Image from 'next/image'
import React from 'react'

export const GalleryItem = () => {
  return (
    <div className='flex flex-col gap-8'>
        <Image src={require("../../../public/bg-sunset.jpeg")} alt='image sun'
        className='w-[20rem]'
        />
    </div>
  )
}
