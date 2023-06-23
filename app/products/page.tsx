
"use client"
import { Menu } from "@/components/Menu";
import {useEffect, useState} from "react"
import { getDocs} from "firebase/firestore"
import {productsRef} from "@/firebase"

export default function Orders() {
  const [products,setProducts]=useState([])
  useEffect(() => {
    getDocs(productsRef)
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
    <div className="min-h-screen w-full flex relative">
      <Menu />
      <div className="flex-1 p-6">
      <h1 className="py-8 text-5xl text-primary font-semibold uppercase">Products</h1>
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
                  <td>{(product as any).price}</td>
                  <td>{(product as any).description.slice(0,30)}</td>
                  <td><input type="checkbox" className="checkbox checkbox-primary" checked={(product as any).available}></input></td>
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
