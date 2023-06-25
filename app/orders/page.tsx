"use client"
import { Menu } from "@/components/Menu";
import { orderRef } from "@/firebase";
import { useUser } from "@/store/useUser";
import { onSnapshot, query, where } from "firebase/firestore";
import {useState,useEffect} from "react"
export default function Orders() {
  const [orders,setOrders]=useState([])
  const { store }= useUser()
  useEffect(() => {
    const q = query(orderRef,where("store","==",store))
    const getData = onSnapshot(q,snapshot=>{
      let ords = []
      snapshot.docs.forEach(doc=>{
        ords.push({...doc.data(),id:doc.id})
      })
      setOrders(ords)
    })
    return () => {
      getData()
    }
  }, [])
  
  return (
    <div className="min-h-screen w-full flex relative">
      <Menu />
      <div className="flex-1 p-6">
      <h1 className="py-8 text-5xl text-primary font-semibold uppercase">Orders</h1>
      <div className="overflow-x-auto flex-1 bg-white rounded-2xl shadow-lg p-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>full name</th>
              <th>phone number</th>
              <th>address</th>
              <th>products</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order:any)=>(
                  <tr>
                    <td>{order.fullName}</td>
                    <td>{order.number}</td>
                    <td>{order.address}</td>
                    <td>
                      <div className="avatar-group -space-x-6 py-1">
                        {
                          order.cart.map((o:any)=>(
                        <div className="avatar border-[3px] shadow-md border-white">
                          <div className="w-12">
                                    <img className="object-contain bg-white" src={o.product.img} />
                          </div>
                        </div>
                          ))
                        }
                      </div>
                    </td>
                  </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      </div>
    </div>
  );
}
