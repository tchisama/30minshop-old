import Navbar from '@/EditSection/Navbar'
import { useData } from '@/store/useData'
import React from 'react'

const EditSection = () => {
  const {data,selectedSection,setSelectedSection}=useData()

  return (
    <div className='h-[100%]  top-0 sticky rounded-xl p-4 shadow-xl w-[400px] bg-gray-50 border-[3px] border-white ' >
      {
        ( selectedSection !== null &&
          data[selectedSection||0]?.type==="navbar"?
            <Navbar/> : ""
        )
      }
      <button onClick={()=>setSelectedSection(null)} className='absolute top-2 right-2 p-2 py-1 rounded-fullj bg-red-200 border'>close</button>
    </div>
  )
}

export default EditSection