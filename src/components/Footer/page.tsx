import React from 'react'
import { Social } from '../Socials/page'

export const Footer = () => {
  return (
    <section className='flex items-start justify-center gap-[14rem] my-[24rem] flex-wrap'>
        <div className='flex flex-col gap-6'>
            <h2 className='text-purple font-bold text-[24px]'>Institucional</h2>
            <ul className='flex flex-col gap-6'>
                <li className='font-bold cursor-pointer'>Quem somos</li>
                <li className='font-bold cursor-pointer'>Nossas Lojas</li>
                <li className='font-bold cursor-pointer'>Trabalhe conosco</li>
                <li className='font-bold cursor-pointer'>Seja um parceiros</li>
            </ul>
        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='text-purple font-bold text-[24px]'>Políticas</h2>
            <ul className='flex flex-col gap-6'>
                <li className='font-bold cursor-pointer'>políticas de privacidade</li>
                <li className='font-bold cursor-pointer'>garantias</li>
                <li className='font-bold cursor-pointer'>E-commerce</li>
                <li className='font-bold cursor-pointer'>fale conosco</li>
            </ul>
        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='text-purple font-bold text-[24px]'>Lorem ipsum</h2>
            <p className='font-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm y</p>
        </div>
        
    </section>
  )
}
