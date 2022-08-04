import React from 'react'
export const PartSec = (props) => {
    if(props.class==='active'){
      return (
        <li className='active'>
            <i className={"uil uil-"+props.icon} /> <span className='text'>{props.content}</span>
        </li>
      )

    }
    else{
      
  return (
    <li>
        <i className={"uil uil-"+props.icon} /> <span className='text'>{props.content}</span>
    </li>
  )
    }
}
