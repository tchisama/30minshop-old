import { useData } from '@/store/useData'
import { Divider, IconButton, Switch } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Hero = () => {
  const {data,setData,selectedSection,setSelectedSection}=useData()
  return (
    <div className='text-gray-600'>
        <div className='flex w-full mb-4 justify-between items-center'>
            <h2 className='text-2xl  font-medium'>Hero Section</h2>
            <IconButton onClick={()=>setSelectedSection(null)}><CloseIcon/></IconButton>
        </div>

        <Divider/>

        <div className='py-4'>
            <h4 className='text-xl font-medium py-2'>Header</h4>
            <div className='flex justify-between items-center '>
                <span> Header</span> 
                <Switch checked={data[selectedSection||0].props.h1} onClick={()=>setData(data.map((s,i)=>i==selectedSection?{...s,props:{...s.props,h1:!s.props.h1}}:s))}/>
            </div>
            <textarea className='w-full outline-blue-300 rounded-lg px-4 py-2 bg-white border' value={data[selectedSection||0].props.h1Text} onInput={(e)=>setData(data.map((s,i)=>i==selectedSection?{...s,props:{...s.props,h1Text:(e.target as any).value}}:s))}/>
            <div className='flex justify-between items-center '>
                <span> Sub header</span> 
                <Switch checked={data[selectedSection||0].props.h3} onClick={()=>setData(data.map((s,i)=>i==selectedSection?{...s,props:{...s.props,h3:!s.props.h3}}:s))}/>
            </div>
            <textarea className='w-full outline-blue-300 rounded-lg px-4 py-2 bg-white border' value={data[selectedSection||0].props.h3Text} onInput={(e)=>setData(data.map((s,i)=>i==selectedSection?{...s,props:{...s.props,h3Text:(e.target as any).value}}:s))}/>

            <h4 className='text-xl font-medium py-2'>Header</h4>
            <div className='flex justify-between items-center '>
                <span> image</span> 
                <Switch checked={data[selectedSection||0].props.image} onClick={()=>setData(data.map((s,i)=>i==selectedSection?{...s,props:{...s.props,image:!s.props.image}}:s))}/>
            </div>
            <input className='w-full  outline-blue-300 rounded-lg px-4 py-2 bg-white border' value={data[selectedSection||0].props.imageUrl} onInput={(e)=>setData(data.map((s,i)=>i==selectedSection?{...s,props:{...s.props,imageUrl:(e.target as any).value}}:s))}/>
        </div>

    </div>
  )
}

export default Hero