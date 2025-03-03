import Video_3 from '../assets/videos/Video_3.mp4';

const Lesson3 = () => {
  return (
    <div className='w-full h-full'>
      <video controls className='w-full h-full'>
        <source src={Video_3} type="video/mp4" />
      </video>
    </div>
  );
};

export default Lesson3;
