import React from 'react'

const Window = () => {
  return (
        <div className='w-full mt-20 h-[300vh] overflow-hidden rounded-2xl border-white bg-[#fffc] border-[3px] shadow-2xl'>
          <div className='h-12 flex bg-[#eee] justify-between p-4 items-center w-full'>
              <div className='p-1 rounded-lg bg-white px-8 '>
                https://www.yourName.30minshop.com/
              </div>
              <div className='flex gap-2'>
                <div className='w-4 h-4 rounded-full bg-red-300'></div>
                <div className='w-4 h-4 rounded-full bg-blue-300'></div>
                <div className='w-4 h-4 rounded-full bg-orange-300'></div>
              </div>
          </div>
        </div>
  )
}

export default Window