import React, { useState, useEffect } from 'react';
import Analytics from './Analytics';
import DataTable from './DataTable';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching
    setTimeout(() => {
      setData({
        userGrowth: [
          { month: 'Jan', users: 100 },
          { month: 'Feb', users: 150 },
          { month: 'Mar', users: 200 },
          { month: 'Apr', users: 180 },
          { month: 'May', users: 220 },
        ],
        revenueDistribution: [
          { category: 'Product A', value: 30 },
          { category: 'Product B', value: 40 },
          { category: 'Product C', value: 30 },
        ],
        monthlySales: [
          { month: 'Jan', sales: 1000 },
          { month: 'Feb', sales: 1500 },
          { month: 'Mar', sales: 1200 },
          { month: 'Apr', sales: 1800 },
          { month: 'May', sales: 2000 },
        ],
        tableData: [
          { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
          { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Active' },
        ],
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Analytics data={data} />
      <DataTable data={data.tableData} />
    </div>
  );
};

export default Dashboard;