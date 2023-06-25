import { section } from "@/types/types";
import { create } from "zustand";


type User={
    user:any
    setUser:(newUser:any)=>void
    setStore:(newStore:string)=>void
}

export const useUser = create<User>()((set)=>({
    user:{
        store:""
    },
    setUser:(newUser:any)=>set(state=>({user:newUser})),
    setStore:(newStore:string)=>set(state=>({user:{...state.user,store:newStore}}))
}))