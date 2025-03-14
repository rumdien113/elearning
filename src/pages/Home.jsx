import { Link } from 'react-router-dom';
import background_home from '../assets/images/background_home.png';

const Home = () => {
  const buttons = [
    { label: 'Truyện tranh điện tử - HS tự vẽ đọa trích "Đăm Săn đi bắt Nữ thần Mặt Trời" (sử thi Ê-đê)', to: '/lesson1', position: { top: '14%', left: '40%' } },
    { label: 'HS trình bày trang phục Ê-đê', to: '/lesson2', position: { top: '16%', left: '60%' } },
    { label: 'HS tự làm và thuyết trình mô hình nhà sàn', to: '/lesson3', position: { top: '34%', left: '73%' } },
    { label: 'HS tự làm và thuyết trình mô hình múa rối nước', to: '/lesson4', position: { top: '78%', left: '60%' } },
    { label: 'Video tìm hiểu về Chèo - loại hình nghệ thuật dân gian Việt Nam', to: '/lesson5', position: { top: '79%', left: '41%' } },
    { label: 'Trải nghiệm nghệ thuật truyền thống màm hương - Thủy Xuân - Huế', to: '/lesson6', position: { top: '60%', left: '27%' } },
    { label: 'Trải nghiệm nghệ thuật làm hoa giấy Thanh Tiên - Phú Mậu - Huế', to: '/lesson7', position: { top: '34%', left: '26%' } },
    { label: 'Gameshow Ai là triệu phú', to: '/lesson8', position: { top: '59%', left: '73%' } },
    { label: 'ỨNG DỤNG THIẾT BỊ DẠY HỌC TRONG CÁC VĂN BẢN VĂN HÓA TÂY NGUYÊN VÀ VĂN HÓA TRUYỀN THỐNG VIỆT NAM', to: '/', position: { top: '49%', left: '49.5%' }, maxWidth: '480px', fontSize: '2rem', content: 'center' },
  ];

  return (
    <div
      className="relative flex items-center justify-center h-full bg-cover bg-center"
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
