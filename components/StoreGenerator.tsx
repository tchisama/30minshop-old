"use client";
import NavBar from '@/StoreSections/NavBar'
import React, { useState,useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import SectionContainer from './SectionContainer';
import { section } from '@/types/types';
import { useData } from '@/store/useData';



const StoreGenerator = () => {
  const {data,add} = useData()

  const addSection:(key:number)=>void=(key)=>{
      // setData(p=>[...p.slice(0,key+1),{type:"navbar",props:{links:[{name:"home",link:"home"}],search:true,viewCart:true,viewLogo:false}},...p.slice(key+1)])
      add({type:"navbar",props:{links:[{name:"home",link:"home"}],search:true,viewCart:true,viewLogoText:true,viewLogo:false}},key)
  }
  

  return (
    <div>
        {
          data?.length===0&&
          <div className='p-8 flex items-center justify-center w-full'>
            <button onClick={()=>addSection(0)} className='  px-4 p-2 rounded-full bg-primer text-white text-md flex items-center gap-1'><AddIcon/> Add Section</button>
          </div>
        }
        {
          data.map((section,key)=>{
            if(section.type==="navbar"){
              return(
                <SectionContainer key={key} k={key} >
                  <NavBar conf={section.props}/>
                </SectionContainer>
              )
            }
          })
        }
    </div>
  )
}

export default StoreGenerator