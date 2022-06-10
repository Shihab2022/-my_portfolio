import React from 'react';
import html from '../../assets/icon/html.png'
import css from '../../assets/icon/css.png'
import bootstrap from '../../assets/icon/bootstrap.png'
import firebase from '../../assets/icon/firebase.png'
import mongodb from '../../assets/icon/mongodb.png'
import react from '../../assets/icon/react.png'
import tailwind from '../../assets/icon/tailwind.png'
import js from '../../assets/icon/js.jpg'
const About = () => {
    return (
        <>
       <div className=' bg-accent   w-screen flex items-center flex-col'>
       <h1 className='text-7xl text-center font-bold uppercase py-10'>about me</h1>


       <div className='w-[70%] mb-5'>
            <div className='flex flex-col items-center'>
            <p className='text-4xl font-bold border-b-4 my-3 border-primary'>PERSONAL INFOS</p>
            <h1 className='text-3xl font-bold mt-3 mb-2 text-primary uppercase'>Md : shihab uddin</h1>
            <p className='text-3xl font-bold mb-3 uppercase'>Junior Web Developer</p>
            <p className='text-xl w-[85%]'>I am a junior web developer and a web development learner also. Creating a creative web application is my passion. It is too much enjoyable work creating new web applications or adding any new features to me. I am comfortable working in Front-End web development. But I can do the Back-End part also.</p>
            </div>


            
       </div>
       <div className='w-[70%] my-5'>

       <div className='flex flex-col items-center'>
       <p className='text-4xl font-bold border-b-4 my-3 border-primary'>MY SKILLS</p>
<div>
  <p className='text-4xl text-center font-bold mt-3 mb-8'>Expertise:</p>

  <div className='grid grid-cols-4 gap-5'>
    <div className='py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent '>
      <img src={html} className='h-3/4' alt="" />
      <h1 className='uppercase text-2xl mt-4 text-neutral'>html</h1>
    </div>
    <div className='py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent '>
      <img src={css} className='h-3/4' alt="" />
      <h1 className='uppercase text-2xl mt-4 text-neutral'>css</h1>
    </div>
    <div className='py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent '>
      <img src={bootstrap} className='h-3/4' alt="" />
      <h1 className='uppercase text-2xl mt-4 text-neutral'>bootstrap</h1>
    </div>
    <div className='py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent '>
      <img src={js} className='h-3/4' alt="" />
      <h1 className='uppercase text-2xl mt-4 text-neutral'>js</h1>
    </div>
    <div className='py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent '>
      <img src={react} className='h-3/4' alt="" />
      <h1 className='uppercase text-2xl mt-4 text-neutral'>react</h1>
    </div>
    <div className='py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent '>
      <img src={tailwind} className='h-3/4' alt="" />
      <h1 className='uppercase text-2xl mt-4 text-neutral'>tailwind</h1>
    </div>
    <div className='py-7 w-full px-5 flex flex-col justify-center items-center shadow-2xl bg-info rounded-lg shadow-accent '>
      <img src={firebase} className='h-3/4' alt="" />
      <h1 className='uppercase text-2xl mt-4 text-neutral'>firebase</h1>
    </div>
  </div>
</div>

       </div>
       </div>
       </div>
        
      
 
        </>
    );
};

export default About;