import React from "react";
import {
  FaMap,
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
  FaBasketballBall,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="bg-accent min-h-screen md:pb-0 pb-32 w-screen">
        <h1 className="md:text-7xl  text-5xl text-center font-bold uppercase py-8 md:py-10">
          CONTACT me
        </h1>
        <div class="hero h-[100%] ">
          <div class="hero-content flex-col lg:flex-row">
            <div className="md:px-0 md:py-0 px-[8%] py-[10%]">
              <h1 className="text-4xl uppercase mb-3 font-bold">
                get in touch
              </h1>
              <p>
                Send me an email if uou think that i can help you out with any
                of web related project .
              </p>
              <div className="flex  my-5 items-center">
                <FaMap className="text-primary text-5xl" />
                <div className="ml-10">
                  <p className="text-xl font-bold">ADDRESS POINT</p>
                  <p className="font-semibold">
                    Chapai Nawabganj , <br /> Rajshahi , Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex  my-5 items-center">
                <FaEnvelopeOpen className="text-primary text-5xl" />
                <div className="ml-10">
                  <p className="text-xl font-bold uppercase">email me</p>
                  <p className="font-semibold">uddinmdshihab452@gmail.com</p>
                </div>
              </div>
              <div className="flex  my-5 items-center">
                <FaPhoneSquareAlt className="text-primary text-5xl" />
                <div className="ml-10">
                  <p className="text-xl font-bold uppercase">CALL ME</p>
                  <p className="font-semibold">01778825868</p>
                </div>
              </div>
              <div className="flex mt-10">
                <FaFacebook className="p-3 hover:bg-primary bg-info rounded-full text-white text-5xl" />
                <FaLinkedinIn className="p-3 hover:bg-primary bg-info rounded-full text-white text-5xl mx-5" />
                <FaGithub className="p-3 hover:bg-primary bg-info rounded-full text-white text-5xl" />
                <FaBasketballBall className="p-3 hover:bg-primary bg-info rounded-full text-white text-5xl ml-5" />
              </div>
            </div>
            <div className="md:w-[70%] w-full px-5 text-black">
              <form action="">
                <div className="md:flex justify-around ">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="px-5 ml-3 py-4 rounded-full w-full md:w-[50%]"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-5 ml-2 py-4 rounded-full w-full md:mt-0 mt-4 md:w-[50%]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter your subject"
                  className="px-5 my-5 ml-4 py-4 rounded-full w-full"
                />
                <textarea
                  placeholder="Enter your message"
                  className="px-5 my-5 ml-4 py-5 h-48 rounded-lg w-full"
                ></textarea>
                <input
                  type="submit"
                  value="send message"
                  className=" ml-3 rounded-full text-neutral py-3 uppercase px-8 border-2 border-primary text-xl"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
