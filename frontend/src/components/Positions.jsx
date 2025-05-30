import React, {useState , useEffect} from 'react'
import axios from 'axios';

const Positions = () => {
  const [positions, setPositions] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/allPositions').then((res)=>{
      setPositions(res.data);
    })
  })

  return (
    <div className='h-full'>
      <div className="p-6 bg-card rounded-lg shadow-sm h-[700px]">
        <h3 className="text-2xl font-bold mb-6 text-primary">Positions ({positions.length})</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="text-left p-3 text-sm font-medium text-muted-foreground">Product</th>
                <th className="text-left p-3 text-sm font-medium text-muted-foreground">Instrument</th>
                <th className="text-right p-3 text-sm font-medium text-muted-foreground">Qty.</th>
                <th className="text-right p-3 text-sm font-medium text-muted-foreground">Avg. cost</th>
                <th className="text-right p-3 text-sm font-medium text-muted-foreground">Price</th>
                <th className="text-right p-3 text-sm font-medium text-muted-foreground">Net chg.</th>
                <th className="text-right p-3 text-sm font-medium text-muted-foreground">Day chg.</th>
              </tr>
            </thead>
            <tbody>
              {positions.map((position, index) => {
                const isLoss = position.isLoss;
                const profClass = !isLoss ? 'text-chart-1' : 'text-destructive';
                const dayClass = !isLoss ? 'text-chart-1' : 'text-destructive';

                return (
                  <tr 
                    key={index} 
                    className="border-b border-border hover:bg-secondary/20 transition-colors"
                  >
                    <td className="p-3 font-medium">{position.product}</td>
                    <td className="p-3 font-medium">{position.name}</td>
                    <td className="p-3 text-right">{position.qty}</td>
                    <td className="p-3 text-right">{position.avg.toFixed(2)}</td>
                    <td className="p-3 text-right">{position.price.toFixed(2)}</td>
                    <td className={`p-3 text-right ${profClass} font-medium`}>{position.net}</td>
                    <td className={`p-3 text-right ${dayClass} font-medium`}>{position.day}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-secondary rounded-md p-4 text-center">
            <h5 className="text-xl font-bold">
              {positions.reduce((total, position) => total + (position.qty * position.avg), 0).toFixed(2)}
            </h5>
            <p className="text-sm text-muted-foreground mt-1">Total investment</p>
          </div>
          <div className="bg-secondary rounded-md p-4 text-center">
            <h5 className="text-xl font-bold">
              {positions.reduce((total, position) => total + (position.qty * position.price), 0).toFixed(2)}
            </h5>
            <p className="text-sm text-muted-foreground mt-1">Current value</p>
          </div>
          <div className="bg-secondary rounded-md p-4 text-center">
            {(() => {
              const totalInvestment = positions.reduce((total, position) => total + (position.qty * position.avg), 0);
              const currentValue = positions.reduce((total, position) => total + (position.qty * position.price), 0);
              const pnl = currentValue - totalInvestment;
              const pnlPercentage = totalInvestment !== 0 ? ((pnl / totalInvestment) * 100).toFixed(2) : '0.00';
              const profitClass = pnl >= 0 ? 'text-chart-1' : 'text-destructive';
              
              return (
                <h5 className={`text-xl font-bold ${profitClass}`}>
                  {pnl.toFixed(2)} ({pnlPercentage}%)
                </h5>
              );
            })()}
            <p className="text-sm text-muted-foreground mt-1">P&L</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Positions;