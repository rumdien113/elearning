import React from 'react';
import Video_4 from '../assets/videos/Video_4.mp4';

const Lesson4 = () => {
  return (
    <div>
      <video controls className='w-full h-max-screen'>
        <source src={Video_4} type="video/mp4" />
      </video>
    </div>
  );
};

export default Lesson4;
