import React from 'react';
import { FaHome,FaUser,FaPhone ,FaBlogger,FaLightbulb} from "react-icons/fa";

const NavBar = () => {
    return (
        <>
         <div className='absolute right-5  h-screen top-0 items-center justify-center flex flex-col  text-neutral text-5xl  '>
        
          <span ><FaLightbulb className=' p-3 bg-primary rounded-full shadow-md mb-40'/></span>
          <span  ><FaHome  className=' p-3 bg-primary rounded-full shadow-md' /></span>
          <span ><FaUser className='p-3 my-5 bg-primary rounded-full shadow-md'/></span>
          <span ><FaPhone className='p-3 bg-primary rounded-full shadow-md'/></span>
          <span ><FaBlogger className='p-3 my-5 bg-primary rounded-full shadow-md'/></span>
         
        </div>
        </>
    );
};

export default NavBar;