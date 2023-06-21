import { useData } from '@/store/useData'
import { Divider, IconButton, Switch } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const {data,setData,selectedSection,setSelectedSection}=useData()
  return (
    <div className='text-gray-600'>
        <div className='flex w-full mb-4 justify-between items-center'>
            <h2 className='text-2xl  font-medium'>Navbar</h2>
            <IconButton onClick={()=>setSelectedSection(null)}><CloseIcon/></IconButton>
        </div>
        <Divider/>
        <div className='py-4'>
            <h4 className='text-xl font-medium py-2'>Logo</h4>

            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">logo</span> 
                <input onClick={()=>setData(data.map((s,i)=>i==selectedSection?{...s,props:{...s.props,viewLogo:!s.props.viewLogo}}:s))} checked={data[selectedSection||0].props.viewLogo} type="checkbox" className="checkbox checkbox-primary" />
              </label>
              {
                data[selectedSection||0].props.viewLogo  &&
                <>
                <input value={data[selectedSection||0].props?.logoUrl||""} onInput={(e)=>setData(data.map((s,i)=>i==selectedSection?{...s,props:{...s.props,logoUrl:(e.target as any).value}}:s))}  type="text" placeholder="Type here" className="input my-1 input-bordered input-sm w-full max-w-xs" />

                <label className='flex flex-col items-start label'>
                  <span className='label-text'>size</span>
                  <input value={data[selectedSection||0].props?.logoSize||0} onInput={(e)=>setData(data.map((s,i)=>i==selectedSection?{...s,props:{...s.props,logoSize:(e.target as any).value}}:s))}   type="range" min={0} max={40}  className="range range-primary range-xs" step="5" />
                  <div className="w-full flex justify-between text-xs px-2 py-2 text-gray-400">
                    <span>|</span><span>|</span>
                    <span>|</span><span>|</span>
                    <span>|</span><span>|</span>
                    <span>|</span><span>|</span>
                    <span>|</span>
                  </div>
                </label>
                </>
              }
            </div>


            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">logo name</span> 
                <input onClick={()=>setData(data.map((s,i)=>i==selectedSection?{...s,props:{...s.props,viewLogoText:!s.props.viewLogoText}}:s))} checked={data[selectedSection||0].props.viewLogoText} type="checkbox" className="checkbox checkbox-primary" />
              </label>
              {
                data[selectedSection||0].props.viewLogoText  &&
                <div className='flex gap-2'>
                <input value={data[selectedSection||0].props?.logoText||''} onInput={(e)=>setData(data.map((s,i)=>i==selectedSection?{...s,props:{...s.props,logoText:(e.target as any).value}}:s))}  type="text" placeholder="Type here" className="input my-1 input-bordered input-sm w-full max-w-xs" />
                <input value={data[selectedSection||0].props?.logoTextColor||''} onInput={(e)=>setData(data.map((s,i)=>i==selectedSection?{...s,props:{...s.props,logoTextColor:(e.target as any).value}}:s))}  type="color" placeholder="Type here" className="input my-1 px-0 w-16 input-bordered input-sm  max-w-xs" />
                </div>
              }
            </div>
        </div>

        <div className='py-4'>
            <h4 className='text-xl font-medium py-2'>Search</h4>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Show search</span> 
                <input onClick={()=>setData(data.map((s,i)=>i==selectedSection?{...s,props:{...s.props,search:!s.props.search}}:s))} checked={data[selectedSection||0].props.search} type="checkbox" className="checkbox checkbox-primary" />
              </label>
            </div>
        </div>

        <div className='py-4'>
            <h4 className='text-xl font-medium py-2'>Cart</h4>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Show cart</span> 
                <input onClick={()=>setData(data.map((s,i)=>i==selectedSection?{...s,props:{...s.props,viewCart:!s.props.viewCart}}:s))} checked={data[selectedSection||0].props.viewCart} type="checkbox" className="checkbox checkbox-primary" />
              </label>
            </div>
        </div>
    </div>
  )
}

export default Navbar