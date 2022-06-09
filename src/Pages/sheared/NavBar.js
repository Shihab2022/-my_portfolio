import React from 'react';
import { FaHome,FaUser,FaPhone ,FaBlogger,FaLightbulb} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
// import './Navbar.css'
const NavBar = () => {
    return (
        <>
         <div className='absolute right-5  h-screen top-0 items-center justify-center flex flex-col  text-neutral text-5xl  '>
        
          <NavLink to='/' ><FaLightbulb className=' p-3 bg-primary   rounded-full shadow-md mb-40'/></NavLink>
          <NavLink to='/'  ><FaHome  className=' home-btn p-3 bg-primary rounded-full shadow-md' /></NavLink>
          <NavLink to='/about' ><FaUser className='p-3 my-5 bg-primary rounded-full shadow-md'/></NavLink>
          <NavLink to='/contact' ><FaPhone className='p-3 bg-primary rounded-full shadow-md'/></NavLink>
          <NavLink to='/' ><FaBlogger className='p-3 my-5 bg-primary rounded-full shadow-md'/></NavLink>
         
        </div>
        </>
    );
};

export default NavBar;