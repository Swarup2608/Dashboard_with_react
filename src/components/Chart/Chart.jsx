import React from "react";
import "./Chart.css";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Card({ aspect }) {
  const data = [
    {
      name: 1,
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 2,
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 3,
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 4,
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 5,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 6,
      uv: 4890,
      pv: 2800,
      amt: 2101,
    },
  ];
  return (
    <div className="chart">
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
            <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#272299" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#272299" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#502087" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#502087" stopOpacity={0}/>
    </linearGradient>
  </defs>
          {/* <CartesianGrid strokeDasharray="0 0" /> */}
          <XAxis dataKey="name" axisLine={false} tickLine={false} padding={{left: 20, right: 20 }}/>
          <YAxis axisLine={false} tickLine={false} padding={{ top: 20, bottom: 20 }}/>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#272299"
            fillOpacity={0.5}
            fill="url(#colorUv)"
            strokeWidth={3}
            gap
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#502087"
            fill="url(#colorPv)"
            fillOpacity={0.5}
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
