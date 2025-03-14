import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import { 
  Lesson1, Lesson2, Lesson3, Lesson4, Lesson5, Lesson6, Lesson7, Lesson8,
  Intro, Introduce
} 
from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Introduce />} />
          <Route path="/home" element={<Home />} />
          <Route path="/intro" element={<Introduce />} />
          <Route path="/introduce" element={<Intro />} />
          <Route path="lesson1" element={<Lesson1 />} />
          <Route path="lesson2" element={<Lesson2 />} />
          <Route path="lesson3" element={<Lesson3 />} />
          <Route path="lesson4" element={<Lesson4 />} />
          <Route path="lesson5" element={<Lesson5 />} />
          <Route path="lesson6" element={<Lesson6 />} /> 
          <Route path="lesson7" element={<Lesson7 />} />
          <Route path="lesson8" element={<Lesson8 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
