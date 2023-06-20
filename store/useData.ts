import { section } from "@/types/types"
import { data } from "autoprefixer"
import create from "zustand"

interface Data {
    data:section[]
    setData:(newData:section[])=>void
    add:(section:section,where:number) => void
    selectedSection:number | null
    setSelectedSection:(num:number|null)=> void
}
export const useData = create<Data>()((set)=>({
    data:[],
    setData:(newData)=>set(state=>({data:[...newData]})),
    selectedSection:null,
    setSelectedSection:(num)=>set(state=>({selectedSection:num})),

    add:(section,where=0)=>
        set((state)=>({
            data:[...state.data.slice(0,where+1),section,...state.data.slice(where+1)],
            selectedSection:where
        })),
}))