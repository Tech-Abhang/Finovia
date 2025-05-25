import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='container mx-auto p-5 py-25 flex flex-col justify-center items-center'>
      <h1 className='font-semibold text-3xl text-center'>Technology</h1>
      <p className='text-center text-xl pt-5'>Sleek, modern , innovative trading platform</p>
      <div className="flex justify-center items-center pt-5">
        <p className='px-1'>Checkout our </p><Link to="/investments" className="text-blue-500">investment offerings</Link>
      </div>
    </div>
  )
}

export default Hero