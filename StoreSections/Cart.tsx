import { orderRef } from '@/firebase'
import { useCart } from '@/store/useCart'
import { useUser } from '@/store/useUser'
import { addDoc } from 'firebase/firestore'
import {useState} from 'react'

const Cart = ({conf}:any) => {
    const {cart}=useCart()
    const {store}=useUser()
    const [fullName,setFullName]=useState("")
    const [number,setNumber]=useState("")
    const [address,setAddress]=useState("")
    const [loading,setLoading]=useState(false)
    const checkout = ()=>{
        setLoading(true)
        addDoc(orderRef,{
            fullName,
            store,
            number,
            address,
            cart
        }).then(()=>{
            setTimeout(() => {
                setFullName("")
                setNumber("")
                setAddress("")
                setLoading(false)
            }, 1000);
        })
    }
  return (
    <div className='container mx-auto flex gap-2 p-2 relative'>
      <div className="overflow-x-auto flex-1 h-fit border bg-white rounded-2xl shadow-sm p-4">
        <div className='flex justify-between p-4 py-6 text-lg font-semibold '>
            <span>Cart</span>
            <span>{cart.length} items</span>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>quantity</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map(item=>(
                <tr key={item.product.id}>
                  <td><img className="w-24 h-20 object-contain" src={item.product.img}></img></td>
                  <td>{item.product.title}</td>
                  <td>{item.product.price} Dh</td>
                  <td>{item.quantity}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className='max-w-[500px] flex flex-col w-full shadow-sm border rounded-2xl gap-2 p-6 bg-white h-fit sticky top-10'>
            <h2 className='text-2xl font-medium w-full flex justify-between'><span>total Price</span><span>{cart.length * 100} Dh</span></h2>
            <br />
            <label>name</label>
            <input value={fullName} onInput={(e)=>setFullName((e.target as any).value)} className='input input-bordered mb-1' type="text" />
            <label>number</label>
            <input  value={number} onInput={(e)=>setNumber((e.target as any).value)} className='input input-bordered mb-1' type="tel" />
            <label>address</label>
            <input  value={address} onInput={(e)=>setAddress((e.target as any).value)} className='input input-bordered input-md mb-1' type="text" />
            <button onClick={checkout} className='btn btn-primary'>
                Check out
                {loading && 
                <span className="loading loading-spinner loading-sm"></span>}
            </button>
      </div>
    </div>
  )
}

export default Cart