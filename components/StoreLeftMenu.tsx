import React from 'react'

import ColorLensIcon from '@mui/icons-material/ColorLens';
import LayersIcon from '@mui/icons-material/Layers';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

const StoreLeftMenu = () => {
  return (
        <div className='sticky text-gray-600 top-0 h-fit  flex flex-col bg-white shadow-lg rounded-xl p-2'>
            <button className='p-2 duration-300 text-sm hover:text-gray-800 hover:bg-gray-100 rounded-md flex flex-col items-center justify-center'>
                <ColorLensIcon/>
                <span>Theme</span>
            </button>
            <button className='p-2 duration-300  text-sm  hover:text-gary-800 hover:bg-gray-100 rounded-md flex flex-col items-center justify-center'>
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
  )
}

export default StoreLeftMenu