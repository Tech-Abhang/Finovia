import React from 'react'
import { watchList } from '../data/Data'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/ToolTip"

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

        {/* Search Box */}
        <div className="px-3 py-2 border-b">
            <div className="relative">
                <input 
                    className="w-full p-2 pl-8 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                    placeholder='Search for stocks, indices, mutual funds...'
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-2 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </div>

        {/* Watchlist Header */}
        <div className="px-4 py-3 border-b bg-gray-50">
            <h3 className="font-semibold text-gray-800 flex items-center">
                <span>My Watchlist</span>
                <span className="ml-2 bg-gray-200 text-xs px-2 py-0.5 rounded-full">{watchList.length}</span>
            </h3>
        </div>

        {/* Watchlist Items */}
        <div className="flex-1 overflow-y-auto">
            {watchList.map((item, index) => (
                <div key={index} className='w-full flex items-center justify-between px-4 py-3 border-b hover:bg-gray-50 transition-colors duration-150 relative'>
                    <WatchListItem stock={item} />
                </div>
            ))}
        </div>

    </div>
  )
}

export default WatchList

const WatchListItem = ({ stock }) => {
    const [WatchlistActions , setWatchlistActions] = React.useState(false);
    const mouseEntry = () => {
        setWatchlistActions(true);
    }
    const mouseLeave = () => {
        setWatchlistActions(false);
    }

    const WatchListActionTooltip = ({ uid }) => { 
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex flex-row items-center">
                  <button className='bg-blue-500 text-white p-2 mr-1 h-[36px] w-[56px] rounded-2xl'>Buy</button>
                  <button className='bg-red-500 text-white p-2 ml-1 h-[36px] w-[56px] rounded-2xl'>Sell</button>
                  <button className='bg-white p-2 ml-1 h-[36px] w-[56px] border rounded-2xl'>...</button>
                </div>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        );
    };

    return (
        <div onMouseEnter={mouseEntry} onMouseLeave={mouseLeave} className='flex justify-between w-full items-center'>
            <div className="flex items-center">
                <div className="pl-3">
                    <p className="font-medium text-gray-800">{stock.name}</p>
                </div> 
            </div>
            

            <div className='flex items-center justify-between '>
                {WatchlistActions && <WatchListActionTooltip uid={stock.name} />}
                <div className='pl-3 flex flex-col items-end'>
                    <span className="font-light text-gray-900">₹{stock.price}</span>
                    <span className={stock.isDown === "true" ? "text-red-500 text-sm" : "text-green-500 text-sm"}>
                        {stock.isDown === "true" ? "▼" : "▲"} {stock.percent}%
                    </span>
                </div>

            </div>

        </div>

    );
}