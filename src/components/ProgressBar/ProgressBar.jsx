import React from 'react'
import './Progress.css'
import
{
    PieChart,
    Pie,
    Cell} from "recharts";
export const ProgressBar = () => {

    const data = [
        { id: "1", name: "L1", value: 62 },
        { id: "2", name: "L2", value: 38 }
      ];
    return(
    <PieChart width={90} height={90}>
  <text
    x={45}
    y={45}
    textAnchor="middle"
    dominantBaseline="middle"
    style={{fill: 'rgb(199, 203, 211)',fontSize:'20px'}}
  >
    62%
  </text>
  <Pie
    data={data}
    dataKey="value"
    innerRadius="80%"
    outerRadius="100%"
    fill="#fff"
    startAngle={90}
    endAngle={-270}
    paddingAngle={2}
    blendStroke
  >
    <Cell
      key="test"
      fill="#CCC"
    />
  </Pie>
</PieChart>
    )
}
