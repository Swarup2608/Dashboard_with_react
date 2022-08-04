import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const BarGraph = ({ aspect }) => {
  // Sample data
  const data = [
    { name: "A", x: 12, y: 23, z: 122 },
    { name: "B", x: 22, y: 3, z: 73 },
    { name: "C", x: 13, y: 15, z: 32 },
    { name: "D", x: 44, y: 35, z: 23 },
    { name: "E", x: 35, y: 45, z: 20 },
    { name: "F", x: 62, y: 25, z: 29 },
    { name: "G", x: 37, y: 17, z: 61 },
    { name: "H", x: 28, y: 32, z: 45 },
    { name: "I", x: 19, y: 43, z: 93 },
  ];

  return (
    <ResponsiveContainer width="100%" aspect={aspect} top={30}>
      <BarChart
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        data={data}
      >
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis  tickLine={false} axisLine={false} />
        <Tooltip />
        <Bar dataKey="x" stackId="a" fill="rgba(179, 204, 204, 0.85)" />
        <Bar dataKey="y" stackId="a" fill="rgba(179, 204, 204, 0.85)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
