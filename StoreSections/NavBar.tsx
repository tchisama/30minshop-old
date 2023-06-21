import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { navbarProps } from '@/types/types';
import CropSquareIcon from '@mui/icons-material/CropSquare';


const NavBar = ({conf}:any) => {
  return (
    <div className='flex justify-between items-center bg-white  text-gray-600 p-4 px-10 w-full '>
      <div className='flex container gap-2 mx-auto justify-between items-center w-full'>

      <div className='flex  gap-10 items-center'>
        <div className=' flex justify-between items-center gap-4'>
          {conf.viewLogo && <img style={{height:conf?.logoSize*2+"px"}} src={conf?.logoUrl}/>}
          {conf.viewLogoText && <div className='text-lg font-medium ' style={{color:conf?.logoTextColor}}>{conf?.logoText}</div>}
        </div>
      </div>
      <div className='flex-1 flex justify-center'>
        <ul className='flex gap-4 '>
          {
            conf.links.map((link:any)=><li>{link.name}</li>)
          }

        </ul>
      </div>
      {
        (conf.search||conf.viewCart)&&
      <div className='flex gap-1  justify-end'>
          {conf.search && 
            <button className='p-2 rounded-xl hover:bg-gray-100'>
              <SearchRoundedIcon/>
            </button>
          }
          {conf.viewCart && 
            <button className='p-2 rounded-xl hover:bg-gray-100'>
              <ShoppingBasketIcon/>
            </button>
          }
      </div>
      }


      </div>
    </div>
  )
}

export default NavBar