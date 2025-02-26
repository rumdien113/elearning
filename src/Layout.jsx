import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen bg-gray-900 text-white">
      <header className="bg-blue-500 text-white">
        <h1>Elearning Header</h1>
      </header>
      <div className="flex flex-1">
        <main className="flex-1">
          <Outlet /> 
        </main>
        <nav className="w-64 bg-gray-200 p-4 flex flex-col">
          <img src="https://placehold.co/50x50" alt="avatar" className="rounded-full" />
          <ul>
            <li className="mb-2"><Link to="/lesson1">Tác giả</Link></li>
            <li className="mb-2"><Link to="/lesson2">Tóm tắt sử thi Đăm Săn</Link></li>
            <li className="mb-2"><Link to="/lesson3">Video truyện tranh tự vẽ về bộ sử thi</Link></li>
            <li className="mb-2"><Link to="/lesson4">Video thuyết trình trang phục Ê-đê</Link></li>
            <li className="mb-2"><Link to="/lesson5">Video thuyết trình nhà sàn</Link></li>
            <li className="mb-2"><Link to="/lesson6">Video thuyết trình các món ăn người dân Tây nguyên</Link></li>
            <li className="mb-2"><Link to="/lesson7">Video mô hình múa rối nước</Link></li>
            <li className="mb-2"><Link to="/lesson8">Gameshow Ai là triệu phú</Link></li>
          </ul>
          <button className="p-3 mt-72">
            <Link to="/" className='bg-blue-500 text-white p-2 rounded-md'>
              Trở về trang chủ
            </Link>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Layout;
