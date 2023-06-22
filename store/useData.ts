import { section } from "@/types/types"
import create from "zustand"

interface Data {
    data:section[]
    setData:(newData:section[])=>void
    add:(section:section,where:number) => void
    remove:(index:number) => void
    selectedSection:number | null
    setSelectedSection:(num:number|null)=> void
}

export const useData = create<Data>()((set)=>({
    data:[],
    setData:(newData)=>set(state=>({data:[...newData]})),
    selectedSection:null,
    setSelectedSection:(num)=>set(state=>({selectedSection:num})),
    remove:(index)=>set((state)=>({
        data:state.data.filter((s,i)=>i!==index)
    })),
    add:(section,where=0)=>
        set((state)=>({
            data:[...state.data.slice(0,where+1),section,...state.data.slice(where+1)],
            selectedSection:where
        })),
}))