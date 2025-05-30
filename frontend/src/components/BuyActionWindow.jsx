import React ,{useState} from 'react'
import { Button } from './ui/button'
import axios from 'axios';



const BuyActionWindow = ({onCancel , uid}) => {
    const [stockQty, setStockQty] = useState(1);
    const [stockPrice, setStockPrice] = useState(0);

    const handleBuy = () => {
        axios.post("http://localhost:3000/newOrder", {
            name: uid,
            qty: stockQty,
            price: stockPrice,
            mode: "BUY",
        });
    }

  return (
    <div className='bg-white p-6 rounded-lg shadow-lg w-96 h-[300px] flex flex-col justify-between'>
        <div>
          <h2 className='text-xl font-semibold mb-4 text-gray-800'>Buy Order</h2>
          
          <div className='flex gap-4 mb-6'>
              <fieldset className='flex-1'>
                  <legend className='text-sm font-medium text-gray-600 mb-1'>Qty</legend>
                  <input 
                    type='number' 
                    name='qty' 
                    className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='0'
                    onChange={(e)=>setStockQty(e.target.value)}
                    value={stockQty}
                  />
              </fieldset>
              <fieldset className='flex-1'>
                  <legend className='text-sm font-medium text-gray-600 mb-1'>Price</legend>
                  <input 
                    type='number' 
                    name='Price'
                    className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='0.00'
                    onChange={(e)=>setStockPrice(e.target.value)}
                    value={stockPrice}
                  />
              </fieldset>
          </div>
          
          <div className='bg-gray-50 p-3 rounded-md'>
            <div className='flex justify-between items-center'>
              <span className='text-sm text-gray-600'>Estimated Value:</span>
              <span className='text-sm font-medium'>₹ 0.00</span>
            </div>
          </div>
        </div>

        <div className='flex justify-end gap-3'>
            <Button variant="outline" className='border-gray-300 text-gray-700 hover:bg-gray-100' onClick={onCancel}>Cancel</Button>
            <Button className='bg-green-600 hover:bg-green-700 text-white' onClick={handleBuy}>Buy</Button>
        </div>
    </div>
  )
}

export default BuyActionWindow