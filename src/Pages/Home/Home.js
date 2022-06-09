import React from "react";
import my_img from '../../assets/img/my_img.jpg'
const Home = () => {
  return (
    <div className="bg-accent h-screen w-screen">
      <div>
        <div class="hero min-h-screen ">
          <div class="hero-content flex-col lg:flex-row">
         <div className="w-[40%]">
         <img
              src={my_img}
              class="max-w-sm rounded-lg h-[450px] w-[400px] shadow-2xl" alt=''
            />
         </div>
            <div className="w-[60%]">
              <h1 class="text-5xl text-primary font-bold uppercase">- I,m  shihab uddin</h1>
              <h1 class="text-5xl text-neutral ml-8 mt-1 font-bold uppercase">WEB developer</h1>
              <p class="py-6 text-xl">
              I'm front-end developer focused on crafting clean and user friendly experience , I am passionate about building excellent website as if user fell better experience .
              </p>
              <div>
              <button class="py-2 px-10  text-xl flex justify-between items-center font-semibold border-2 border-primary rounded-full">My Resume</button>
              {/* <button class="btn btn-outline btn-primary">Button</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
