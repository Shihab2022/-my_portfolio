import React from "react";
import my_img from '../../assets/img/my_img.jpg'
import HomeAbout from "../About/HomeAbout";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import ReactTypingEffect from 'react-typing-effect';
const Home = () => {
  return (
    <>
    <div className="bg-accent  h-screen w-screen">
      <div>
        <div class="hero min-h-screen ">
          <div class="hero-content flex-col lg:flex-row">
         <div className="md:w-[40%]">
         <img
              src={my_img}
              class="max-w-sm md:rounded-lg md:h-[450px] md:w-[400px] rounded-full w-[250px] h-[250px] md:border-0 border-8 border-info shadow-info shadow-2xl" alt=''
            />

         </div>
            <div className="md:w-[60%]  flex md:justify-start justify-center md:items-start items-center flex-col">
              <h1 class="md:text-5xl  text-3xl text-primary font-bold uppercase">- I,m  shihab uddin</h1>
              <h1 class="md:text-5xl  text-3xl text-neutral ml-8 mt-1 font-bold uppercase"> <ReactTypingEffect
        text={["WEB developer","React developer", "full-stack developer"]}
      /></h1>
              <p class="py-6 text-xl">
              I'm front-end developer focused on crafting clean and user friendly experience , I am passionate about building excellent website as if user fell better experience .
              </p>
              <div>
              <a href="https://drive.google.com/file/d/1AVhEON4sZzX5oolg1_bFzqEQ80Ew5S8D/view" target='_blank'>
              <button href='www.facebook.com' class="default-btn py-2 px-7  text-xl   border-2 border-primary rounded-full">My Resume</button>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HomeAbout/>
    <Projects/>
    <Contact/>
    </>
  );
};

export default Home;
