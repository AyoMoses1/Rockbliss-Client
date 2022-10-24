import React from 'react'
import './hero.css'



function Hero({title}) {
  return (
    <div className='hero-container'>
        <h3>{title}</h3>
    </div>
  )
}

export default Hero