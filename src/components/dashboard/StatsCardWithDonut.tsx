import React from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

interface StatsCardWithDonutProps {
  title: string;
  value: string | number;
  percentage: number;
  color: string;
}

const StatsCardWithDonut: React.FC<StatsCardWithDonutProps> = ({ title, value, percentage, color }) => {
  const data = [
    { name: 'Filled', value: percentage },
    { name: 'Remaining', value: 100 - percentage },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex justify-between items-center w-full">
      {/* Text Info */}
      <div className="space-y-1">
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-xl font-bold text-gray-900 dark:text-white">{value}</div>
        <div
          className="text-xs text-white px-2 py-1 rounded-full inline-block"
          style={{ backgroundColor: color }}
        >
          {percentage}%
        </div>
      </div>

      {/* Donut Chart */}
      <div className="w-20 h-20 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={34}
              outerRadius={40}
              dataKey="value"
              stroke="none"
              startAngle={90}
              endAngle={-270}
            >
              <Cell key="filled" fill={color} />
              <Cell key="remaining" fill="#e5e7eb" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium" style={{ color: color }}>
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default StatsCardWithDonut;
