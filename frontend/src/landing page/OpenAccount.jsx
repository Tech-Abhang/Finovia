import React from 'react'

const OpenAccount = () => {
  return (
    <div className="container mx-auto p-5 py-5 pb-[100px]">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-semibold py-3">Open a zerodha account</h1>
        <p className='pb-3'>
          Modern platforms and app , no investment and flat 20 on Intraday and
          F&O
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Open Account
        </button>
      </div>
    </div>
  );
}

export default OpenAccount
