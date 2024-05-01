import React from 'react'

const Adi = ({ adi }) => {

  // to circle effect
  const splitPosition = adi / 100 * 100;


  return (
    <>
    <div className='py-8'>
    <h1>Adi</h1>
    <div className='h-60 w-60 rounded-full border-2 border-black'
      style={{
        background: splitPosition
          ? `linear-gradient(to bottom, blue 0%, blue ${splitPosition}%, green ${splitPosition}%, green 100%)`
          : 'green'
      }}>
    </div>
    </div>
    </>
  )
}

export default Adi