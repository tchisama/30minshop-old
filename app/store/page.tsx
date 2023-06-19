"use client"
import Window from '@/components/Window';
import React from 'react'


import ColorLensIcon from '@mui/icons-material/ColorLens';
import LayersIcon from '@mui/icons-material/Layers';

const Page = () => {
  return (
      <div className='h-screen relative  flex flex-col'>
        <div className=' shadow-lg top-0 w-full left-0'> 
          <div className='bg-white p-1 h-12 border-b'>
          </div>
        </div>
        <div className='flex relative flex-1 overflow-y-scroll p-2 '>
            <div className='sticky top-0 h-full flex flex-col gap-2 bg-white shadow-lg rounded-xl p-2'>
                <button className='p-2 text-sm bg-gray-100 rounded-md flex flex-col items-center justify-center'>
                    <ColorLensIcon/>
                    <span>Theme</span>
                </button>
                <button className='p-2 text-sm bg-gray-100 rounded-md flex flex-col items-center justify-center'>
                    <LayersIcon/>
                    <span>Pages</span>
                </button>
            </div>
            <div className='p-4 w-full'>
                <Window/>
            </div>
        </div>
      </div>
  )
}

export default Page;