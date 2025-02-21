import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Lesson1 from './pages/Lesson1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Trang chủ */}
          <Route index element={<Home />} />
          {/* Các route khác */}
          <Route path="lesson1" element={<Lesson1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
