import Video_7 from '../assets/videos/Video_7.mp4';

const Lesson7 = () => {
  return (
    <div>
      <video controls className='w-full h-full'>
        <source src={Video_7} type="video/mp4" />
      </video>
    </div>
  );
};

export default Lesson7;
