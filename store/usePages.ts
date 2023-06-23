import { section } from "@/types/types";
import { create } from "zustand";

export type page = {
    name:string
    url:string
    data:section[]
}

type Pages={
    pages:page[]
    currentPage:number
    setCurrentPage:(page:number)=>void
    setPages:(newPages:page[])=>void
}

export const usePages = create<Pages>()((set)=>({
    pages:[
        {
        name:"home",
        url:"",
        data:[]
        },
        {
        name:"market",
        url:"market",
        data:[]
        }
        ],
    currentPage:0,
    setCurrentPage:(page)=>set(()=>({currentPage:page})),
    setPages:(newPages)=>set(()=>({pages:[...newPages]})),
}))