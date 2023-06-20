import React ,{ReactNode, SetStateAction} from 'react'

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { section } from '@/types/types';
import { useData } from '@/store/useData';

interface INameProps {
    children: ReactNode; 
    k:number;
}

const SectionContainer=({children,k}:INameProps) => {
    const {selectedSection,setSelectedSection,add}=useData()
  return (
            <div onClick={()=>{if(k!==selectedSection){setSelectedSection(k)}else{setSelectedSection(null)}}} style={{border:k==selectedSection?"2px solid #4F46E5":""}}  className='hover-border-primer cont border-dashed cursor-pointer rounded-md border relative border-transparent'>
                <div className='rounded-md overflow-hidden'>
                    {children}
                </div>
                <div className='z-10 bg-white shadow-lg p-1 flex gap-1  rounded-full border scale-0 add-section duration-200 ease-in-out translate-x-[-50%] -bottom-4 left-[50%] absolute '>
                    <button onClick={()=>add({type:"navbar",props:{links:[{name:"home",link:"home"}],search:true,viewCart:true,viewLogoText:false,viewLogo:false}},k)} className=' px-2 p-1 rounded-full bg-primer text-white text-sm flex items-center gap-1'><AddIcon/> Add Section</button>
                    <button className='hover:bg-gray-100 p-1 rounded-full bg-white border text-primer text-sm '><EditIcon/></button>
                    <button className='hover:bg-gray-100 p-1 rounded-full bg-white border text-red-400 text-sm '><DeleteIcon/></button>
                </div>
            </div>
  )
}

export default SectionContainer