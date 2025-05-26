import React from 'react'

const Hero = () => {
  return (
    <div className='bg-blue-500'>
      <div className='container mx-auto py-5 px-15 pb-25'>
      <h2 className='text-xl font-semibold text-white pb-20'>Suport Portal</h2>
      <div className="w-full flex "> 
        <div className="w-1/2 pr-10">
          <h1 className='text-2xl font-semibold text-white'>Search of an answer or browser will help topics to create a ticket</h1>
          <div className='bg-white w-full h-20 mt-5 rounded-2xl flex justify-center items-center px-5 '>
            <p className='text-center text-gray-500'>Eg: How do i actiavte F&O , why is my oder getting rejected</p>
          </div>
        </div>
        .
        <div className="w-1/2 pl-10">
          <h1 className='text-2xl font-semibold text-white'>Featured</h1>
          <p className=' text-white pt-10'>Eg: How do i actiavte F&O , why is my oder getting rejected</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero