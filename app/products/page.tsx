
"use client"
import { Menu } from "@/components/Menu";
import {useEffect, useState} from "react"
import { getDocs, query, where} from "firebase/firestore"
import {productsRef} from "@/firebase"
import NewProduct from "@/components/NewProduct";
import { useUser } from "@/store/useUser";
import Security from "@/components/Security";

export default function Orders() {
  const {user:{store}}=useUser()
  const [products,setProducts]=useState([])
  useEffect(() => {
    const q = query(productsRef,where("store","==",store))
    getDocs(q)
    .then((snapshot)=>{
      let prds:any=[];
      snapshot.docs.forEach(doc => {
        prds.push({...doc.data(),id:doc.id})
      });
      setProducts(prds);
      console.log(prds);
    })
  }, [])
  
  return (
    <Security>

    <div className="min-h-screen w-full flex relative">
      <Menu />
      <div className="flex-1 p-6">
      <div className="flex w-full justify-between items-center">
        <h1 className="py-8 text-5xl text-primary font-semibold uppercase">Products</h1>
        <NewProduct/>

      </div>
      <div className="overflow-x-auto flex-1 bg-white rounded-2xl shadow-lg p-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map(product=>(
                <tr key={(product as any).id}>
                  <td><img className="w-24 h-20 object-contain" src={(product as any).image}></img></td>
                  <td>{(product as any).title}</td>
                  <td>{(product as any).price} Dh</td>
                  <td>{(product as any).description}</td>
                  <td>{(product as any).avalibale?"true":"false"}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      </div>
    </div>
    </Security>
  );
}
