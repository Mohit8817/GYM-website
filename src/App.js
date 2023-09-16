import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
// import Header from './Components/Header/Header';

import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
import Home from './Pages/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import Plans from './Pages/Plans/Plans';
import Trainer from './Pages/Trainer/Trainer';
import React, { useEffect } from 'react';


import Aos from 'aos';
import './App.css';


function App() {

  useEffect(() => {
    Aos.init();
  }, [])


  // scroll button ........
  // scroll to top on page load

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);


  return (
    <>
      <div>
        <BrowserRouter basename='GYM-website'>
          <Navbar />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='gallery' element={<Gallery />}></Route>
            <Route path='plans' element={<Plans />}></Route>
            <Route path='trainers' element={<Trainer />}></Route>            
            <Route path='*' element={<Notfound />}></Route>
          </Routes>

        </BrowserRouter>
      </div>









      {/* 👇️ scroll to top on button click */}

      <div>

        <i className='fa fa-arrow-up text-info fs-1' onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
          style={{
            position: 'fixed',
            bottom: '40px',
            right: '40px',
            cursor: 'pointer'
          }}></i>
      </div>





    </>
  );
}

export default App;
