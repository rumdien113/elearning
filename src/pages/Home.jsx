import { Link } from 'react-router-dom';

const Home = () => {
  const buttons = [
    { label: 'Tác giả', to: '/lesson1' },
    { label: 'Tóm tắt sử thi Đăm Săn', to: '/lesson2' },
    { label: 'Video truyện tranh tự vẽ', to: '/lesson3' },
    { label: 'Video thuyết trình trang phục Ê-đê', to: '/lesson4' },
    { label: 'Video thuyết trình nhà sàn', to: '/lesson5' },
    { label: 'Video thuyết trình món ăn Tây Nguyên', to: '/lesson6' },
    { label: 'Video mô hình múa rối nước', to: '/lesson7' },
    { label: 'Gameshow Ai là triệu phú', to: '/lesson8' },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="relative w-64 h-64">
        <div className="absolute w-28 h-28 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className='text-3xl'>
            🌼
          </div>
        </div>
        {buttons.map((button, index) => {
          const angle = (index * 45) * (Math.PI / 180);
          const x = Math.cos(angle) * 140;
          const y = Math.sin(angle) * 140;
          return (
            <Link
              key={index}
              to={button.to}
              className="absolute w-28 h-28 bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center rounded-full shadow-lg transition duration-300 ease-in-out text-center text-sm font-bold p-3"
              style={{ left: `calc(50% + ${x}px - 56px)`, top: `calc(50% + ${y}px - 56px)` }}
            >
              {button.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
