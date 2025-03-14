import React from 'react'
import gioithieu from "../assets/images/gioithieu.png";

const Intro = () => {
  return (
    <div
      className="w-full h-full relative flex items-center justify-center "
    >
      <img src={gioithieu} alt="gioithieu" className='w-full h-full object-contain'/>
    </div>
  )
}

export default Intro
