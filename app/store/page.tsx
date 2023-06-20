"use client"
import Window from '@/components/Window';
import React from 'react'



import StoreLeftMenu from '@/components/StoreLeftMenu';
import StoreNavBar from '@/components/StoreNavBar';
import EditSection from '@/components/EditSection';
import { useData } from '@/store/useData';



const Page = () => {
  const {selectedSection}=useData()
  return (
      <div className='h-screen relative  flex flex-col'>
            <StoreNavBar/>
        <div className='flex relative flex-1 h-[calc(100vh-65px)] p-2 pt-4'>
            <StoreLeftMenu/>
            <Window/>
            {
             selectedSection!==null && <EditSection/>
            }
        </div>
      </div>
  )
}

export default Page;