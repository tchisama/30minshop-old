import React from "react";

import Image from "next/image";
import logo from "@/public/Logo.png";
import Link from "next/link";
import { useData } from "@/store/useData";

const StoreNavBar = () => {
  const {data}=useData()
  return (
    <div className=" shadow-lg top-0 w-full left-0">
      <div className="bg-white py-4 flex justify-between px-6 gap-8 border-b">
        <Link href={"/"}>
          <Image className="w-8 h-8" src={logo} alt="30 min shop logo"></Image>
        </Link>
        <div className="px-1  flex items-center gap-2">
          <div className="join join-horizontal">
          <select className="select join-item select-sm select-bordered w-full max-w-xs">
            <option>home</option>
            <option>about</option>
            <option>market</option>
            <option>contact</option>
          </select>
          <button className="btn join-item btn-sm hover:btn-primary">new</button>
          </div>
          {
            data.length>0&&
            <Link href={"live"} className="btn btn-accent btn-sm btn-primary">
              Live
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default StoreNavBar;
