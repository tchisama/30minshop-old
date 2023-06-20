import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='h-[70vh] bg-gray-50'>
        <div className='flex container p-10  h-full items-center mx-auto '>
            <div className='flex flex-col flex-1 items-start gap-4'>
            <h1 className='text-4xl  text-gray-700 font-medium'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam  
            </h1>
            <h3 className='text-xl  text-gray-700 font-medium'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam  
            </h3>
            <button className='bg-green-500 hover:scale-105 duration-150 px-4 py-2 text-white rounded-xl shadow-lg'>Start shopping</button>
            </div>
            <div className='flex-1 h-full p-8'>
                <div className='w-full h-full rounded-xl  flex items-center justify-center bg-gray-100'>your hero image</div>
            </div>
        </div>
    </div>
  )
}

export default Hero