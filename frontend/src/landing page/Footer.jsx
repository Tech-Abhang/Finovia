import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="w-full flex p-5 pb-17 bg-gray-100 border-t">
      <div className='w-1/4 p-5 flex flex-col items-center'>
        <img src="/logo.svg" className='w-1/2' alt="Logo"></img>
        <p className='text-gray-500'>©2025 All Rights Reserved</p>
      </div>
      <div className='w-1/4 flex flex-col'>
        <h2 className='text-xl pb-3'>Company</h2>
        <Link to="/about" className="py-1 text-gray-500">About</Link>
        <Link to="/product" className="py-1 text-gray-500">Products</Link>
        <Link to="/pricing" className="py-1 text-gray-500">Pricing</Link>
        <Link to="/referral" className="py-1 text-gray-500">Referel</Link>
        <Link to="/career" className="py-1 text-gray-500">Career</Link>
        <Link to="/tech" className="py-1 text-gray-500">Tech</Link>
        <Link to="/press" className="py-1 text-gray-500">Press media</Link>
      </div>
      <div className='w-1/4 flex flex-col'>
        <h2 className='text-xl  pb-3'>Support</h2>
        <Link to="/support" className="py-1 text-gray-500">Contact</Link>
        <Link to="/blog" className="py-1 text-gray-500">X-connect Blog</Link>
        <Link to="/charges" className="py-1 text-gray-500">List of charges</Link>
        <Link to="/resources" className="py-1 text-gray-500">Downloads and resources</Link>
      </div>
      <div className='w-1/4 flex flex-col'>
        <h2 className='text-xl pb-3'>Account</h2>
        <Link to="/signup" className="py-1 text-gray-500">Open an account</Link>
        <Link to="/transfer" className="py-1 text-gray-500">Fund Transfer</Link>
        <Link to="/challenge" className="py-1 text-gray-500">60 day challenge</Link>
      </div>
    </div>
  )
}

export default Footer