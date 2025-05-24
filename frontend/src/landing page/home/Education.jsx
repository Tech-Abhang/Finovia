import React from 'react'

const Education = () => {
  return (
    <div className="container mx-auto p-5 py-15">
      <div className="w-full flex">

        <div className="w-1/2">
          <img src='education.svg' className='w-4/5'></img>
        </div>

        <div className="w-1/2">
          <h2 className="text-2xl font-semibold pb-10">Unbeatable Pricing</h2>
          <p className="text-gray-500 py-2">
            We pioneer the concept of discount broking in India.
          </p>
          <a href="" className="text-blue-600 hover:underline">
            Explore our products
          </a>

          <p className="text-gray-500 py-2 pt-12">
            Trading Q&A and most active trading commutinity in India for all  market related queries.
          </p>
          <a href="" className="text-blue-600 hover:underline">
            Trading Q&A
          </a>

        </div>
      </div>
    </div>
  );
}

export default Education