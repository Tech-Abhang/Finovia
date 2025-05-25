import React from 'react'

const RightSection = ({imageUrl , productName , productDescription ,link}) => {
  return (
    <div className='container mx-auto p-5 pb-25'>
      <div className="w-full flex">
        <div className="w-1/2 pl-5 pt-10">
          <h1 className='text-2xl font-semibold pb-2'>{productName}</h1>
          <p>{productDescription}</p>
          <div className="flex flex-col">
            <a href={link} className='text-blue-500 hover:underline py-1'>Learn more</a>
          </div>
        </div>

        <div className="w-1/2 pr-5">
          <img src={imageUrl} alt={productName} className="w-full h-auto" />
        </div>
      </div>
    </div>
  )
}

export default RightSection