import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../App";
import { FaRegHandPointRight,FaGift ,FaGithub} from "react-icons/fa";

const ProjectDetails = () => {
  const {id} = useParams();
  const [projects] = useContext(ProductContext);
const [project,setProject]=useState([])
useEffect(()=>{
  const remaining= projects?.find(po=>po?._id===id)
  setProject(remaining)
},[id])
const {img1,img2,img3,img4,features,link,tools}=project
  return (
    <>      
      <div className="bg-accent w-screen lg:pb-0 pb-24 flex justify-center flex-col items-center py-10">
        <div className="lg:w-[70%] w-[90%]">
          <div className="grid  grid-cols-2 gap-3 lg:gap-10">
            <img src={img1} className="w-[90%] h-[200px] lg:h-[280px]" alt="" />
            <img src={img2} className="w-[90%] h-[200px] lg:h-[280px]" alt="" />
            <img src={img3} className="w-[90%] h-[200px] lg:h-[280px]" alt="" />
            <img src={img4} className="w-[90%] h-[200px] lg:h-[280px]" alt="" />
          </div>
        </div>
        <div className="lg:w-[70%] w-[90%] my-8">
          <h2 className="text-4xl font-semibold"> Features</h2>
          <p className="bg-primary py-1 rounded-lg my-3"></p>
          {features?.map((feature) => (
            <div className="flex my-2 text-xl items-center">
              <FaRegHandPointRight /> <p className="ml-3">{feature}</p>
            </div>
          ))}
        </div>
        <div className="lg:w-[70%] w-[90%] my-8">
          <h2 className="text-4xl font-semibold">Technologies</h2>
          <p className="bg-primary py-1 my-3 rounded-lg"></p>
          <div className="grid my-5 grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-5">
            {tools?.map((tool) => (
              <div className="bg-primary rounded-lg p-2 flex justify-center items-center">
                <p className="lg:text-xl  text-neutral">{tool}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-[70%] w-[90%] my-8">
          <h2 className="text-4xl font-semibold"> Links</h2>
          <p className="bg-primary py-1 rounded-lg my-3"></p>
          <div className="grid grid-cols-3 gap-3 lg:gap-10">
          <a href={link?.lifeSite} className=' bg-primary rounded-md flex justify-center lg:text-xl text-lg' target='_blank'>
          <button className='flex flex-col  lg:flex-row  justify-center items-center text-neutral '>
            <FaGift className='mr-4'/>
            Life Site
            </button>
              </a>
          <a href={link?.server_link} className=' bg-primary rounded-md flex justify-center lg:text-xl text-lg' target='_blank'>
          <button  className='flex flex-col  lg:flex-row  justify-center items-center py-2 text-neutral '>
            <FaGithub className='mr-4'/>
            Server Link
            </button>  
              </a>
          <a href={link?.client_link} className=' bg-primary rounded-md flex justify-center lg:text-xl text-lg' target='_blank'>
          <button  className='flex flex-col  lg:flex-row  justify-center items-center py-2 text-neutral '>
            <  FaGithub className='mr-4'/>
            Client Link
            </button>
              </a>                 
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
