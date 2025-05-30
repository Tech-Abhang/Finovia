import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Holding = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/allHoldings').then((res) => {
      setHoldings(res.data);
    });
  }, []);

  return (
    <div className='h-full'>
    <div className="p-6 bg-card rounded-lg shadow-sm h-[700px] ">
      <h3 className="text-2xl font-bold mb-6 text-primary">Holdings ({holdings.length})</h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="text-left p-3 text-sm font-medium text-muted-foreground">Instrument</th>
              <th className="text-right p-3 text-sm font-medium text-muted-foreground">Qty.</th>
              <th className="text-right p-3 text-sm font-medium text-muted-foreground">Avg. cost</th>
              <th className="text-right p-3 text-sm font-medium text-muted-foreground">LTP</th>
              <th className="text-right p-3 text-sm font-medium text-muted-foreground">Cur. val</th>
              <th className="text-right p-3 text-sm font-medium text-muted-foreground">P&L</th>
              <th className="text-right p-3 text-sm font-medium text-muted-foreground">Net chg.</th>
              <th className="text-right p-3 text-sm font-medium text-muted-foreground">Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? 'text-chart-1' : 'text-destructive';
              const dayClass = stock.isLoss ? 'text-destructive' : 'text-chart-1';

              return (
                <tr 
                  key={index} 
                  className="border-b border-border hover:bg-secondary/20 transition-colors"
                >
                  <td className="p-3 font-medium">{stock.name}</td>
                  <td className="p-3 text-right">{stock.qty}</td>
                  <td className="p-3 text-right">{stock.avg.toFixed(2)}</td>
                  <td className="p-3 text-right">{stock.price.toFixed(2)}</td>
                  <td className="p-3 text-right">{curValue.toFixed(2)}</td>
                  <td className={`p-3 text-right ${profClass} font-medium`}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`p-3 text-right ${profClass} font-medium`}>{stock.net}</td>
                  <td className={`p-3 text-right ${dayClass} font-medium`}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-secondary rounded-md p-4 text-center">
          <h5 className="text-xl font-bold">
            29,875.<span className="text-muted-foreground">55</span>
          </h5>
          <p className="text-sm text-muted-foreground mt-1">Total investment</p>
        </div>
        <div className="bg-secondary rounded-md p-4 text-center">
          <h5 className="text-xl font-bold">
            31,428.<span className="text-muted-foreground">95</span>
          </h5>
          <p className="text-sm text-muted-foreground mt-1">Current value</p>
        </div>
        <div className="bg-secondary rounded-md p-4 text-center">
          <h5 className="text-xl font-bold text-chart-1">1,553.40 (+5.20%)</h5>
          <p className="text-sm text-muted-foreground mt-1">P&L</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Holding;