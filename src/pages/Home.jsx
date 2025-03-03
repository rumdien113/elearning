import { Link } from 'react-router-dom';
import background_home from '../assets/images/background_home.png';

const Home = () => {
  const buttons = [
    { label: 'Tác giả', to: '/lesson1', position: { top: '16%', left: '39.5%' } },
    { label: 'Tóm tắt sử thi Đăm Săn', to: '/lesson2', position: { top: '16%', left: '60%' } },
    { label: 'Video truyện tranh tự vẽ', to: '/lesson3', position: { top: '34%', left: '75%' } },
    { label: 'Video thuyết trình trang phục Ê-đê', to: '/lesson4', position: { top: '59%', left: '73%' } },
    { label: 'Video thuyết trình nhà sàn', to: '/lesson5', position: { top: '78%', left: '60%' } },
    { label: 'Video thuyết trình món ăn Tây Nguyên', to: '/lesson6', position: { top: '79%', left: '41%' } },
    { label: 'Video mô hình múa rối nước', to: '/lesson7', position: { top: '60%', left: '27%' } },
    { label: 'Gameshow Ai là triệu phú', to: '/lesson8', position: { top: '34%', left: '26%' } },
  ];

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background_home})` }}
    >
      <div className="relative w-full h-full">
        {buttons.map((button, index) => (
          <Link
            key={index}
            to={button.to}
            className="absolute px-3 py-1 bg-none text-black rounded-full text-2xl transition break-words"
            style={{
              top: button.position.top,
              left: button.position.left,
              transform: 'translate(-50%, -50%)',
              maxWidth: '220px',
              whiteSpace: 'normal',
              display: 'inline-block',
            }}
          >
            {button.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
