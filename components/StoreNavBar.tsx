"use client"
import React from "react";

import Image from "next/image";
import logo from "@/public/Logo.png";
import Link from "next/link";
import { useData } from "@/store/useData";
import { usePages } from "@/store/usePages";
import {useEffect} from "react"
const StoreNavBar = () => {
  const {data,setData}=useData()
  const {currentPage,pages,setPages,setCurrentPage}=usePages()
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
  
  return (
    <div className=" shadow-lg top-0 w-full left-0">
      <div className="bg-white py-4 flex justify-between px-6 gap-8 border-b">
        <Link href={"/"}>
          <Image className="w-8 h-8" src={logo} alt="30 min shop logo"></Image>
        </Link>
        <div className="px-1  flex items-center gap-2">
          <div className="join join-horizontal">
          <select onChange={e=>setCurrentPage((e.target as any).value)} value={currentPage} className="select join-item select-sm select-bordered w-full max-w-xs">
            {
              pages.map((page,i)=><option value={i} key={page.url}>{page.name}</option>)
            }
          </select>
          <button className="btn join-item btn-sm hover:btn-primary">new</button>
          </div>
          <button className="btn  btn-sm">save</button>
          {
            data.length>0&&
            <Link href={"live/mystore"} className="btn btn-sm btn-primary">
              Live
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default StoreNavBar;
