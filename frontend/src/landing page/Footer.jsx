import React from 'react'

const Footer = () => {
  return (
    <div className="w-full flex p-5 pb-17">
      <div className='w-1/4 p-5 flex flex-col items-center'>
        <img src="/logo.svg" className='w-1/2' alt="Logo"></img>
        <p className='text-gray-500'>©2025 All Rights Reserved</p>
      </div>
      <div className='w-1/4 flex flex-col'>
        <h2 className='text-xl pb-3'>Company</h2>
        <a href="" className="py-1 text-gray-500">About</a>
        <a href="" className="py-1 text-gray-500">Products</a>
        <a href="" className="py-1 text-gray-500">Pricing</a>
        <a href="" className="py-1 text-gray-500">Referel</a>
        <a href="" className="py-1 text-gray-500">Career</a>
        <a href="" className="py-1 text-gray-500">Tech</a>
        <a href="" className="py-1 text-gray-500">Press media</a>
      </div>
      <div className='w-1/4 flex flex-col'>
        <h2 className='text-xl  pb-3'>Support</h2>
        <a href="" className="py-1 text-gray-500">Contact</a>
        <a href="" className="py-1 text-gray-500">X-connect Blog</a>
        <a href="" className="py-1 text-gray-500">List of charges</a>
        <a href="" className="py-1 text-gray-500">Downloads and resources</a>
      </div>
      <div className='w-1/4 flex flex-col'>
        <h2 className='text-xl pb-3'>Account</h2>
        <a href="" className="py-1 text-gray-500">Open an account</a>
        <a href="" className="py-1 text-gray-500">Fund Transfer</a>
        <a href="" className="py-1 text-gray-500">60 day challenge</a>
      </div>
    </div>
  )
}

export default Footer