import React from 'react'

import Image from 'next/image';
import logo from "@/public/Logo.png"

const StoreNavBar = () => {
  return (
        <div className=' shadow-lg top-0 w-full left-0'> 
          <div className='bg-white py-4 flex px-6 gap-8 border-b'>
            <Image className='w-8 h-8' src={logo} alt='30 min shop logo'></Image>
            <div className='px-1 bg-gray-100 flex items-center rounded-md justify-center'>
                <select className='cursor-pointer px-2 outline-none bg-transparent'>
                    <option value='option1'>home</option>
                    <option value='option2'>about</option>
                    <option value='option3'>product</option>
                </select>
            </div>
          </div>
        </div>
  )
}

export default StoreNavBar