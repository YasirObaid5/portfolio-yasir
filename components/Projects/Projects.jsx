
import React, { useState } from 'react';
import ProjectData from '../../lib/data/projectData'
import Button from '../Button'
import ProjectLabel from './ProjectLabel';

const Projects = () => {
  const [postNum, setPostNum] = useState(1); // Default number of posts dislplayed
  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 1) // 1 is the number of posts you want to load per click

  };
  const projects = [
    { title: 'Share Memories', backgroundImg: `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/773cc8081770f73736c23c037bb0e50289ea379c-1920x977.jpg`, projectUrl: '/projects/shareMemories', tech: 'React JS' },
    { title: 'Fish Game', backgroundImg: `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/2fbe21abb2540596b48ea5d7ff9bd732f8010e57-1920x929.jpg`, projectUrl: '/projects/fishGame', tech: 'Javascript / HTML / CSS' },
    { title: 'Travel Oman', backgroundImg: `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/56c06286287e7ad4334c46564dac30c76f9f88d4-1920x929.jpg`, projectUrl: '/projects/travel', tech: 'React JS' },
    { title: 'Image Editor', backgroundImg: `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/0013df0f3ee2bc83f6d75970d5d5a2fbd0e67ae9-1920x977.jpg`, projectUrl: '/projects/imageEditor', tech: 'Javascript / HTML / CSS' },
  ]
  return (
    

      <div id="project" div className="h-screen  flex items-center justify-between  "  >
         <div className='mx-auto px-2 py-16 '>
        <div className='bg-[#d0d4d6] my-4 p-4   '>
              <p className='text-xl space-y-2 px-5 tracking-widest uppercase text-[#010e0a]'>
                My Projects
              </p>
            </div>
        <div className=" grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3 ">

         
            
            {/* <div className=" blog-container grid grid-cols-2 gap-3 p-2 justify-between items-center  "> */}
              {projects.slice(0, postNum).map((post, index) => (
                <div className='grid   '>
                  <div >
                    <div className="grid gap-4  ">
                      <ProjectLabel
                        key={index}
                        title={post.title}
                        backgroundImg={post.backgroundImg}
                        projectUrl={post.projectUrl}
                        tech={post.tech}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
           </div> 
          <div className="grid gap-20  ">
            
              <Button onClick={handleClick}>Load More</Button>
              <ProjectData />

          </div>


      </div>
   
  );
};

export default Projects;
