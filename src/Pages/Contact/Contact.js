import React , { useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {
  FaMap,
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
  FaBasketballBall,
} from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x1dc8yo', 'template_yl4pvq3', form.current, 'PmGyTRdpfhG_xWbVv')
      .then((result) => {
          console.log(result.text);
          if(result){
            toast.success("Thanks for getting your information .")
          }
      }, (error) => {
          if(error){
            toast.error("Sorry ! something wrong please try again")
          };
      });
  };
  return (
    <>
      <div  className="bg-accent min-h-screen md:pb-0 pb-32 w-screen">
        <h1 className="md:text-6xl text-neutral  text-5xl text-center font-bold uppercase py-8 md:py-10">
        <ReactTypingEffect
        text={["CONTACT me","CONTACT me"]}
      /></h1>
        <div   className="hero h-[100%] ">
          <div  className="hero-content flex-col-reverse justify-center items-center lg:flex-row">
            <div data-aos="fade-right" className="md:px-0 md:py-0 px-[8%] py-[10%]">
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
              <a href='https://web.facebook.com/mdshihab.uddin.92372446'  target='_blank'>
              <FaFacebook className="p-3 hover:bg-primary bg-info rounded-full text-white text-5xl" />
              </a>
              <a href='https://www.linkedin.com/in/shihab-uddin-4b6369241/'  target='_blank'>
              <FaLinkedinIn className="p-3 hover:bg-primary bg-info rounded-full text-white text-5xl mx-5" />
              </a>
              <a href='https://github.com/Shihab2022'  target='_blank'>
              <FaGithub className="p-3 hover:bg-primary bg-info rounded-full text-white text-5xl" />
              </a>
              <a href='https://github.com/Shihab2022'  target='_blank'>
              <FaBasketballBall className="p-3 hover:bg-primary bg-info rounded-full text-white text-5xl ml-5" />
              </a>
                
         
               
              </div>
            </div>
            <div data-aos="fade-left" className="md:w-[70%] w-full px-5 text-black">
              <form ref={form} onSubmit={sendEmail}>
                <div className="md:flex justify-around ">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="from_name"
                    required
                    className="px-5 ml-3 py-4 rounded-full w-full md:w-[50%]"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="user_email" 
                    required
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
                  name="message"
                  required
                  className="px-5 my-5 ml-4 py-5 h-48 rounded-lg w-full"
                ></textarea>
                <input
                  type="submit"
                  value="send message"

                  className="default-btn py-2 px-6  text-xl   border-2 border-primary rounded-full"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
