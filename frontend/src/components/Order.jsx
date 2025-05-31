import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Order = () => {
  const [orders, setOrders] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3000/allOrders').then((res) => {
      setOrders(res.data)
    })
  }, [])

  return (
    <div className='h-full'>
      <div className="p-6 bg-card rounded-lg shadow-sm h-[700px]">
        <h3 className="text-2xl font-bold mb-6 text-primary">Orders ({orders.length})</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="text-left p-3 text-sm font-medium text-muted-foreground">Instrument</th>
                <th className="text-right p-3 text-sm font-medium text-muted-foreground">Type</th>
                <th className="text-right p-3 text-sm font-medium text-muted-foreground">Qty.</th>
                <th className="text-right p-3 text-sm font-medium text-muted-foreground">Price</th>
                <th className="text-right p-3 text-sm font-medium text-muted-foreground">Value</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                const orderType = order.mode;
                const orderClass = orderType === "BUY" ? 'text-chart-1' : 'text-destructive';
                const orderValue = order.qty * order.price;
                
                return (
                  <tr 
                    key={order._id} 
                    className="border-b border-border hover:bg-secondary/20 transition-colors"
                  >
                    <td className="p-3 font-medium">{order.name}</td>
                    <td className={`p-3 text-right ${orderClass} font-medium`}>{order.mode}</td>
                    <td className="p-3 text-right">{order.qty}</td>
                    <td className="p-3 text-right">{order.price.toFixed(2)}</td>
                    <td className="p-3 text-right">{orderValue.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Order