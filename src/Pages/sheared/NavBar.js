import React from 'react';
import { FaHome,FaUser,FaPhone ,FaBlogger,FaLightbulb} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
// import './Navbar.css'
const NavBar = () => {
    return (
        <>
         <div className='md:absolute fixed md:right-5  md:bg-accent bg-[#252525] md:z-0 z-10 bottom-0  md:h-screen md:top-0 items-center justify-center flex md:flex-col md:px-0 px-[15%]  text-neutral text-5xl  '>
        
          <NavLink to='/' ><FaLightbulb className=' p-3 bg-primary hover:duration-700 hover:bg-info  rounded-full shadow-md md:mb-40'/></NavLink>
          <NavLink to='/'  ><FaHome  className=' home-btn p-3 ml-3 md:ml-0 bg-primary hover:duration-700 hover:bg-info rounded-full shadow-md' /></NavLink>
          <NavLink to='/about' ><FaUser className='p-3 md:my-5 md:mx-0 mx-5 bg-primary hover:duration-700 hover:bg-info rounded-full shadow-md'/></NavLink>
          <NavLink to='/contact' ><FaPhone className='p-3 bg-primary hover:duration-700 hover:bg-info rounded-full shadow-md'/></NavLink>
          <NavLink to='/' ><FaBlogger className='p-3 md:mx-0 mx-5 my-5 bg-primary hover:duration-700 hover:bg-info rounded-full shadow-md'/></NavLink>
         
        </div>
        </>
    );
};

export default NavBar;