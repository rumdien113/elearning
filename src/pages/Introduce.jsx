import React from 'react';
import huongdan from '../assets/images/huongdan.png';

const Introduce = () => {
  return (
    <div
      className="relative flex items-center justify-center h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${huongdan})` }}
    >
    </div>
  )
}

export default Introduce;
