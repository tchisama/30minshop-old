import { section } from "@/types/types";
import { create } from "zustand";


type User={
    name:string
    store:string
    number:string
    id:any
}

export const useUser = create<User>()((set)=>({
    name:"abdessamad",
    store:"nike",
    number:"",
    id:"0"
}))