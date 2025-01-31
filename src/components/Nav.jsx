import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";
import { RiCloseCircleFill } from "react-icons/ri";

const Nav = () => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

      const toggleMobileMenu = () =>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
      }

      const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
      }

  return (
    <>
  <nav className="container max-w-full bg-black sticky">
        <div className='mx-auto flex justify-between items-center p-2 px-10'>
           <img className='w-52' src="/logo.png" alt="" />
           <ul className='hidden md:flex items-center justify-between gap-8 text-white text-xl font-semibold'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/service">Service</NavLink></li>
             <li><NavLink to="/contact">Contact</NavLink></li>
             <li><NavLink to="/login">Login</NavLink></li>
           </ul>
           <div className='md:hidden flex items-center'>
            <button onClick={toggleMobileMenu}><CiMenuKebab className='text-white text-3xl font-bold'/></button>
           </div>
        </div>
     </nav>
     {isMobileMenuOpen && (
            <ul className='md:hidden flex flex-col items-start gap-6 text-white text-xl 
            font-semibold bg-yellow-950 w-52 p-4'>
            <button onClick={closeMobileMenu}><RiCloseCircleFill /></button>
             <li><NavLink to="/" onClick={closeMobileMenu}>Home</NavLink></li>
             <li><NavLink to="/about" onClick={closeMobileMenu}>About</NavLink></li>
             <li><NavLink to="/service" onClick={closeMobileMenu}>Service</NavLink></li>
              <li><NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink></li>
              <li><NavLink to="/login" onClick={closeMobileMenu}>Login</NavLink></li>
            </ul>
        )}
    </>
  )
}

export default Nav
