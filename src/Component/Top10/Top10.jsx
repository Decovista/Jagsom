import React from 'react'
import './Top10.css'
import ItemGellery from '../ItemGellery/ItemGellery'

function Top10() {
  return (
    <div className="top-10-wrapper bg-blue-100">
       <div className='Top10-section '>
      <h1>Top Solar Services</h1>
      <div className="bar-underline"></div>
    </div>
    <ItemGellery/>
    </div>
  )
}

export default Top10
