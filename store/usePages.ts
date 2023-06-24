import { section } from "@/types/types";
import { create } from "zustand";

export type page = {
    name:string
    url:string
    data:section[]
    id:any
    links:{
        name:string
        url:string
        show:boolean
    }[]
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
        data:[],
        id:"0",
        links:[
            {name:"home",url:"",show :true}
        ]
        },
        ],
    currentPage:0,
    setCurrentPage:(page)=>set(()=>({currentPage:page})),
    setPages:(newPages)=>set(()=>({pages:[...newPages]})),
}))