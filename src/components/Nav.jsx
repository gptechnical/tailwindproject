import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";
import { RiCloseCircleFill } from "react-icons/ri";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Nav = () => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);


      const toggleMobileMenu = () =>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
      }

      const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
      }

  return (
    <>
  <nav className="container max-w-full bg-black">
        <div className='mx-auto flex justify-between items-center p-2 px-10'>
           <img className='w-52' src="/logo.png" alt="" />
           <ul className='hidden md:flex items-center justify-between gap-8 text-white text-xl font-semibold'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
         
         <div className='relative' onMouseEnter={()=> setIsDropdownOpen(true)} onMouseLeave={()=>setIsDropdownOpen(false)}>
            <li><NavLink className='flex items-center justify-center'>Service <span>{isDropdownOpen ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}</span></NavLink></li>

            {isDropdownOpen && (
              <ul className='absolute left-0 bg-red-950 p-2 leading-10 w-48'>
              <li><NavLink to="/serviceone" className="block px-4 py-1 hover:bg-gray-200 hover:text-black">ServiceOne</NavLink></li>
              <li><NavLink to="/servicetwo" className="block px-4 py-1 hover:bg-gray-200 hover:text-black">ServiceOne</NavLink></li>
              <li><NavLink to="/servicethree" className="block px-4 py-1 hover:bg-gray-200 hover:text-black">ServiceOne</NavLink></li>
            </ul>
            )}  
            </div>

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
            font-semibold bg-yellow-950 w-52 p-4 absolute top-0 right-0'>
            <button onClick={closeMobileMenu}><RiCloseCircleFill /></button>
             <li><NavLink to="/" onClick={closeMobileMenu}>Home</NavLink></li>
             <li><NavLink to="/about" onClick={closeMobileMenu}>About</NavLink></li>
             <div className='relative' onMouseEnter={()=> setIsDropdownOpen(true)} onMouseLeave={()=>setIsDropdownOpen(false)}>
            <li><NavLink className='flex items-center justify-center'>Service <span>{isDropdownOpen ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}</span></NavLink></li>

            {isDropdownOpen && (
              <ul className='absolute left-0 bg-red-950 p-2 leading-6 w-44'>
              <li><NavLink to="/serviceone" className="block px-1 py-1 hover:bg-gray-200 hover:text-black" onClick={closeMobileMenu}>ServiceOne</NavLink></li>
              <li><NavLink to="/servicetwo" className="block px-1 py-1 hover:bg-gray-200 hover:text-black" onClick={closeMobileMenu}>ServiceTwo</NavLink></li>
              <li><NavLink to="/servicethree" className="block px-1 py-1 hover:bg-gray-200 hover:text-black" onClick={closeMobileMenu}>ServiceThree</NavLink></li>
            </ul>
            )}  
            </div>
              <li><NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink></li>
              <li><NavLink to="/login" onClick={closeMobileMenu}>Login</NavLink></li>
            </ul>
        )}
    </>
  )
}

export default Nav
