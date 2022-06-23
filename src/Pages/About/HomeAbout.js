import React from 'react';
import './HomeAbout.css'
const HomeAbout = () => {
    return (
        <div className='h-screen flex justify-center py-32 w-full bg-accent'>
            <div className='  w-[70%] h-5'>
<div className='grid grid-cols-2 gap-5'>
<div className='bg-rose-300'>
<p>kfk</p>
</div>
<div className='px-10 py-5'>
    <div>
        <h1 className='uppercase text-3xl font-bold'>My Skill</h1>
        <p className='my-1'>Some Skills I'm still polishing by working through and some skills I have mastered.</p>
    </div>
<div className='grid grid-cols-3 py-5 gap-10'>
    <div className='skill1 skill flex flex-col bg-white justify-bottom py-5 items-center '>
        <h1 className='text-2xl font-semibold '>80%</h1>
        <p className=' uppercase'>html</p>
    </div>
    <div className='skill2 skill flex flex-col justify-bottom py-5 items-center '>
        <h1 className='text-2xl font-semibold '>75%</h1>
        <p className=' uppercase'>css</p>
    </div>
    <div className='skill3 skill flex flex-col justify-bottom py-5 items-center '>
        <h1 className='text-2xl font-semibold '>85%</h1>
        <p className=' uppercase'> Tailwind</p>
    </div>
    <div className='skill4 skill flex flex-col justify-bottom py-5 items-center '>
        <h1 className='text-2xl font-semibold '>70%</h1>
        <p className=' uppercase'>javaScript</p>
    </div>
    <div className='skill5 skill flex flex-col justify-bottom py-5 items-center '>
        <h1 className='text-2xl font-semibold '>75%</h1>
        <p className=' uppercase'>react</p>
    </div>
    <div className='skill6 skill flex flex-col justify-bottom py-5 items-center '>
        <h1 className='text-2xl font-semibold '>60%</h1>
        <p className=' uppercase'> Firebase</p>
    </div>


</div>
</div>
</div>
            </div>
        </div>
    );
};

export default HomeAbout;