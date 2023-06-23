import { productsRef } from '@/firebase';
import { addDoc } from 'firebase/firestore';
import React, { useState } from 'react'

const NewProduct = () => {
    const [title,setTitle]=useState("");
    const [image,setImage]=useState("");
    const [price,setPrice]=useState(0);
    const [description,setDescription]=useState("");

    const addNewProduct =()=>{ addDoc(productsRef,{
        title,
        image,
        price,
        description,
        avalibale:true,
    })
    }

  return (
    <div>
    {/* Open the modal using ID.showModal() method */}
    <button className="btn btn-primary" onClick={()=>window.my_modal_1.showModal()}>open modal</button>
    <dialog id="my_modal_1" className="modal">
    <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">Create a new product!</h3>
        <div className='py-4 flex flex-col gap-2'>
          <div className='w-full h-36 bg-gray-100 rounded-xl'> 
            <img className='h-full w-full object-contain' src={image}/>
          </div> 
          <input value={title} onInput={(e)=>setTitle((e.target as any).value)} placeholder='title' className='input input-bordered w-full'></input>
          <input value={image} onInput={(e)=>setImage((e.target as any).value)} placeholder='image' className='input input-bordered w-full'></input>
          <input value={price} onInput={(e)=>setPrice((e.target as any).value)} placeholder='price' type="number" className='input input-bordered w-full'></input>
          <textarea value={description} onInput={(e)=>setDescription((e.target as any).value)} placeholder='description' className='input h-28 input-bordered w-full'></textarea>
        </div>
        <div className="modal-action">
          <button className="btn">Close</button>
          <button className="btn btn-primary" onClick={addNewProduct}>Create</button>
        </div>
      </form>
      </dialog>
      </div> 
        
      )
}
        
export default NewProduct