import React from 'react';
import { BarChart, LineChart, PieChart } from './Charts';

const Analytics = ({ data }) => {
  return (
    <div className="analytics">
      <h2>Analytics Overview</h2>
      <div className="charts-grid">
        <div className="chart-container">
          <h3>User Growth</h3>
          <LineChart data={data.userGrowth} />
        </div>
        <div className="chart-container">
          <h3>Revenue Distribution</h3>
          <PieChart data={data.revenueDistribution} />
        </div>
        <div className="chart-container">
          <h3>Monthly Sales</h3>
          <BarChart data={data.monthlySales} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;