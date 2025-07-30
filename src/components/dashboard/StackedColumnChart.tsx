import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { ChartLine, Calendar   } from 'lucide-react';
const initialData = [
  { name: 'Mon', application: 40, shortlisted: 30, rejected: 20, onHold: 10 },
  { name: 'Tue', application: 35, shortlisted: 28, rejected: 25, onHold: 12 },
  { name: 'Wed', application: 50, shortlisted: 35, rejected: 30, onHold: 15 },
  { name: 'Thu', application: 45, shortlisted: 32, rejected: 18, onHold: 20 },
  { name: 'Fri', application: 60, shortlisted: 40, rejected: 35, onHold: 25 },
  { name: 'Sat', application: 55, shortlisted: 38, rejected: 33, onHold: 18 },
  { name: 'Sun', application: 70, shortlisted: 45, rejected: 40, onHold: 22 },
];

const colors = {
  application: '#3397E8', 
  shortlisted: '#FFE090', 
  rejected: '#FF6B6E',   
  onHold: '#BABDC5', 
};

type ChartKey = 'application' | 'shortlisted' | 'rejected' | 'onHold';

const StackedColumnChart = () => {
  const [activeKeys, setActiveKeys] = useState<Record<ChartKey, boolean>>({
    application: true,
    shortlisted: true,
    rejected: true,
    onHold: true,
  });

  const handleToggle = (key: ChartKey) => {
    setActiveKeys(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const chartItems: { key: ChartKey; label: string; color: string }[] = [
    { key: 'application', label: 'Applications', color: 'bg-blue-500' },
    { key: 'shortlisted', label: 'Shortlisted', color: 'bg-yellow-400' },
    { key: 'rejected', label: 'Rejected', color: 'bg-red-500' },
    { key: 'onHold', label: 'On Hold', color: 'bg-gray-500' },
  ];


  const [dateRange, setDateRange] = useState('7d');

  type ToggleKey = keyof typeof activeKeys;

    // const handleToggle = (key: ToggleKey) => {
    // setActiveKeys(prev => ({ ...prev, [key]: !prev[key] }));
    // };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mt-6">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-4">
       <div className="flex items-center gap-2 mb-2">
          <ChartLine className="w-5 h-5" style={{ color: '#D3ADA4' }} />
          <h2 className="text-base font-medium" style={{ color: '#111C43' }}>
            Statistics of active applications
          </h2>
        </div>
        <div className="relative inline-block">
          <Calendar className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-white pointer-events-none" />
          
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="bg-gray-100 dark:bg-gray-700 px-8 py-1 rounded-md focus:outline-none appearance-none"style={{ color: '#14151A' }}
          >
            <option value="7d">Last 7 Days</option>
            <option value="1m">Last Month</option>
            <option value="1y">Last Year</option>
          </select>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
         <BarChart data={initialData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {activeKeys.application && (
              <Bar
                dataKey="application"
                stackId="a"
                fill={colors.application}
                barSize={10} 
              />
            )}
            {activeKeys.shortlisted && (
              <Bar
                dataKey="shortlisted"
                stackId="a"
                fill={colors.shortlisted}
                barSize={10}
              />
            )}
            {activeKeys.rejected && (
              <Bar
                dataKey="rejected"
                stackId="a"
                fill={colors.rejected}
                barSize={10}
              />
            )}
            {activeKeys.onHold && (
              <Bar
                dataKey="onHold"
                stackId="a"
                fill={colors.onHold}
                barSize={10}
              />
            )}
         </BarChart>

        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap gap-4 mt-6">
      {chartItems.map(({ key, label, color }) => (
        <button
          key={key}
          onClick={() => handleToggle(key)}
          className={`flex items-center px-4 py-2 rounded-full border ${
            activeKeys[key] ? `border-[${color}]` : 'border-gray-300'
          }`}
        >
          <span className={`w-3 h-3 rounded-full mr-2 ${color}`} />
          <span className="text-sm font-medium">{label}</span>
        </button>
      ))}
    </div>
    </div>
  );
};

export default StackedColumnChart;
