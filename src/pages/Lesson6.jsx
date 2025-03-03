import Video_6 from '../assets/videos/Video_6.mp4';

const Lesson6 = () => {
  return (
    <div className='w-full h-full'>
      <video controls className='w-full h-full'>
        <source src={Video_6} type="video/mp4" />
      </video>
    </div>
  );
};

export default Lesson6;
