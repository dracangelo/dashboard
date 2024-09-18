// src/components/charts/ScatterPlot.js
import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function ScatterPlot({ data }) {
  return (
    <ScatterChart
      width={600}
      height={300}
      margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
    >
      <CartesianGrid />
      <XAxis type="number" dataKey="x" name="X-axis" />
      <YAxis type="number" dataKey="y" name="Y-axis" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="Data" data={data} fill="#8884d8" />
    </ScatterChart>
  );
}

export default ScatterPlot;
