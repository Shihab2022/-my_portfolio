import React from 'react';
import demo from '../../assets/img/demo.png'
import './Project.css'
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
    return (
        <div className='grid px-32 grid-cols-3 bg-accent justify-center items-center  h-screen w-screen gap-5'>
           
          <div className='img-bg '>
          <img src={demo} className='w-[100%] rounded-lg h-[300px]' alt="" />
          <div className='text-3xl  flex rounded-lg items-center justify-center overlay'>
              <div className='content  hidden'>
             <div className=' justify-center items-center flex flex-col'>
             <h1 className='uppercase font-semibold '> manufacture project  </h1>
              <FaArrowRight className='h-14 w-14 border-2 mt-8 font-semibold border-white rounded-full p-2 hover:bg-white hover:text-primary'/>
             </div>
              </div>
          </div>
          </div>
          <div>
          <img src={demo} className='w-[80%] h-[300px]' alt="" />
          </div>
          <div>
          <img src={demo} className='w-[80%] h-[300px]' alt="" />
          </div>
         
        </div>
    );
};

export default Projects;