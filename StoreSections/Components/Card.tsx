import React from 'react'
type props = {
  img:string
  price:number
  description:string
  title:string
  id:any
}
const Card = ({img,price,description,title,id}:props) => {
  return (
          <div className="card  card-compact w-full bg-base-100 shadow-xl mx-auto">
            <figure>
              <img
                src={img}
                alt="Shoes"
                className='h-64 w-80 object-contain'
              />
            </figure>
            <div className="flex flex-col p-4 text-gray-800">
              <div className="flex justify-between">
                <p className="text-lg font-semibold">{title}</p>
                <p className="card-title">{price} Dh</p>
              </div>
              <p className='text-gray-600 text-sm'>{description.slice(0,30)}{description.length>30 && " ..."}</p>
              <div className='pt-2'>
                <button className="btn btn-sm float-right hover:btn-primary">Add to cart </button>
              </div>
            </div>
          </div>
  )
}

export default Card