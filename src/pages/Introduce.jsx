import React from 'react';
import huongdan from '../assets/images/huongdan.png';

const Introduce = () => {
  return (
    <div
      className="w-full h-full relative items-center justify-center"
      style={{ backgroundImage: `url(${huongdan})` }}
    >
      <img src={huongdan} alt="huongdan" className='w-full h-full'/>
    </div>
  )
}

export default Introduce;