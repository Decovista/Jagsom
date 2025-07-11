import React from 'react'
import './GetQoute.css'
import GetQoutePopup from '../GetQoutePopup/GetQoutePopup'
import { useMyContext } from '../../Context/MyContext'

function GetQoute() {
    const {showPopup, setShowPopup} = useMyContext()
  return (
    <div className='GetQoute'>
      <div className="GetQoute-wrapper">
      {showPopup?<GetQoutePopup/>:'' }  
        <button className='Consult-now' onClick={() => setShowPopup(true)}>Consult Now</button>
      </div>
    </div>
  )
}

export default GetQoute
