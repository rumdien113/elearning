import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen min-w-screen bg-gray-900 text-white">
      <header className="bg-blue-500 text-white">
        <h1>Elearning Header</h1>
      </header>
      <div className="flex flex-1">
        <main className="flex-1">
          <Outlet />
        </main>
        <nav className="w-64 bg-gray-200 flex flex-col">
          <img src="https://placehold.co/50x50" alt="avatar" className="rounded-full mb-4 p-4" />
          <ul className='space-y-3 p-3'>
            <li className='hover:bg-gray-300'>
              <Link to="/lesson1">
                <li className="flex justify-start items-center">
                  Trích đoạn &quot;Đăm Săn đi bắt Nữ Thần&quot;
                </li>
              </Link>
            </li>
            <li className='hover:bg-gray-300'>
              <Link to="/lesson2">
                <li className="flex justify-start items-center">
                  Trình bày trang phục Ê-đê
                </li>
              </Link>
            </li>
            <li className='hover:bg-gray-300'>
              <Link to="/lesson3">
                <li className="flex justify-start items-center">
                  Mô hình nhà sàn
                </li>
              </Link>
            </li>
            <li className='hover:bg-gray-300'>
              <Link to="/lesson4">
                <li className="flex justify-start items-center">
                  Gameshow Ai là triệu phú
                </li>
              </Link>
            </li>
            <li className='hover:bg-gray-300'>
              <Link to="/lesson5">
                <li className="flex justify-start items-center">
                  Mô hình múa rối nước
                </li>
              </Link>
            </li>
            <li className='hover:bg-gray-300'>
              <Link to="/lesson6">
                <li className="flex justify-start items-center">
                  Chèo - nghệ thuật dân gian Việt Nam
                </li>
              </Link>
            </li>
            <li className='hover:bg-gray-300'>
              <Link to="/lesson7">
                <li className="flex justify-start items-center">
                  Làm hương - Thủy Xuân - Huế
                </li>
              </Link>
            </li>
            <li className='hover:bg-gray-300'>
              <Link to="/lesson8">
                <li className="flex justify-start items-center">
                  Làm hoa giấy Thanh Tiên - Phú Mậu - Huế
                </li>
              </Link>
            </li>
          </ul>
          <button className="p-3 mt-44">
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
