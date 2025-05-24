import React from 'react'

const Pricing = () => {
  return (
    <div className='container mx-auto p-5 py-5'>
      <div className="w-full flex">
        <div className="w-1/3">
          <h2 className="text-2xl font-semibold pb-10">Unbeatable Pricing</h2>
          <p className="text-gray-500 py-2">
            We pioneer the concept of discount broking in India.
          </p>
          <a href="" className="text-blue-600 hover:underline">
              Explore our products
          </a>
        </div>
        <div className="w-1/6"></div>
        <div className="w-1/2 flex">
          <div className='w-1/2 border text-center p-5'>
            <h2 className="text-2xl font-semibold py-3 ">₹0</h2>
            <p>Free equality delivary and free mutual funds</p>
          </div>
          <div className='w-1/2 border text-center p-5'>
            <h2 className="text-2xl font-semibold py-3">₹20</h2>
            <p>Indraday and F&O</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Pricing