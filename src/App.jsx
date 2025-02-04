import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Login from './pages/Login';

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Nav/>
     
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
