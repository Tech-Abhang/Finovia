import React from 'react'

export const Awards = () => {
  return (
    <div className="container mx-auto p-5 pb-7">
      <div className="w-full flex">
        <div className="w-1/2 ">
          <img src="largestBroker.svg" />
        </div>
        <div className="w-1/2 pr-7">
          <h1 className="text-4xl font-bold py-3">Invest in everything</h1>
          <p className='pb-7'>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <div className="w-full flex py-5">
            <div className="w-1/2">
              <ul className='list-disc pl-5'>
                <li>
                  1
                </li>
                <li>
                  2
                </li>
                <li>
                  3
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <ul className='list-disc pl-5'>
                <li>
                  <p>4</p>
                </li>
                <li>
                  <p>5</p>
                </li>
                <li>
                  <p>6</p>
                </li>
              </ul>
            </div>
          </div>

          <img src='pressLogos.png' className=''/>
        </div>
      </div>
    </div>
  );
}
