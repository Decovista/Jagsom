import React from 'react'
import resourse from '../../../public/assets/resourse'

function MiddleBanner() {
  return (
    <div className='MiddleBanner h-[320px]'>
      <img className='h-[320px] w-full object-fill' src={resourse.middlebanner} alt="promo-banner" />
    </div>
  )
}

export default MiddleBanner
