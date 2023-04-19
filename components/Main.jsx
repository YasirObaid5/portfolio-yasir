import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Yasir from '../public/assets/background.png'
import Skills from './skills'
import { motion } from 'framer-motion';
const Main = () => {

  const imageVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 20, opacity: 50 },
  };
  
  const divVariants = {
    initial: { y: 70, opacity: 0 },
    animate: { y: 10, opacity: 1 },
  };
  const textVariants = {
    initial: { y: 700, opacity: 20 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    
    <div id='home' className='flex max-w-[1240px]   mx-auto text-center items-center justify-between border-y py-10 lg:py-0'>
      <div className='max-w-[1240px] h-scree w-full mx-auto p-2 flex justify-center items-center'>
       
        <div className=' title-container mt 20 uppercase text-sm tracking-widest top: 50px'>
          <p  className='text-4xl font-semibold mt-20 font-Lobster'>
            Welcome to My Portfolio
          </p>
           
          <div className='flex  items-center justify-between py-3'>
          <div className='grid grid-cols-4 lg:grid-cols-2 gap-12'>
        
      <motion.div
      className="hero-container"
      initial="initial"
      animate="animate"
      transition={{ staggerChildren: 0.2 }}
    > 
    
     <div >
    <motion.div variants={imageVariants} transition={{ duration: 0.9 }}>
      
                  </motion.div>
                  </div> 
                  </motion.div> 
                  </div>
                </div>
          
      <div>
      <motion.div
      className="hero-container"
      initial="initial"
      animate="animate"
      transition={{ staggerChildren: 0.2 }}
    > 
   
     <div className="image-container shadow-slate-800/100 ">
  
    <motion.div variants={textVariants} transition={{ duration: 0.9 }}>
   
       <p class="font-Caveat text-sm font-medium group-hover:text-slate-900">Yasir Obaid Al-Shukaili.</p>
    <p class="font-Caveat text-sm font-medium group-hover:text-slate-900">Front-End Developer</p>
    <p class="text-sm font-medium text-slate-500 group-hover:text-slate-700">and</p>
    <p class="font-Caveat text-sm font-medium group-hover:text-slate-900">Animal Production Specialist</p>    
        </motion.div>
    <motion.div variants={divVariants} transition={{ duration: 0.9 }}>
    <div class="group flex items-center ">
          <Image 
          src={Yasir}
          lat=""
          width= {200}
          height={200}
          >

          </Image>
          <div class="ltr:ml-3 rtl:mr-3">
   
          </div>
          </div> 
          </motion.div> 
        </div>  
          {/* Skills */}
          <div className='max-w-[640px] mx-auto flex flex-col justify-center h-full'>
        <div className='threeD text-xl tracking-widest uppercase text-[#030303]'>
         My  Skills
        
        </div>
        
         {/* Skills */}
         <motion.div
        className="text-container"
        variants={divVariants}
        transition={{ duration: 0.9 }}
      >
        <div className=' flex max-w-[1240px]  mx-auto text-center items-center justify-between border-y py-10 '>
        <Skills  />
        </div>
        </motion.div>
        </div>   
        </motion.div>  
      </div>
          
          
        </div>
      </div>
    </div>
    
  );
};

export default Main;
