import React from 'react'

const Stats = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="w-full flex">
        <div className="w-1/2 pl-5">
          <h1 className="text-4xl font-bold py-5">Trust with confidence</h1>
          <h2 className="text-2xl font-semibold py-3">Customer first always</h2>
          <p className="text-gray-500">
            There is why 1.3+Crore people trust zerodha
          </p>

          <h2 className="text-2xl font-semibold py-3">No Spam</h2>
          <p className="text-gray-500">
            No span or useless notifications only high quality app{" "}
          </p>

          <h2 className="text-2xl font-semibold py-3">The Zerodha Universe</h2>
          <p className="text-gray-500">
            Not just an app its a whole eco-system
          </p>

          <h2 className="text-2xl font-semibold py-5 flex-wrap">
            Do Better with money
          </h2>
          <p className="text-gray-500">
            With initialtives we dont just facilitate transactions but also do
            better with money i dont know i just want ot check if wrap is
            working or not
          </p>
        </div>
        <div className="w-1/2">
          <img src="ecosystem.png" className="w-4/5 relative left-[75px]" />
          <div className="flex justify-evenly p-4">
            <a href="" className="text-blue-600 hover:underline">
              Explore our products
            </a>

            <a href="" className="text-blue-600 hover:underline">
              Try Kite demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats