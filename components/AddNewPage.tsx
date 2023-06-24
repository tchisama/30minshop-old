import { usePages } from '@/store/usePages';
import React, { useEffect, useState } from 'react'

const NewPage = () => {
    const [page,setPage]=useState("");
    const [url,setUrl]=useState("");
    const {setPages,pages,setCurrentPage}=usePages()

    const addPage=()=>{
        setPages([...pages,
        {
            name:page,
            url,
            data:[]
        }
        ])
        setCurrentPage(pages.length)
    }

    useEffect(() => {
        setUrl(page)
    }, [page])
    

  return (
    <div>
    {/* Open the modal using ID.showModal() method */}
    <button className="btn hover:btn-primary btn-sm join-item" onClick={()=>window.my_modal_2.showModal()}>new</button>
    <dialog id="my_modal_2" className="modal">
    <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">Create a new page!</h3>
        <div className='py-4 flex flex-col gap-2'>
          page name
          <input value={page} onInput={(e)=>setPage((e.target as any).value)} placeholder='page Name' className='input input-bordered w-full'></input>
          page URL
          <input value={url} onInput={(e)=>setUrl((e.target as any).value)} placeholder='page Url' className='input input-bordered w-full'></input>
        </div>
        <div className="modal-action">
          <button className="btn">Close</button>
          <button className="btn btn-primary" onClick={addPage}>Create</button>
        </div>
      </form>
      </dialog>
      </div> 
        
      )
}
        
export default NewPage