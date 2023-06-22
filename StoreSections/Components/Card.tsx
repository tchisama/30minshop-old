import React from 'react'
type props = {
  img:string
}
const Card = ({img}:props) => {
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
                <p className="text-lg font-semibold">Shoes!</p>
                <p className="card-title">35$</p>
              </div>
              <p className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet conse ctetur ... </p>
              <div className='pt-2'>
                <button className="btn btn-sm float-right hover:btn-primary">Add to cart </button>
              </div>
            </div>
          </div>
  )
}

export default Card