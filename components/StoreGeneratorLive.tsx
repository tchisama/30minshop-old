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


type props = {
  editable :boolean;
  page?:undefined|string
}
const StoreGeneratorLive = ({editable,page}:props) => {
  const {data,setData,add} = useData()
  const {currentPage,setCurrentPage,pages} = usePages()

  
  useEffect(()=>{
    if(page!=undefined){
      pages.forEach((p:any,i) => {
        if(p.url==page){
          setData(p.data)
          setCurrentPage(i)
        }
      });
    }
  },[])

  return (
    <div className='bg-white'>
        {
          data?.length===0&&
          <div className='p-8 flex items-center justify-center w-full'>
            <AddSectionDialog index={0}/>
          </div>
        }
        {
          data.map((section,key)=>{

            if(section.type==="navbar"){
              if (editable) {
                return(
                  <SectionContainer key={key} k={key} >
                    <NavBar conf={section.props}/>
                  </SectionContainer>
                )
              } else {
                return(
                    <NavBar conf={section.props}/>
                )
              }
            }

            if(section.type==="hero"){
              if (editable) {
                return(
                  <SectionContainer key={key} k={key} >
                    <Hero conf={section.props}/>
                  </SectionContainer>
                )
              } else {
                return(
                    <Hero conf={section.props}/>
                )
              }
            }

            if(section.type==="productsViewer"){
              if (editable) {
                return(
                  <SectionContainer key={key} k={key} >
                    <ProductsViewer conf={section.props}/>
                  </SectionContainer>
                )
              } else {
                return(
                    <ProductsViewer conf={section.props}/>
                )
              }
            }
            if(section.type==="footer"){
              if (editable) {
                return(
                  <SectionContainer key={key} k={key} >
                    <Footer conf={section.props}/>
                  </SectionContainer>
                )
              } else {
                return(
                    <Footer conf={section.props}/>
                )
              }
            }

          })
        }
    </div>
  )
}

export default StoreGeneratorLive