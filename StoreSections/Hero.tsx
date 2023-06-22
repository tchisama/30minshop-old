import { heroProps } from '@/types/types';
import Image from 'next/image'
import React from 'react'



type props ={
  conf:heroProps;
}

const Hero = ({conf}:props) => {
  return (
    <div className='h-fit lg:h-[600px] bg-gray-50'>
        <div className='flex-col-reverse lg:flex-row flex container p-10   h-full items-center mx-auto '>
            <div className='flex flex-col flex-1 items-start gap-4'>
                {
                    conf.h1&&
                    <h1 className='text-5xl  text-gray-700 font-medium'>
                        {conf.h1Text}
                    </h1>
                }
                {
                    conf.h3&&
                    <h3 className='text-xl  text-gray-700 font-medium'>
                        {conf.h3Text}
                    </h3>
                }
            <button className='bg-green-500 hover:scale-105 duration-150 px-4 py-2 text-white rounded-xl shadow-lg'>Start shopping</button>
            </div>
            <div className='flex-1 h-full p-8'>
            {
                conf.image&&
                <img src={conf.imageUrl} className='w-full object-contain h-full rounded-xl  flex items-center justify-center '/>
            }
            </div>
        </div>
    </div>
  )
}

export default Hero