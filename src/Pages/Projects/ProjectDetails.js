import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../../App";
import { FaRegHandPointRight,FaGift ,FaGithub} from "react-icons/fa";
const ProjectDetails = () => {
  const id = useParams();
  const [project, setProject] = useState([]);
  const [projects] = useContext(ProductContext);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [id, project]);
  // const [projects]=useProductData()
  console.log(projects);
  console.log(id);
  // console.log(projects)
  return (
    <>
      <div className="bg-accent w-screen flex justify-center flex-col items-center py-10">
        <div className="w-[70%] ">
          <div className="grid  grid-cols-2 gap-10">
            <img src={projects?.img1} className="w-[90%] h-[280px]" alt="" />
            <img src={projects?.img2} className="w-[90%] h-[280px]" alt="" />
            <img src={projects?.img3} className="w-[90%] h-[280px]" alt="" />
            <img src={projects?.img4} className="w-[90%] h-[280px]" alt="" />
          </div>
        </div>

        <div className="w-[70%] my-8">
          <h2 className="text-4xl font-semibold"> Features</h2>
          <p className="bg-primary py-1 rounded-lg my-3"></p>
          {projects?.features?.map((feature) => (
            <div className="flex my-2 text-xl items-center">
              <FaRegHandPointRight /> <p className="ml-3">{feature}</p>
            </div>
          ))}
        </div>

        <div className="w-[70%] my-8">
          <h2 className="text-4xl font-semibold">Technologies</h2>
          <p className="bg-primary py-1 my-3 rounded-lg"></p>

          <div className="grid my-5 grid-cols-5 gap-5">
            {projects?.tools?.map((tool) => (
              <div className="bg-primary rounded-lg py-2 flex justify-center items-center">
                <p className="text-xl text-neutral">{tool}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[70%] my-8">
          <h2 className="text-4xl font-semibold"> Links</h2>
          <p className="bg-primary py-1 rounded-lg my-3"></p>
          <div className="grid grid-cols-3 gap-10">
            <button onClick={projects?.lifeSite} className='flex rounded-md bg-primary justify-center items-center py-2 text-neutral '>
            <FaGift/>
            <p className="ml-3">Life Site</p>
            </button>
            <button onClick={projects?.client_link} className='flex rounded-md bg-primary justify-center items-center py-2 text-neutral '>
            <FaGithub/>
            <p className="ml-3">Client Link</p>
            </button>
            <button onClick={projects?.server_link} className='flex rounded-md bg-primary justify-center items-center py-2 text-neutral '>
            <FaGithub/>
            <p className="ml-3">Server Link</p>
            </button>
            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
