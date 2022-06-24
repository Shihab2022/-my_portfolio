import React from 'react';
import { FaHome,FaUser,FaPhone ,FaBlogger,FaLightbulb} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
// import './Navbar.css'
const NavBar = ({theme,setTheme}) => {
    return (
        <>
         <div className=' fixed right-5 hidden  bg-accent z-0  h-screen top-0 items-center justify-center md:flex  flex-col    text-neutral text-5xl  '>        
          <button onClick={()=>setTheme(!theme)}><FaLightbulb className=' p-3 bg-primary hover:duration-700 hover:bg-info  rounded-full shadow-md mb-40'/></button>
          <NavLink to='/'  ><FaHome  className='  p-3  bg-primary hover:duration-700 hover:bg-info rounded-full shadow-md' /></NavLink>
          <NavLink to='/about' ><FaUser className='p-3 my-5  bg-primary hover:duration-700 hover:bg-info rounded-full shadow-md'/></NavLink>
          <NavLink to='/contact' ><FaPhone className='p-3 bg-primary hover:duration-700 hover:bg-info rounded-full shadow-md'/></NavLink>
          <NavLink to='/blog' ><FaBlogger className='p-3  my-5 bg-primary hover:duration-700 hover:bg-info rounded-full shadow-md'/></NavLink>         
        </div>

        {/* mobile device */}
         <div className=' fixed w-screen left-0 md:hidden   z-10 bottom-0   items-center justify-center flex    text-neutral text-5xl  '>        
         <button onClick={()=>setTheme(!theme)}><FaLightbulb className=' p-3 ml-3 bg-primary hover:duration-700 hover:bg-info rounded-full shadow-md '/></button>
          <NavLink to='/'  ><FaHome  className='  p-3 ml-3 bg-primary hover:duration-700 hover:bg-info rounded-full shadow-md' /></NavLink>
          <NavLink to='/about' ><FaUser className='p-3  mx-5 bg-primary hover:duration-700 hover:bg-info rounded-full shadow-md'/></NavLink>
          <NavLink to='/contact' ><FaPhone className='p-3 bg-primary hover:duration-700 hover:bg-info rounded-full shadow-md'/></NavLink>
          <NavLink to='/blog' ><FaBlogger className='p-3  mx-5 my-5 bg-primary hover:duration-700 hover:bg-info rounded-full shadow-md'/></NavLink>         
        </div>
        </>
    );
};

export default NavBar;