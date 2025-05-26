import React from 'react'   
import { Link } from 'react-router-dom'


const Menu = () => {
  return (
    <div className='w-full h-26 flex justify-center items-center border-b bg-gray-700 text-white'>
        <Link>Dashboard</Link> 
        <Link>Orders</Link>
        <Link>Holdings</Link>
        <Link>Positions</Link>
        <Link>Funds</Link>
    </div>
  )
}

export default Menu