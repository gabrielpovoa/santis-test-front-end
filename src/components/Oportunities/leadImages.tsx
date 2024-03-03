import Image from 'next/image'
import React from 'react'

export const LeadImages = () => {
  return (
    <div className='flex flex-wrap justify-center gap-6 mt-[4rem] md:mt[8rem]'>
      <div className='w-[300px] md:w-1/4'>
        <Image src={require('../../../public/history.png')} alt="20 anos de historia" />
      </div>
      <div className='w-[300px] md:w-1/4'>
        <Image src={require('../../../public/108.png')} alt="+108" />
      </div>
      <div className='w-[300px] md:w-1/4'>
        <Image src={require('../../../public/present.png')} alt="presente em 90" />
      </div>
      <div className='w-[300px] md:w-1/4'>
        <Image src={require('../../../public/human.png')} alt="atendimento com calor humano" />
      </div>
    </div>
  )
}
