"use client";
import NavBar from '@/StoreSections/NavBar'
import React, { useState,useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import SectionContainer from './SectionContainer';
import { section } from '@/types/types';
import { useData } from '@/store/useData';
import Hero from '@/StoreSections/Hero';
import AddSectionDialog from './AddSectionDialog';
import ProductsViewer from '@/StoreSections/ProductsViewer';
import Footer from '@/StoreSections/Footer';
import { usePages } from '@/store/usePages';
import { pagesRef } from '@/firebase';
import { and, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import Cart from '@/StoreSections/Cart';
import { useUser } from '@/store/useUser';


type props = {
  editable :boolean;
  page?:undefined|string
  storeName?:undefined|string
}
const StoreGeneratorLive = ({editable,page,storeName}:props) => {
  const {data,setData,add} = useData()
  const {currentPage,setPages,setCurrentPage} = usePages()
  const [err,setErr]=useState(false)
  const {setStore}=useUser();

  
  useEffect(()=>{
    setData([])
    if(page!=undefined){
      // pages.forEach((p:any,i) => {
      //   if(p.url==page){
      //     setData(p.data)
      //     setCurrentPage(i)
      //     console.log(p.data)
      //   }
      // });

      const q = query(pagesRef,and(where("url","==",page),where("store","==",storeName)))
      onSnapshot(q,(snapshot)=>{
        let pags:any[]=[]
        snapshot.docs.forEach((doc)=>{
          pags.push({...doc.data(),id:doc.id})
        })
        if(pags.length>0){
          setStore(storeName||"")
          setPages(pags)
          setData(pags[0].data)
          console.log(pags)
          setCurrentPage(0)
        }else{
          setErr(true)
        }
      })
    }
  },[])




  return (
    err?
    <div>page not found bitch</div>
    :
    <div className='bg-white'>
        {
          data.map((section,key)=>{

            if(section.type==="navbar"){
                return(
                    <NavBar storeName={storeName} key={key} conf={section.props}/>
                )
            }

            if(section.type==="hero"){
                return(
                    <Hero key={key} conf={section.props}/>
                )
            }

            if(section.type==="productsViewer"){
                return(
                    <ProductsViewer key={key} conf={section.props}/>
                )
            }
            if(section.type==="footer"){
                return(
                    <Footer key={key} conf={section.props}/>
                )
            }
            if(section.type==="Cart"){
                return(
                    <Cart key={key} conf={section.props}/>
                )
            }

          })
        }
    </div>
  )
}

export default StoreGeneratorLive