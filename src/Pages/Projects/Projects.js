import React from 'react';
import './Project.css'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useProductData from '../../hook/useProductData';

const Projects = () => {
    const [projects]=useProductData()
    // console.log(projects)
    return (
       <>
      
        <div className='grid px-32 grid-cols-3 bg-accent justify-center items-center  h-screen w-screen gap-5'>
           
         
        {
        projects.map(project=><>
          <div className='img-bg '>
           <img src={project.img1} className='w-[100%] rounded-lg h-[300px]' alt="" />
           <div className='text-3xl  flex rounded-lg items-center justify-center overlay'>
               <div className='content  hidden'>
              <div className=' justify-center items-center flex flex-col'>
              <h1 className='uppercase font-semibold '> {project.name}  </h1>
               <Link to={`/projectDetails/${project._id}`}>
               <FaArrowRight className='h-14 w-14 border-2 mt-8 font-semibold border-white rounded-full p-2 hover:bg-white hover:text-primary'/>
               </Link>
              </div>
               </div>
           </div>
           </div>
        
        </>)
       }
          
         </div>
       </>
    );
};

export default Projects;