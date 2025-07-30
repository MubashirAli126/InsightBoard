import React from 'react';
import StatsCardWithDonut from '../components/dashboard/StatsCardWithDonut';
import Chart from '../components/dashboard/Chart';
import StackedColumnChart from '../components/dashboard/StackedColumnChart';
import { Search } from 'lucide-react'

const Dashboard: React.FC = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-medium text-gray-900 dark:text-white">Dashboard</h1>
       <div className="relative w-80">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-full pl-10 pr-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-white shadow-md focus:outline-none focus:ring focus:ring-indigo-400 w-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300 w-4 h-4" />
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <StatsCardWithDonut title="Total Application" value="5345" percentage={74} color="#FE9196" />
        <StatsCardWithDonut title="Shortlisted candidates" value="5345" percentage={60} color="#3699E9" />
        <StatsCardWithDonut title="Rejected candidates" value="5345" percentage={34} color="#FF686B" />
      </div>
      <div>
        <StackedColumnChart />
      </div>
      {/* Chart */}
      <Chart />
    </div>
  );
}; 

export default Dashboard;
