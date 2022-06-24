import React from "react";
import "./HomeAbout.css";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
const HomeAbout = () => {
  return (
    <div  className="h-screen flex justify-center lg:pt-20 pt-5  w-full bg-accent">
      <div  className="w-[90%]  lg:w-[80%] h-5">
        
        <div
          
          className="grid lg:grid-cols-2 grid-cols-1 gap-3 lg:gap-5"
        >
            {/* left side */}
          <div
            className="flex justify-center flex-col relative items-center">
            <div 
            data-aos="fade-right"
            className="lg:w-[60%] w-[70%] left-side flex justify-center items-center flex-col lg:h-[90%] h-[250px] ">
              <div  className="uppercase font-semibold">
                <h1 className="text-5xl text-primary ">mern</h1>
                <p>learning</p>
                <p>working</p>
              </div>
              <Link
                to="/about"
                className="default-btn py-2 px-7 absolute lg:right-10 right-0 bottom-0 lg:bottom-10  text-xl   border-2 border-primary rounded-full"
              >
                {" "}
                Details
              </Link>
            </div>
          </div>

          {/* right side */}
          <div data-aos="fade-left" className="lg:px-10 px-4 py-5">
            <div>
              <h1 className="uppercase text-3xl font-bold">  <ReactTypingEffect
        text={["My Skill","about me"]}
      /></h1>
              <p className="my-1">
                Some Skills I'm still polishing by working through and some
                skills I have mastered.
              </p>
            </div>
            <div className="grid grid-cols-3 py-5 gap-3 lg:gap-10">
              <div className="skill1 skill flex flex-col  justify-bottom py-5 items-center ">
                <h1 className="text-2xl font-semibold ">80%</h1>
                <p className=" uppercase">html</p>
              </div>
              <div className="skill2 skill flex flex-col justify-bottom py-5 items-center ">
                <h1 className="text-2xl font-semibold ">75%</h1>
                <p className=" uppercase">css</p>
              </div>
              <div className="skill3 skill flex flex-col justify-bottom py-5 items-center ">
                <h1 className="text-2xl font-semibold ">85%</h1>
                <p className=" uppercase"> Tailwind</p>
              </div>
              <div className="skill4 skill flex flex-col justify-bottom py-5 items-center ">
                <h1 className="text-2xl font-semibold ">70%</h1>
                <p className=" uppercase">javaScript</p>
              </div>
              <div className="skill5 skill flex flex-col justify-bottom py-5 items-center ">
                <h1 className="text-2xl font-semibold ">75%</h1>
                <p className=" uppercase">react</p>
              </div>
              <div className="skill6 skill flex flex-col justify-bottom py-5 items-center ">
                <h1 className="text-2xl font-semibold ">60%</h1>
                <p className=" uppercase"> Firebase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
