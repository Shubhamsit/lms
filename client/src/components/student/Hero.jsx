import React from 'react'
import { assets } from '../../assets/assets'

function Hero() {
  return (
    <div>
<h1>Empower your future with the 
courses designed <span>to fit your choice.</span>
<img src={assets.sketch}  alt="sketch" className='md:block hidden absolute -bottom-7 right-0'/></h1>

    </div>
  )
}

export default Hero