import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Link from 'next/link';
import { usePages } from '@/store/usePages';
import { useUser } from '@/store/useUser';
import { useCart } from '@/store/useCart';


const NavBar = ({conf,storeName}:any) => {
  const {pages,currentPage}=usePages()
  const {user:{store}}=useUser()
  const {cart}=useCart()

  return (
    <div style={{backgroundColor:conf?.backgroundColor,color:conf?.textColor}} className='flex justify-between items-center   py-6  p-2 px-10 w-full '>
      <div className='flex container gap-2 mx-auto justify-between items-center w-full'>

      <div className='flex  gap-10 items-center'>
        <div className=' flex justify-between items-center gap-4'>
          {conf.viewLogo && <img style={{height:conf?.logoSize*2+"px"}} src={conf?.logoUrl||"http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.22458d61.png&w=256&q=75"}/>}
          {conf.viewLogoText && <div className='text-lg font-medium ' style={{color:conf?.logoTextColor}}>{conf?.logoText}</div>}
        </div>
      </div>
      <div className='flex-1 flex px-4' style={{justifyContent:conf?.linksAlign||"start"}}>
        {
          conf?.viewLinks &&
        <ul className='flex  '>
          {
          pages[currentPage].links.map((link:any)=>(
              link.show&&
              <li >
                <Link href={"/live/"+storeName+"/"+link.url} className='px-4 py-2  rounded-lg font-medium cursor-pointer hover:bg-[#0001]'>
                  {link.name}
                </Link>
              </li>
              )
              )
          }
        </ul>
        }
      </div>
      {
        (conf.search||conf.viewCart)&&
      <div className='flex gap-1  justify-end'>
          {conf.search && 
            <button className=' btn btn-circle hover:btn-primary rounded-xl hover:bg-gray-100'>
              <SearchRoundedIcon/>
            </button>
          }
          {conf.viewCart && 
            <Link href={'/live/'+store+'/cart'} className=' btn btn-circle relative hover:btn-primary gap-2 rounded-xl hover:bg-gray-100'>
              <span className="badge badge-primary absolute badge-sm top-0 -right-1 indicator-item">{cart?.length}</span>
              <ShoppingBasketIcon/>
            </Link>
          }
      </div>
      }


      </div>
    </div>
  )
}

export default NavBar