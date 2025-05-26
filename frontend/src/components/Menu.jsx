import React, { useState } from 'react';  
import { Link, Route, Routes } from 'react-router-dom'
import Order from './Order'
import Holding from './Holding'
import Positions from './Positions'
import Funds from './Funds'


const Menu = () => {
    const [selected, setSelected] = useState(0);

    const handleMenuClick = (index) => {
        setSelected(index);
    }

    const [profileDropdown, setProfileDropdown] = useState(false);

    const handleprofileDropdown = () => {
        setProfileDropdown(!profileDropdown);
    }

  return (
    <div className='h-screen'>
        <div className='w-full h-1/8 flex justify-evenly items-center border-b bg-gray-700 text-white'>
            <Link to="/dashboard" onClick={() => handleMenuClick(0)} className='text-white'>Dashboard</Link>
            <Link to="/dashboard/orders" onClick={() => handleMenuClick(1)} className='text-white'>Orders</Link>
            <Link to="/dashboard/holdings" onClick={() => handleMenuClick(2)} className='text-white'>Holdings</Link>
            <Link to="/dashboard/positions" onClick={() => handleMenuClick(3)} className='text-white'>Positions</Link>
            <Link to="/dashboard/funds" onClick={() => handleMenuClick(4)} className='text-white'>Funds</Link>

            <div className='flex items-center'>
                <div className='bg-amber-300 h-10 w-10 rounded-full mr-1'></div>
                <p>USERID</p>
            </div>   
        </div>
        
        <div className='w-full py-3 h-7/8 text-center bg-gray-100'>
            <Routes>
                <Route path="/" element={<div className='p-4'>Dashboard Content</div>} />
                <Route path="/orders" element={<Order/>} />
                <Route path="/holdings" element={<Holding/>} />
                <Route path="/positions" element={<Positions/>} />
                <Route path="/funds" element={<Funds/>} />
            </Routes>
        </div>
    </div>
  ) 
}

export default Menu