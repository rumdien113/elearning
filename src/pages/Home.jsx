import { Link } from 'react-router-dom';
import background_home from '../assets/images/background_home.png';

const Home = () => {
  const buttons = [
    { label: 'Trích đoạn "Đăm Săn đi bắt Nữ Thần"', to: '/lesson1', position: { top: '16%', left: '39.5%' } },
    { label: 'Trình bày trang phục Ê-đê', to: '/lesson2', position: { top: '16%', left: '60%' } },
    { label: 'Mô hình nhà sàn', to: '/lesson3', position: { top: '34%', left: '75%' } },
    { label: 'Gameshow Ai là triệu phú', to: '/lesson4', position: { top: '59%', left: '73%' } },
    { label: 'Mô hình múa rối nước', to: '/lesson5', position: { top: '78%', left: '60%' } },
    { label: 'Chèo - nghệ thuật dân gian Việt Nam', to: '/lesson6', position: { top: '79%', left: '41%' } },
    { label: 'Làm hương - Thủy Xuân - Huế', to: '/lesson7', position: { top: '60%', left: '27%' } },
    { label: 'Làm hoa giấy Thanh Tiên - Phú Mậu - Huế', to: '/lesson8', position: { top: '34%', left: '26%' } },
    { label: 'ỨNG DỤNG THIẾT BỊ DẠY HỌC TRONG CÁC VĂN BẢN VĂN HÓA TÂY NGUYÊN VÀ VĂN HÓA TRUYỀN THỐNG VIỆT NAM', to: '/', position: { top: '49%', left: '49.5%' }, maxWidth: '480px', fontSize: '2rem', content: 'center' },
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
              maxWidth: button.maxWidth ? button.maxWidth : '220px',
              whiteSpace: 'normal',
              display: 'inline-block',
              fontSize: button.fontSize ? button.fontSize : '',
              textAlign: button.content ? button.content : 'left',
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
