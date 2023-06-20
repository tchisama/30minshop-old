"use client"
import Window from '@/components/Window';
import React from 'react'



import StoreLeftMenu from '@/components/StoreLeftMenu';
import StoreNavBar from '@/components/StoreNavBar';
import EditSection from '@/components/EditSection';



const Page = () => {
  return (
      <div className='h-screen relative  flex flex-col'>
            <StoreNavBar/>
        <div className='flex relative flex-1 overflow-y-scroll  p-2 pt-4'>
            <StoreLeftMenu/>
            <Window/>
            <EditSection/>
        </div>
      </div>
  )
}

export default Page;