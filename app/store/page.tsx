"use client"
import Window from '@/components/Window';
import React from 'react'


import ColorLensIcon from '@mui/icons-material/ColorLens';
import LayersIcon from '@mui/icons-material/Layers';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

import Image from 'next/image';
import logo from "@/public/Logo.png"



const Page = () => {
  return (
      <div className='h-screen relative  flex flex-col'>
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
        <div className='flex relative flex-1 overflow-y-scroll  p-2 pt-10'>
            <div className='sticky text-gray-600 top-0 h-fit  flex flex-col bg-white shadow-lg rounded-xl p-2'>
                <button className='p-2 duration-300 text-sm hover:text-gray-800 hover:bg-gray-100 rounded-md flex flex-col items-center justify-center'>
                    <ColorLensIcon/>
                    <span>Theme</span>
                </button>
                <button className='p-2 duration-300  text-sm  hover:text-prime hover:bg-gray-100 rounded-md flex flex-col items-center justify-center'>
                    <LayersIcon/>
                    <span>Pages</span>
                </button>
                <button className='p-2 duration-300  text-sm  hover:text-gray-800 hover:bg-gray-100 rounded-md flex flex-col items-center justify-center'>
                    <PersonIcon/>
                    <span>Inofs</span>
                </button>
                <button className='p-2 duration-300  text-sm  hover:text-gray-800 hover:bg-gray-100 rounded-md flex flex-col items-center justify-center'>
                    <SettingsIcon/>
                    <span>Settings</span>
                </button>
            </div>
            <div className='px-4 w-full'>
                <Window/>
            </div>
        </div>
      </div>
  )
}

export default Page;