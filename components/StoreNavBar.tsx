"use client"
import React from "react";

import Image from "next/image";
import logo from "@/public/Logo.png";
import Link from "next/link";
import { useData } from "@/store/useData";
import { page, usePages } from "@/store/usePages";
import {useEffect,useState} from "react"
import NewPage from "./AddNewPage";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useUser } from "@/store/useUser";
const StoreNavBar = () => {
  const {data,setData}=useData()
  const {currentPage,pages,setPages,setCurrentPage}=usePages()
  const {store}=useUser()
  const [publishing,setPublishing]=useState(false)
  useEffect(() => {
      setData(pages[currentPage].data)
  }, [currentPage])

  useEffect(() => {
    setPages(pages.map((page,i)=>{
      if(i==currentPage){
        return({
          ...page,
          data
        })
      }else{
        return page
      }
    }))
  }, [data])


  const save = ()=>{
    setPublishing(true)
    pages.forEach((page) => {
      const pageRef = doc(db,"pages",page.id)
      updateDoc(pageRef,{
        data:page.data
      }).then(()=>{
        setTimeout(()=>{
          setPublishing(false)
        },1000)
      })
    });
  }
  
  return (
    <div className=" shadow-lg top-0 w-full left-0">
      <div className="bg-white py-4 flex justify-between px-6 gap-8 border-b">
        <a href={"/"}>
          <Image className="w-8 h-8" src={logo} alt="30 min shop logo"></Image>
        </a>
        <div className="px-1  flex items-center gap-2">
          <div className="join join-horizontal">
          <select onChange={e=>setCurrentPage((e.target as any).value)} value={currentPage} className="select join-item select-sm select-bordered w-full max-w-xs">
            {
              pages.map((page,i)=><option value={i} key={page.url}>{page.name}</option>)
            }
          </select>
          <NewPage/>
          </div>
          <button onClick={save} className="btn  btn-sm">publish
          { publishing && <span className="loading loading-spinner loading-xs"></span>}
          </button>
          {
            data.length>0&&
            <a href={"live/"+store+"/"+pages[currentPage].url} className="btn btn-sm btn-primary">
              Live
            </a>
          }
        </div>
      </div>
    </div>
  );
};

export default StoreNavBar;
