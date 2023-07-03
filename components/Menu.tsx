"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/Logo.png";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AutoAwesomeMotionRoundedIcon from "@mui/icons-material/AutoAwesomeMotionRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { Collapse } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useUser } from "@/store/useUser";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";




const MenuArray = [
  { name: "Dashboard", icon: <DashboardRoundedIcon />, open: false,link:"/" },
  { name: "Orders", icon: <AutoAwesomeMotionRoundedIcon />, open: false,link:"/orders" },
  { name: "Products", icon: <LocalOfferRoundedIcon />, open: false,link:"/products" },
  { name: "Store", icon: <StorefrontRoundedIcon />, open: false ,link:"/store"},
  { name: "Settings", icon: <SettingsRoundedIcon />, open: false,link:"/settings" },
];

export const Menu = () => {
  const [menu, setMenu] = useState(false);
  const {setUser} = useUser()
  const signout = ()=>{
    localStorage.setItem("user",'{"store":""}')
    setUser({store:""})
    signOut(auth)
  }
  return (
    <div className="py-4 m-2 rounded-xl shadow-xl px-1 flex flex-col gap-16 w-fit bg-primary text-white sticky top-8 h-full  ">
      <Image className="mx-4 w-12 h-12 bg-white p-2 mask mask-squircle" src={logo} alt="30 min shop logo"  onClick={()=>setMenu(p=>!p)}/>
      <ul className="menu font-medium text-md rounded-box gap-0 ">
        {
            MenuArray.map(link=><li><Link className="hover:text-white text-gray-200 py-4  w-full pr-2 pl-5" href={link.link}>{link.icon}{
              <Collapse orientation="horizontal" in={menu} >
                {link.name}
              </Collapse>
            }</Link></li>)
          }
          <li>
            <Link onClick={signout} href={"/signin"} className="hover:text-white py-4 mt-8 w-full pr-2 pl-5 ">
              <LogoutRoundedIcon/>
              <Collapse orientation="horizontal" in={menu} >
                Logout
              </Collapse>
            </Link>
          </li>
      </ul>
    </div>
  );
};
