import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md w-full">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
      {change && (
        <div className="text-sm text-green-500 mt-1">
          {change} ↑
        </div>
      )}
    </div>
  );
};

export default StatsCard;
