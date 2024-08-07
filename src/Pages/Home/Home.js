import React from "react";
import my_img from "../../assets/img/my_img.jpg";
import HomeAbout from "../About/HomeAbout";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import ReactTypingEffect from "react-typing-effect";
const Home = () => {
  return (
    <>
      <div className="bg-accent  h-screen w-screen">
        <div>
          <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
              <div className="md:w-[40%]">
                <img
                  data-aos="fade-down"
                  data-aos-duration="2500"
                  src={my_img}
                  className="max-w-sm md:rounded-lg md:h-[450px] md:w-[400px] rounded-full w-[250px] h-[250px] md:border-4 border-8 border-primary "
                  alt=""
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="2500"
                className="md:w-[60%]  flex md:justify-start justify-center md:items-start items-center flex-col"
              >
                <h1 className="md:text-5xl  text-3xl text-primary font-bold uppercase">
                  - I,m shihab uddin
                </h1>
                <h1 className="md:text-5xl  text-3xl text-neutral ml-8 mt-1 font-bold uppercase">
                  {" "}
                  <ReactTypingEffect
                    text={[
                      "WEB developer",
                      "Full Stack developer",
                      "MERN Stack developer",
                    ]}
                  />
                </h1>
                <p className="py-6 text-xl">
                  I'm full stack developer focused on crafting clean and user
                  friendly experience , I am passionate about building excellent
                  website as if user fell better experience .I have extensive
                  knowledge of JavaScript, TypeScript ,SQL,Next.js , React
                  ,PostgreSQL ,MongoDB ,Node , Express ,Redux,Material UI ,
                  Tailwind etc .
                </p>
                <div>
                  <a
                    href="https://drive.google.com/file/d/1AVhEON4sZzX5oolg1_bFzqEQ80Ew5S8D/view"
                    target="_blank"
                  >
                    <button
                      href="www.facebook.com"
                      className="default-btn py-2 px-7  text-xl   border-2 border-primary rounded-full"
                    >
                      My Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeAbout />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
