import React from 'react'

const NotFound = () => {
  return (
    <div className='container mx-auto p-5 py-5'>
        <div className="w-full text-center">
            <h1 className="text-4xl font-bold text-gray-700">404 - Page Not Found</h1>
        </div>
        <div className="text-center mt-5">
            <p className="text-gray-500">The page you are looking for does not exist.</p>
        </div>
    </div>
  )
}

export default NotFound