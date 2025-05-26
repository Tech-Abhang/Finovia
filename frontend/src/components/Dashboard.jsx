import React from 'react'
import WatchList from './WatchList'
import Menu from './Menu'

const Dashboard = () => {
  return (
    <div className="flex">
        <div className="w-1/3">
            <WatchList/>
        </div>
        <div className="w-2/3">
            <Menu/>
        </div>
    </div>

  )
}

export default Dashboard