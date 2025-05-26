import React from 'react'

const WatchList = () => {
  return (
    <div className="h-screen bg-gray-100 border-r">
        <div className='w-full h-26 flex items-center justify-evenly border-b'>
            <div className='flex p-4'>
                <p className='pr-2 text-sm text-gray-500'>NIFTY50</p>
                <p className='text-sm text-red-500'>100.2</p>
            </div>
            <div className='flex p-4'>
                <p className='pr-2 text-sm text-gray-500'>SENSEX</p>
                <p className='text-sm text-red-500'>100.2</p>
            </div>
        </div>

        <input 
            className="w-full p-2 border-b"
            placeholder='Search for stocks, indices, mutual funds...'
        />
    </div>
  )
}

export default WatchList