import React from 'react'
import gioithieu from "../assets/images/gioithieu.png";

const Intro = () => {
  return (
    <div
      className="relative flex items-center justify-center h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${gioithieu})` }}
    >
    </div>
  )
}

export default Intro
