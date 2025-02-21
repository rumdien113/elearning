import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <h1>Elearning Header</h1>
      </header>

      {/* Nội dung chính và navigation */}
      <div className="flex flex-1">
        {/* Màn hình chính */}
        <main className="flex-1 p-4">
          <Outlet /> {/* Nội dung thay đổi theo route */}
        </main>

        {/* Navigation bên phải */}
        <nav className="w-64 bg-gray-200 p-4">
          <ul>
            <li className="mb-2">
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="mb-2">
              <Link to="/lesson1">Khóa học</Link>
            </li>
            {/* Thêm các mục navigation khác nếu cần */}
          </ul>
          <button className="bg-blue-500 text-white p-2 mt-4">
            <Link to="/">Quay lại</Link>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Layout;
