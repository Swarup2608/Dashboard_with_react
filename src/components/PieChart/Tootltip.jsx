import React from 'react'

export const CustomTootltip = ({ active, payload, label }) => {
    if (active) {        
           return (
           <div
              className="custom-tooltip"
              style={{backgroundColor: "#ffff",padding: "5px",border: "1px solid #cccc"}}>
              <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
           </div>
        );
     }
}
