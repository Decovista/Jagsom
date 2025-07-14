import React from 'react'
import './Loader.css'

function Loader() {
  return (
    <div className='Loader h-[100vh] w-full absolute z-[99999999999] flex justify-center flex-col'>
<div class="boxes">
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
<h1 className='text-3xl text-[linear-gradient(to top, #00154c, #12376e, #23487f)] text-center '>Gagsom</h1>
    </div>
  )
}

export default Loader
