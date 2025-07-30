import { Calendar, ChartLine } from 'lucide-react';
import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { name: '8 AM', value: 200 },
  { name: '10 AM', value: 300 },
  { name: '12 AM', value: 250 },
  { name: '2 PM', value: 300 },
  { name: '4 pm', value: 350 },
  { name: '6 PM', value: 300 },
  { name: '8 pm', value: 250 },
];

const Chart: React.FC = () => {

    const [dateRange, setDateRange] = useState('1d');

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md w-full h-72 mt-8">
       <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 mb-2">
             <ChartLine className="w-5 h-5" style={{ color: '#D3ADA4' }} />
             <h2 className="text-base font-medium" style={{ color: '#111C43' }}>
               Application received time
             </h2>
           </div>
           <div className="relative inline-block">
             <Calendar className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-white pointer-events-none" />
             
             <select
               value={dateRange}
               onChange={(e) => setDateRange(e.target.value)}
               className="bg-gray-100 dark:bg-gray-700 pl-8 py-1 rounded-md focus:outline-none appearance-none"style={{ color: '#14151A' }}
             >
               <option value="1d">Today</option>
               <option value="1w">Last Week</option>
             </select>
           </div>
         </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#FE9196" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
