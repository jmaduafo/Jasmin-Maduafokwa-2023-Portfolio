import React from 'react'
import './breakpoint.scss'

function Breakpoint({name, link}) {
  return (
    <div className='break' id={name}>
      <div className='breakname'>
        <p>{name}</p>
      </div>
      <div className='breakline'></div>
    </div>
  )
}

export default Breakpoint