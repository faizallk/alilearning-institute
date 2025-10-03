import React, { useEffect } from 'react'

function SmallCard({data}) {

  return (
     <div id='smcard' className='w-[20vw] h-[15vw] bg-white shadow rounded-lg text-justify flex flex-col justify-center items-center px-5 py-5 hover:shadow-lg duration-200 hover:-translate-y-0.5 '>
          <i className={`${data.icon} text-6xl text-blue-600`}></i>
          <h1 className='text-lg font-semibold mt-2 text-center'>{data.title}</h1>
          <p className='text-xs tracking-tight text-center mt-2 text-zinc-600'>{data.description}</p>
          </div> 
  )
}

export default SmallCard