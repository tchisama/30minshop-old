"use client";
import NavBar from '@/StoreSections/NavBar'
import React, { useState,useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import SectionContainer from './SectionContainer';
import { section } from '@/types/types';



const StoreGenerator = () => {
  const [data,setData]=useState<Array<section>>([])
  const [selectedSection,setSelectedSection]=useState<number|null>(null)
  const addSection:(key:number)=>void=(key)=>{
    if(data.length>0){
      setData(p=>[...p.slice(0,key+1),{type:"navbar",props:{links:[{name:"home",link:"home"}],search:true,viewCart:true,viewLogo:false}},...p.slice(key+1)])
      setSelectedSection(key+1)
    }else{
      setData([{type:"navbar",props:{links:[{name:"home",link:"home"}],search:true,viewCart:true,viewLogo:false}}])
      setSelectedSection(0)
    }
}
  useEffect(() => {
    console.log(data)
  }, [data])
  

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
                <SectionContainer key={key} k={key} addSection={addSection} setData={setData} selectedSection={selectedSection} setSelectedSection={setSelectedSection}>
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