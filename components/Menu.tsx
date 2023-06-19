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





const MenuArray = [
  { name: "Dashboard", icon: <DashboardRoundedIcon />, open: false 
  ,links:[
    {name:"up Sales"},
  ]
  },
  { name: "Orders", icon: <AutoAwesomeMotionRoundedIcon />, open: false 
  ,links:[
    {name:"All orders"},
    {name:"New order"},
  ]
  },
  { name: "Products", icon: <LocalOfferRoundedIcon />, open: false 
  ,links:[
    {name:"All Products"},
    {name:"New Product"},
    {name:"Categories"},
  ]
  },
  { name: "Store", icon: <StorefrontRoundedIcon />, open: false },
  { name: "Sittings", icon: <SettingsRoundedIcon />, open: false },
];

export const Menu = () => {
  const [menu, setMenu] = useState(MenuArray);
  return (
    <div className="py-8 px-1 flex flex-col gap-16 w-fit bg-[#fff8] sticky shadow-lg top-0 h-screen ">
      <Image className="mx-4 w-10 h-10" src={logo} alt="30 min shop logo" />
      <div className="py-4 flex flex-col  rounded-lg  min-w-[200px] ">
        {menu.map((li, key) => (
          <div className="px-4  rounded-md" style={{background:li.open?"#0001":"#fff0"}}>
            <div
              key={key}
              onClick={() =>
                setMenu((p) =>
                  p.map((l) => (l == li ? { ...l, open: !l.open } : {...l,open:false}))
                )
              }
              className="flex items-center gap-2 py-3 text-gray-500 font-medium hover:text-gray-700 cursor-pointer  duration-300 ease-in-out"
            >
              {li.icon}
              <div className="flex-1">{li.name}</div>
              {li.open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <Collapse in={li.open}>
              <ul className="pl-8">
                {
                    li?.links?.map(link=>(
                        <li className="py-2 text-gray-500 hover:text-gray-700 cursor-pointer">{link.name}</li>
                    ))
                }
              </ul>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
};
