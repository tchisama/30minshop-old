import { useData } from '@/store/useData'
import { Divider, Switch } from '@mui/material'
import React from 'react'

const Navbar = () => {
  const {data,setData,selectedSection}=useData()
  return (
    <div className='text-gray-600'>
        <h2 className='text-2xl mb-4 font-medium'>Navbar</h2>
        <Divider/>
        <div className='py-4'>
            <h4 className='text-xl font-medium py-2'>Logo</h4>
            
            <div className='flex justify-between items-center '>
            <span> Show Logo</span> 
            <Switch checked={data[selectedSection||0].props.viewLogo} onClick={()=>setData(data.map((s,i)=>i==selectedSection?{...s,props:{...s.props,viewLogo:!s.props.viewLogo}}:s))}/>
            </div>

            <div className='flex justify-between items-center '>
            <span> Show Logo Text</span> 
            <Switch checked={data[selectedSection||0].props.viewLogoText} onClick={()=>setData(data.map((s,i)=>i==selectedSection?{...s,props:{...s.props,viewLogoText:!s.props.viewLogoText}}:s))}/>
            </div>
        </div>
        <div className='py-4'>
            <h4 className='text-xl font-medium py-2'>Search</h4>
            
            <div className='flex justify-between items-center '>
            <span> Show Search</span> 
            <Switch checked={data[selectedSection||0].props.search} onClick={()=>setData(data.map((s,i)=>i==selectedSection?{...s,props:{...s.props,search:!s.props.search}}:s))}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar