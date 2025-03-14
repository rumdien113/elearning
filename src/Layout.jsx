import { Link, Outlet } from 'react-router-dom';
import avatar from '../src/assets/images/avatar.jpg';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen min-w-screen bg-gray-900 text-white">
      <header className="bg-blue-500 text-white font-bold text-xl">
        <h1>CÁC SẢN PHẨM MINH HOẠ VĂN HOÁ TÂY NGUYÊN VÀ VĂN HOÁ TRUYỀN THỐNG VIỆT NAM ỨNG DỤNG CHO MỘT SỐ BÀI HỌC NGỮ VĂN 10 VÀ GIÁO DỤC ĐỊA PHƯƠNG 10</h1>
      </header>
      <div className="flex flex-1">
        <main className="flex-1">
          <Outlet />
        </main>
        <nav className="w-64 bg-gray-200 flex flex-col">
          <img src={avatar} alt="avatar" className="rounded-full mb-4 p-4 " />
          <ul className='space-y-3 p-3'>
            <li className='hover:bg-gray-300'>
              <Link to="/lesson1">
                <li className="flex justify-start items-center">
                  HS vex tranh &quot;Đăm Săn đi bắt Nữ Thần&quot;
                </li>
              </Link>
            </li>
            <li className='hover:bg-gray-300'>
              <Link to="/lesson2">
                <li className="flex justify-start items-center">
                  HS vẽ và trình bày trang phục Ê-đê
                </li>
              </Link>
            </li>
            <li className='hover:bg-gray-300'>
              <Link to="/lesson3">
                <li className="flex justify-start items-center">
                  HS làm mô hình nhà sàn
                </li>
              </Link>
            </li>
            <li className='hover:bg-gray-300'>
              <Link to="/lesson4">
                <li className="flex justify-start items-center">
                  HS làm mô hình múa rối nước
                </li>
              </Link>
            </li>
            <li className='hover:bg-gray-300'>
              <Link to="/lesson5">
                <li className="flex justify-start items-center">
                  Tìm hiểu nghệ thuật Chèo
                </li>
              </Link>
            </li>
            <li className='hover:bg-gray-300'>
              <Link to="/lesson6">
                <li className="flex justify-start items-center">
                  Trải nghiệm nghề làm hương
                </li>
              </Link>
            </li>
            <li className='hover:bg-gray-300'>
              <Link to="/lesson7">
                <li className="flex justify-start items-center">
                  Trải nghiệm nghề làm hoa giấy Thanh Tiên
                </li>
              </Link>
            </li>
            <li className='hover:bg-gray-300'>
              <Link to="/lesson8">
                <li className="flex justify-start items-center">
                  Gameshow Ai là triệu phú
                </li>
              </Link>
            </li>
          </ul>
          <div className="mt-auto w-full flex flex-col items-center space-y-2 p-3">
            {[
              { path: "/introduce", text: "Giới thiệu" },
              { path: "/intro", text: "Hướng dẫn" },
              { path: "/home", text: "Trở về trang chủ" },
            ].map(({ path, text }) => (
              <Link
                key={text}
                to={path}
                className="hover:bg-blue-500 hover:text-white w-full bg-blue-700 text-white p-2 text-center rounded-md"
              >
                {text}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Layout;
