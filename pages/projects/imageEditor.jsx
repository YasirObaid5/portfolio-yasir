import Image from 'next/image';
import React, { useState } from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';


const ProjectData = () => {
  const [loading, setLoading] = useState(false);

  const downloadJson = async () => {
    setLoading(true);
    const apiUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=%2F%2F%20*%5B_type%20%3D%3D%20%22project%22%5D%0A*%5B_id%20%3D%3D%20%2221c16e54-5d11-4780-8e70-04ba5c5e3559%22%5D`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sanity-data.json';
    link.click();
    URL.revokeObjectURL(url);
    setLoading(false);
  };

  return (
    <button onClick={downloadJson} disabled={loading} className={` space-x-3 mr-8 font-semibold bg-gradient-to-r from-blue-500 to-purple-600
    text-gray-100 rounded-full ring-2 ring-slate-400 px-3 py-2 
    hover:bg-white hover:text-white hover:ring-slate-300 mx-8 shadow-lg shadow-slate-800/100`}>
      {loading ? 'Downloading...' : 'Download JSON'}
    </button>
  );
};



const ImageEditor = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src="https://cdn.sanity.io/images/69843yax/production/0013df0f3ee2bc83f6d75970d5d5a2fbd0e67ae9-1920x977.jpg"
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Image Editor</h2>
          <h3>Javascript/ Html/ CSS / Netlify</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          A Javascript and HTML Image Editor, simple, powerful and user-friendly web application for all your image editing needs, offers a wide range of essential tools and features, allowing you to effortlessly edit, enhance, and transform your images in just a few clicks. Whether you're a professional designer or a casual user, our Javascript Image Editor provides a seamless editing experience, enabling you to unleash your creativity and make your visuals stand out. 
          </p>
          <a
            href='https://github.com/YasirObaid5/Canvas-Image-Editor'
            target='_blank'
            rel='noreferrer'
          >
            <button className={` space-x-3 mr-8 font-semibold bg-gradient-to-r from-blue-500 to-purple-600
      text-gray-100 rounded-full ring-2 ring-slate-400 px-3 py-2 
      hover:bg-white hover:text-white hover:ring-slate-300 mx-8 shadow-lg shadow-slate-800/100`}>Code</button>
          </a>
          <a
            href='https://6430b3ac0ce99322ffe4ec1f--incredible-dodol-2af99e.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className={` space-x-3 mr-8 font-semibold bg-gradient-to-r from-blue-500 to-purple-600
      text-gray-100 rounded-full ring-2 ring-slate-400 px-3 py-2 
      hover:bg-white hover:text-white hover:ring-slate-300 mx-8 shadow-lg shadow-slate-800/100`}>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>

              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Netlify
              </p>
              
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className={` space-x-3 mr-8 font-semibold bg-gradient-to-r from-blue-500 to-purple-600
      text-gray-100 rounded-full ring-2 ring-slate-400 px-3 py-2 
      hover:bg-white hover:text-white hover:ring-slate-300 mx-8 shadow-lg shadow-slate-800/100`}>Back</p>
        </Link>
      </div>
      <ProjectData />
    </div>
  );
};

export default ImageEditor;