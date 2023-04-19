import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faSchool, faCode } from '@fortawesome/free-solid-svg-icons';
import Work from '../public/assets/work.png'
import Image from 'next/image';

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' }
};
const CodeIcon = {
  icon: <FontAwesomeIcon icon={faCode}/>,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' }
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' }
};


  
  

function About(Url) {
  const timeline = [

    { icon: CodeIcon, date: '', title: 'My hobbies and interests', subtitle: '', desc: ' Popular Science Magazine and history books reading, and Swimming' },
    { icon: CodeIcon, date: 'April 2021 - present', title: 'Self-taught programmer', subtitle: 'Frontend developer', desc: ' React.js, HTML, CSS, JavaScript, and Headless CMS' },
    { icon: workIcon, date: '2006 - present', title: 'Head of Livestock Reproduction Research Section', subtitle: '', desc: '(Livestock Production Research Centre) Directorate General of Agriculture & Livestock Research, Ministry of Agriculture, Sultanate of Oman. ' },
    { icon: workIcon, date: '2000 - 2006', title: 'Animal Production specialist ', subtitle: 'Muscat, Sultanate of Oman', desc: '(Rangeland department) General Directorate of Animal Production, Ministry of Agriculture and Fisheries. ' },
    { icon: schoolIcon, date: '2002 - 2005', title: '•	Master of Animal Sciences ', subtitle: 'Master Degree, MSc', desc: 'Peoples Friendship University of Russia in ,2005.' },
    { icon: schoolIcon, date: '1994-1999', title: '•	Bachelor of Sciences (Animal Sciences)', subtitle: 'Bachelor Degree, BSc', desc: 'Sultan Qaboos University, Oman, 1999.' },
    
  ];
  

  return (
    <div  id='about' className=''>
      <div >
        <div className=' '>
        <div className=' relative w-full h-[400px] ' >
       
        <Image
          className=' z-5 opacity-50'
          width ={1000}
          height={200}
          src={Work}
          alt=''
        />
        <div className='top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        
        
        </div>
        </div>
         
        </div>
        
        <div className=' margin-inline-end: 300px'>
        <div className='py-2 text-justify '>
          <div className='bg-[#d0d4d6] my-2   '>
            <p className='flex mt-14 text-xl tracking-widest uppercase text-[#010e0a] py-2'>About Me</p>
          </div>
           <p className='about-container'>
          I am an animal reproduction researcher. I have 23 years of experience in livestock reproduction research, currently working in Artificial insemination Lab.  Also, as a self-taught programmer, I am proficient in React.js, HTML, CSS, and JavaScript, allowing me to bring a unique skill set to my work by combining animal science expertise with innovative programming technology. This enables me to tackle challenges with a fresh perspective and a dedication to finding cutting-edge solutions.
        </p>
        </div>
          
         
         </div>

        <VerticalTimeline>
        {timeline.map((t, i) => {
         
          return <VerticalTimelineElement
            key={i}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={t.date}
            {...t.icon}
          >
            {t.title ? <React.Fragment>
              <h3 className="vertical-timeline-element--education">{t.title}</h3>
              {t.subtitle && <h4 className="vertical-timeline-element-subtitle">{t.subtitle}</h4>}
              {t.desc && <p>{t.desc}</p>}
            </React.Fragment> : undefined}
          </VerticalTimelineElement>
        })}
      </VerticalTimeline>
      
      </div>
  
      
    </div>
  );
}

export default About;