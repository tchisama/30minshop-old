import React from 'react'

const Card = () => {
  return (
          <div className="card card-compact w-80 bg-base-100 shadow-xl mx-auto">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="flex flex-col p-4 text-gray-800">
              <div className="flex justify-between">
                <p className="text-lg font-semibold">Shoes!</p>
                <p className="card-title">35$</p>
              </div>
              <div>
                <button className="btn btn-sm float-right hover:btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
  )
}

export default Card