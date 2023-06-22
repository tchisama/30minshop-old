import Image from 'next/image'
import React from 'react'




const Hero = ({conf}:any) => {
  return (
    <div className='h-fit lg:h-[650px] bg-primary'>
        <div className='flex-col-reverse lg:flex-row flex container p-10 px-16  h-full items-center mx-auto '>
            <div className='flex flex-col flex-1 lg:max-w-3xl  items-start gap-4 p-8'>
                {
                    conf.h1&&
                    <h1 className='text-6xl uppercase text-white font-semibold'>
                        {conf.h1Text}
                    </h1>
                }
                {
                    conf.h3&&
                    <h3 className='text-lg  text-gray-300 font-medium'>
                        {conf.h3Text}
                    </h3>
                }
                {
                    conf?.btn &&
                    <button className='btn '>{conf?.btnText}</button>
                }
            </div>
            {
                conf.image&&
                <div className='flex-1 h-full p-8 '>
                    <img src={conf.imageUrl} className='w-full h-full object-contain  rounded-xl  flex items-center justify-center '/>
                </div>
            }
        </div>
    </div>
  )
}

export default Hero