import Video_5 from '../assets/videos/Video_5.mp4';

const Lesson5 = () => {
  return (
    <div className='w-full h-full'>
      <video controls className='flex w-full h-full'>
        <source src={Video_5} type="video/mp4" />
      </video>
    </div>
  );
};

export default Lesson5;
