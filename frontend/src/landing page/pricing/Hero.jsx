import React from 'react'

const Hero = () => {
  return (
    <div className='container mx-auto p-5 py-25 '>
      <div className="w-full">
        <div>
          <h1 className='text-3xl font-semibold text-center'>Pricing</h1>
          <p className='text-center pb-15'>Free equality and flat 20 indraday and F&O trades</p>
          <hr/>
        </div>
      </div>

      <div className="w-full flex pt-15">
        <div className="w-1/3">
          <img src='pricingEquity.svg'></img>
          <h1 className='text-3xl font-semibold text-center'>Free Equality Delivery</h1>
          <p className='text-center pt-5'>All equality delivery investments are absolutely free - zero brokerage</p>
        </div>
        <div className="w-1/3">
          <img src='intradayTrades.svg'></img>
          <h1 className='text-3xl font-semibold text-center'>Intraday and F&O trades</h1>
          <p className='text-center pt-5'>All equality delivery investments are absolutely free - zero brokerage</p>
        
        </div>
        <div className="w-1/3">
          <img src='pricingEquity.svg'></img>
          <h1 className='text-3xl font-semibold text-center'>Free direct MF</h1>
          <p className='text-center pt-5'>All equality delivery investments are absolutely free - zero brokerage</p>
        </div>
      </div>
    </div>
  )
}

export default Hero