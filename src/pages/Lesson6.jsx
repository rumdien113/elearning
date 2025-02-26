import Video_6 from '../assets/videos/Video_6.mp4';

const Lesson6 = () => {
  return (
    <div>
      <video controls className='w-full h-max-screen'>
        <source src={Video_6} type="video/mp4" />
      </video>
    </div>
  );
};

export default Lesson6;
