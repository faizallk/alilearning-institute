
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Layout from './layouts/Layout'
import CourseDetail from './pages/CourseDetails'
import ScrollToTop from './components/ScrollToTop'
import Fees from './pages/Fees'
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from 'react'

function ProgressBar() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();

    // Add small delay to feel smooth
    const timer = setTimeout(() => {
      NProgress.done();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [location]);

  return null;
}

function App() {
  document.title = "Alibros Learning"
  return (
    <>
       <ProgressBar />
     <ScrollToTop /> 
      <Routes>
     <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
     <Route path='/about' element={<About />} />
     <Route path='/courses' element={<Courses />} />
     <Route path='/contact' element={<Contact />} />
     <Route path='/fees' element={<Fees />} ></Route>
     <Route path='/course/:id/details/' element={<CourseDetail />} />
    
</Route>
      </Routes>
    </>
  )
}

export default App