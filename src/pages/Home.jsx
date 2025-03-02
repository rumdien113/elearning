import { Link } from 'react-router-dom';

const Home = () => {
  const buttons = [
    { label: 'Tác giả', to: '/lesson1' },
    { label: 'Tóm tắt sử thi Đăm Săn', to: '/lesson2' },
    { label: 'Video truyện tranh tự vẽ về bộ sử thi', to: '/lesson3' },
    { label: 'Video thuyết trình trang phục Ê-đê', to: '/lesson4' },
    { label: 'Video thuyết trình nhà sàn', to: '/lesson5' },
    { label: 'Video thuyết trình các món ăn người dân Tây Nguyên', to: '/lesson6' },
    { label: 'Video mô hình múa rối nước', to: '/lesson7' },
    { label: 'Gameshow Ai là triệu phú', to: '/lesson8' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">
        Elearning Homepage
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {buttons.map((button, index) => (
          <Link
            key={index}
            to={button.to}
            className="bg-blue-500 hover:bg-blue-600 text-white hover:text-gray-300 font-bold py-4 px-5 rounded-md transition duration-300 ease-in-out text-center"
          >
            {button.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
