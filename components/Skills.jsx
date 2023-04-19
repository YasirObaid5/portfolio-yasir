import Image from 'next/image';
import React from 'react';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import NextJS from '../public/assets/skills/nextjs.png';
import Google from '../public/assets/skills/googleEarth.png';
import Sanity from '../public/assets/skills/sanity.png';
import Animal from '../public/assets/skills/ai.png';


const Skills = () => {
  return (
    <div className=' grid grid-cols-2 lg:grid-cols-4 gap-12'>
        
          <div className=' p-6 shadow-xl bg-white rounded-xl hover:scale-105 ease-in duration-100 shadow-slate-800/100'>
            <div className='grid grid-cols-2 gap-4  justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl bg-white rounded-xl hover:scale-105 ease-in duration-300 shadow-slate-800/100'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl bg-white rounded-xl hover:scale-105 ease-in duration-300 shadow-slate-800/100'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl bg-white rounded-xl hover:scale-105 ease-in duration-300 shadow-slate-800/100'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Google} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Google Earth Engine</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl bg-white rounded-xl hover:scale-105 ease-in duration-300 shadow-slate-800/100'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Sanity} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Sanity.Io</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl bg-white rounded-xl hover:scale-105 ease-in duration-300 shadow-slate-800/100'>
            <div className='grid grid-cols-2 gap-4 justify-center items-left'>
              <div className='m-auto'>
                <Image src={Animal} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center '>
                <h3 className='text-sm font-size: 875rem'>Animal Pro. </h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl bg-white rounded-xl hover:scale-105 ease-in duration-300 shadow-slate-800/100'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind </h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl bg-white rounded-xl hover:scale-105 ease-in duration-300 shadow-slate-800/100'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NextJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next Js </h3>
              </div>
            </div>
          </div>
         
        </div>
  );
};

export default Skills;
