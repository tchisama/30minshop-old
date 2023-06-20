import React from 'react'
import StoreGenerator from './StoreGenerator'
import Hero from '@/StoreSections/Hero'

const Window = () => {
  return (
        <div className='w-full mx-4  flex flex-col  h-full  overflow-hidden rounded-2xl border-white bg-[#fffc] border-[3px] shadow-2xl'>
          <NavBar/>
          <div className='overflow-y-scroll'>
            <StoreGenerator/>
            <Hero/>
            <Hero/>
            <Hero/>
          </div>
        </div>
  )
}









const NavBar = ()=>(
          <div className='h-12 flex bg-[#eee] justify-between border p-4 items-center w-full'>
              <div className='p-1 rounded-lg bg-white px-8 border'>
                https://www.yourName.30minshop.com/
              </div>
              <div className='flex gap-2'>
                <div className='w-4 h-4 rounded-full bg-red-300'></div>
                <div className='w-4 h-4 rounded-full bg-blue-300'></div>
                <div className='w-4 h-4 rounded-full bg-orange-300'></div>
              </div>
          </div>
)

export default Window