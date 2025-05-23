import React from 'react'

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full text-center py-20">
        <img className="mb-7" src='homeHero.png' />
        <h1 className="text-4xl font-bold mt-6 mb-2">Invest in everything</h1>
        <p className="text-lg mt-4 text-center text-gray-600">Invest in stocks, ETFs, options, and crypto—all commission-free, right from your phone or desktop.</p>
        <button className='bg-blue-500 text-white px-6 py-3 mt-4 rounded-md font-medium hover:bg-blue-600 transition-colors'>Signin Now</button>
      </div>
    </div>
  )
}

export default Hero