import React, { useContext } from 'react';
import './Project.css'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ProductContext } from '../../App';
import ReactTypingEffect from 'react-typing-effect';

const Projects = () => {
    const [projects] = useContext(ProductContext); 

    return (
       <>
      
       <div className=' bg-accent'>
       <h1 className='text-center text-6xl mb-10 uppercase font-bold'>
       <ReactTypingEffect
        text={["projects","projects"]}
      />
        </h1>
       <div className='grid lg:px-32 px-3 lg:grid-cols-3 justify-center items-center lg:pb-0 pb-32  lg:h-screen w-screen gap-5'>   
        {
        projects?.map(project=><>
          <div className='img-bg '>
           <img src={project?.img1} className='w-[100%] rounded-lg h-[300px]' alt="" />
           <div className='text-3xl  flex rounded-lg items-center justify-center overlay'>
               <div className='content  hidden'>
              <div className=' justify-center items-center flex flex-col'>
              <h1 className='uppercase font-semibold '> {project?.name}  </h1>
               <Link to={`/home/${project?._id}`}>
               <FaArrowRight className='h-14 w-14 border-2 mt-8 font-semibold border-white rounded-full p-2 hover:bg-white hover:text-primary'/>
               </Link>
              </div>
               </div>
           </div>
           </div>
        
        </>)
       }
          
         </div>
       </div>
       </>
    );
};

export default Projects;