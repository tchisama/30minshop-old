import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { navbarProps } from '@/types/types';
import CropSquareIcon from '@mui/icons-material/CropSquare';

type navbarPropss ={
  conf:navbarProps;
}

const NavBar = ({conf}:navbarPropss) => {
  return (
    <div className='flex justify-between items-center bg-white  text-gray-600 p-4 px-10 w-full '>
      <div className='flex container mx-auto justify-between items-center w-full'>

      <div className='flex gap-10 items-center'>
        <div className='text-xl font-bold uppercase flex justify-between items-center gap-2'>
          {conf.viewLogo && <CropSquareIcon sx={{fontSize:40}}/>}
          {conf.viewLogoText && 'logo'}
        </div>
        <ul className='flex gap-4 '>
            <li>Home</li>
            <li>About</li>
            <li>Market</li>
            <li>Contact</li>

        </ul>
      </div>

      <div className='flex gap-4'>
      {conf.search && <input type="text" placeholder='search' className='border p-2 px-4 rounded-xl outline-none'></input>}
      {conf.viewCart && 
        <button className='p-2 rounded-xl  border'>
          <ShoppingBasketIcon/>
        </button>
      }
      </div>

      </div>
    </div>
  )
}

export default NavBar