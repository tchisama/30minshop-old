"use client"
import Window from '@/components/Window';
import {useEffect} from 'react'



import StoreLeftMenu from '@/components/StoreLeftMenu';
import StoreNavBar from '@/components/StoreNavBar';
import EditSection from '@/components/EditSection';
import { useData } from '@/store/useData';
import { getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { pagesRef } from '@/firebase';
import { usePages } from '@/store/usePages';
import { useUser } from '@/store/useUser';



const Page = () => {
  const {selectedSection,setData}=useData()
  const {setPages,setCurrentPage}=usePages()
  const {store}=useUser()


  useEffect(() => {
    const q= query(pagesRef,where("store","==",store))

    onSnapshot(q,(snapshot)=>{
      let pgs:any=[];
      snapshot.docs.forEach(doc => {
        pgs.push({...doc.data(),id:doc.id})
      });
      setPages(pgs);
      console.log(pgs);
      setData(pgs[0]?.data)
      setCurrentPage(0)
    })
  }, [])


  return (
      <div className='h-screen flex-1 relative  flex flex-col'>
            <StoreNavBar/>
        <div className='flex relative gap-4 flex-1 h-[calc(100vh-65px)] p-2 pt-4'>
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