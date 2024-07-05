import React from "react";
import html from "../../assets/icon/html.png";
import css from "../../assets/icon/css.png";
import bootstrap from "../../assets/icon/bootstrap.png";
import firebase from "../../assets/icon/firebase.png";
import mongodb from "../../assets/icon/mongodb.png";
import react from "../../assets/icon/react.png";
import tailwind from "../../assets/icon/tailwind.png";
import js from "../../assets/icon/js.jpg";
import express_js from "../../assets/icon/express_js.png";
import next_js from "../../assets/icon/next_js.png";
import node_js from "../../assets/icon/node_js.png";
import react_native from "../../assets/icon/react_native.png";
import typeScript from "../../assets/icon/typeScript.jpg";
import redux from "../../assets/icon/redux.png";
import github from "../../assets/icon/github.png";
import heroku from "../../assets/icon/heroku.png";
import vs_code from "../../assets/icon/vs_code.png";
import netlify from "../../assets/icon/netlify.png";
import postgresql from "../../assets/icon/postgresql.png";
import git from "../../assets/icon/git.png";
import mui from "../../assets/icon/mui.png";
import ReactTypingEffect from "react-typing-effect";
const About = () => {
  return (
    <>
      <div className=" bg-accent   w-screen flex items-center b-20 flex-col">
        <h1
          data-aos="fade-right"
          className="md:text-6xl text-5xl text-center font-bold uppercase py-10"
        >
          <ReactTypingEffect text={["My Skill", "about me"]} />
        </h1>

        <div className="md:w-[70%] px-3 mb-5">
          <div data-aos="fade-left" className="flex flex-col items-center">
            <p className="md:text-4xl text-3xl text-neutral font-bold border-b-4 my-3 border-primary">
              PERSONAL INFO
            </p>
            <h1 className="text-3xl font-bold mt-3 mb-2 text-primary uppercase">
              Md : shihab uddin
            </h1>

            <p className="md:text-3xl text-primary text-2xl font-bold mb-3 uppercase">
              <ReactTypingEffect
                text={[
                  "WEB developer",
                  "Full Stack developer",
                  "MERN Stack developer",
                ]}
              />
            </p>
            <p className="md:text-xl text-sm w-[85%]">
              I'm full stack developer focused on crafting clean and user
              friendly experience , I am passionate about building excellent
              website as if user fell better experience .I have extensive
              knowledge of JavaScript, TypeScript ,SQL,Next.js , React
              ,PostgreSQL ,MongoDB ,Node , Express ,Redux,Material UI , Tailwind
              etc . I have combined work with us communication and
              problem-solving skills. Last 1.8+ year I am working on Sptic as
              Software Engineer.
            </p>
            <a
              href="https://drive.google.com/file/d/1AVhEON4sZzX5oolg1_bFzqEQ80Ew5S8D/view"
              target="_blank"
            >
              <button
                href="www.facebook.com"
                className="default-btn py-1 px-5  text-xl   border-2 border-primary rounded-full"
              >
                My Resume
              </button>
            </a>
          </div>
        </div>
        <div className="md:w-[70%] px-3 my-5">
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold border-b-4 my-3 border-primary">
              MY SKILLS
            </p>
            {/* Expertise */}
            <div>
              <p className="md:text-4xl text-2xl text-center font-bold uppercase mt-3 mb-8">
                Expertise
              </p>

              <div className="grid lg:grid-cols-4 text-secondary  md:grid-cols-2 grid-cols-1 gap-5">
                <div
                  data-aos="fade-down-left"
                  className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent "
                >
                  <img src={js} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">js</h1>
                </div>
                <div
                  data-aos="flip-left"
                  className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent "
                >
                  <img src={typeScript} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    typeScript
                  </h1>
                </div>
                <div
                  data-aos="fade-up-right"
                  className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent "
                >
                  <img src={react} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    react
                  </h1>
                </div>
                <div
                  data-aos="fade-down-right"
                  className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent "
                >
                  <img src={postgresql} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    postgresql
                  </h1>
                </div>
                <div
                  data-aos="fade-down-right"
                  className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent "
                >
                  <img src={mongodb} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    mongodb
                  </h1>
                </div>
                <div
                  data-aos="flip-left"
                  className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent "
                >
                  <img src={express_js} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    express js
                  </h1>
                </div>
                <div
                  data-aos="flip-right"
                  className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent "
                >
                  <img src={next_js} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    next js
                  </h1>
                </div>

                <div
                  data-aos="fade-down-left"
                  className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent "
                >
                  <img src={node_js} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    node js
                  </h1>
                </div>
                <div
                  data-aos="flip-right"
                  className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent "
                >
                  <img src={redux} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    redux
                  </h1>
                </div>
                <div
                  data-aos="flip-right"
                  className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent "
                >
                  <img src={mui} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">mui</h1>
                </div>
                <div
                  data-aos="flip-right"
                  className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent "
                >
                  <img src={tailwind} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    tailwind
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Comfortable */}
          {/* <div className="flex flex-col px-20 items-center">
            <div>
              <p className="text-4xl text-center uppercase  font-bold my-10">
                Comfortable
              </p>

              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">

              </div>
            </div>
          </div> */}
          {/* Familiar */}
          <div className="flex flex-col px-20 items-center">
            <div>
              <p className="text-4xl text-center uppercase  font-bold my-10">
                Familiar
              </p>

              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                <div
                  data-aos="fade-down-right"
                  className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent "
                >
                  <img src={react_native} className="h-3/4" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* tools */}

          <div className="flex flex-col px-20 items-center">
            <div>
              <p className="text-4xl text-center uppercase  font-bold my-10">
                tools
              </p>

              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                <div
                  data-aos="fade-down-right"
                  className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent "
                >
                  <img src={github} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    github
                  </h1>
                </div>
                <div
                  data-aos="flip-left"
                  className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent "
                >
                  <img src={git} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">git</h1>
                </div>
                <div
                  data-aos="flip-right"
                  className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent "
                >
                  <img src={vs_code} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    vs code
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* end */}
        </div>
      </div>
    </>
  );
};

export default About;
