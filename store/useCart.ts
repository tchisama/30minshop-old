import { section } from "@/types/types";
import { create } from "zustand";

type  CartItem  ={
    product:any
    quantity:number
}

type Cart={
    cart:CartItem[]
    addToCart:(item:CartItem)=>void
}

export const useCart = create<Cart>()((set)=>({
    cart:[],
    addToCart:(item:CartItem)=>set(state=>({cart:[...state.cart,item]}))
}))