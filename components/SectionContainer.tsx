import React ,{ReactNode, SetStateAction} from 'react'

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { section } from '@/types/types';

interface INameProps {
    children: ReactNode; 
    setData:React.Dispatch<SetStateAction<section[]>>;
    setSelectedSection:React.Dispatch<React.SetStateAction<number|null>>;
    selectedSection:number|null;
    k:number;
    addSection:(k:number)=>void;
}

const SectionContainer=({children,setData,setSelectedSection,selectedSection,k,addSection}:INameProps) => {
  return (
            <div onClick={()=>setSelectedSection(k)} style={{border:k==selectedSection?"2px solid #4F46E5":""}}  className='hover-border-primer cont border-dashed cursor-pointer rounded-md border relative border-transparent'>
                <div className='rounded-md overflow-hidden'>
                    {children}
                </div>
                <div className='z-10 bg-white shadow-lg p-1 flex gap-1  rounded-full border scale-0 add-section duration-300 ease-in-out translate-x-[-50%] -bottom-4 left-[50%] absolute '>
                    <button onClick={()=>addSection(k)} className=' px-2 p-1 rounded-full bg-primer text-white text-sm flex items-center gap-1'><AddIcon/> Add Section</button>
                    <button className='hover:bg-gray-100 p-1 rounded-full bg-white border text-primer text-sm '><EditIcon/></button>
                    <button onClick={()=>setData((p:any)=>p.filter((s:any,i:number)=>i!==k))} className='hover:bg-gray-100 p-1 rounded-full bg-white border text-red-400 text-sm '><DeleteIcon/></button>
                </div>
            </div>
  )
}

export default SectionContainer