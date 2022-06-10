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
const About = () => {
  return (
    <>
      <div className=" bg-accent   w-screen flex items-center pb-20 flex-col">
        <h1 className="md:text-7xl text-5xl text-center font-bold uppercase py-10">
          about me
        </h1>

        <div className="md:w-[70%] px-3 mb-5">
          <div className="flex flex-col items-center">
            <p className="md:text-4xl text-3xl font-bold border-b-4 my-3 border-primary">
              PERSONAL INFO
            </p>
            <h1 className="text-3xl font-bold mt-3 mb-2 text-primary uppercase">
              Md : shihab uddin
            </h1>

            <p className="md:text-3xl text-2xl font-bold mb-3 uppercase">
              Junior Web Developer
            </p>
            <p className="md:text-xl text-sm w-[85%]">
              I am a junior web developer and a web development learner also.
              Creating a creative web application is my passion. It is too much
              enjoyable work creating new web applications or adding any new
              features to me. I am comfortable working in Front-End web
              development. But I can do the Back-End part also.
            </p>
            <a
              href="https://drive.google.com/file/d/1AVhEON4sZzX5oolg1_bFzqEQ80Ew5S8D/view"
              target="_blank"
            >
              <button
                href="www.facebook.com"
                class="py-2 px-20 mt-8  text-xl flex justify-between items-center font-semibold border-2 border-primary rounded-full"
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

              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent ">
                  <img src={html} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">html</h1>
                </div>
                <div className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent ">
                  <img src={css} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">css</h1>
                </div>
                <div className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent ">
                  <img src={bootstrap} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    bootstrap
                  </h1>
                </div>
                <div className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent ">
                  <img src={js} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">js</h1>
                </div>
                <div className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent ">
                  <img src={react} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    react
                  </h1>
                </div>
                <div className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent ">
                  <img src={tailwind} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    tailwind
                  </h1>
                </div>
                <div className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent ">
                  <img src={firebase} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    firebase
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Comfortable */}
          <div className="flex flex-col px-20 items-center">
            <div>
              <p className="text-4xl text-center uppercase  font-bold my-10">
                Comfortable
              </p>

              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent ">
                  <img src={mongodb} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    mongodb
                  </h1>
                </div>
                <div className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent ">
                  <img src={express_js} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    express js
                  </h1>
                </div>
                <div className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent ">
                  <img src={next_js} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    next js
                  </h1>
                </div>
                <div className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent ">
                  <img src={node_js} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    node js
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* Familiar */}
          <div className="flex flex-col px-20 items-center">
            <div>
              <p className="text-4xl text-center uppercase  font-bold my-10">
                Familiar
              </p>

              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent ">
                  <img src={react_native} className="h-3/4" alt="" />
                </div>
                <div className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent ">
                  <img src={typeScript} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    typeScript
                  </h1>
                </div>
                <div className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent ">
                  <img src={redux} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    redux
                  </h1>
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
                <div className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent ">
                  <img src={github} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                    github
                  </h1>
                </div>
                <div className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent ">
                  <img src={heroku} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                  heroku
                  </h1>
                </div>
                <div className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent ">
                  <img src={vs_code} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                  vs code
                  </h1>
                </div>
                <div className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent ">
                  <img src={netlify} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                  netlify
                  </h1>
                </div>
                <div className="py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent ">
                  <img src={firebase} className="h-3/4" alt="" />
                  <h1 className="uppercase text-2xl mt-4 text-neutral">
                  firebase
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
