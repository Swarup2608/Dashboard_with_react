import React from 'react'

import { PieChart, Pie, Cell, Tooltip,ResponsiveContainer } from 'recharts';
export const PieCharta = ({aspect}) => {
    const COLORS = ['#FFBB28','#d66140', '#30165c', '#8663c2'];

    const pieData = [
        {
            "name": "Mobile",
            "value": 18.85
        },
        {
            "name": "Laptop",
            "value": 17.91
        },
        {
            "name": "Electronics",
            "value": 26.85
        },
        {
            "name": "Others",
            "value": 36.39
        }
    ];

    const CustomTooltip = ({ active, payload, label }) => {
      if (active) {
          return (
              <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                  <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
              </div>
          );
      }
    
      return null;
    };
    
        return (
          <ResponsiveContainer width="100%" aspect={aspect} top={30}>
            <PieChart margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 0,
        }}>
                <Pie data={pieData} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                    {
                        pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                <Tooltip content={<CustomTooltip />} /> 
            </PieChart>
            </ResponsiveContainer>
        )

  
}





