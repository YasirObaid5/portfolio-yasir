import Image from 'next/image';
import React, {useState} from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Button from '../../components/Button'

const ShareData = () => {
  const [loading, setLoading] = useState(false);

  const downloadJson = async () => {
    setLoading(true);
    const apiUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=%2F%2F%20*%5B_type%20%3D%3D%20%22project%22%5D%0A*%5B_id%20%3D%3D%20%22b4c6dcc8-7724-4b45-843a-efbfe859234d%22%5D`;
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

const shareMemories = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src="https://cdn.sanity.io/images/69843yax/production/773cc8081770f73736c23c037bb0e50289ea379c-1920x977.jpg"
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Share Memories</h2>
          <h3>React JS / Sanity.Io / Netlify</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          The application was developed with React JS and is currently hosted on Netlify. The app's backend is powered by Sanity.Io. Users can upload their images and leave comments on their own and other users' uploads. It also supports Google account authentication, allowing users to sign up and sign in using their email addresses to manage their accounts and upload photos. This project code is based on an open source project on Github <a
          href='https://github.com/adrianhajdin/project_shareme_social_media'
          target='_blank'
          rel='noreferrer'
          className='text-rose-600'
          > Link</a>
          </p>
          <a
            href='https://github.com/YasirObaid5/share_memories'
            target='_blank'
            rel='noreferrer'
          >
            <Button>Code</Button>
          </a>
          <a
            href='https://share-memories-yasir.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <Button >Demo</Button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>

              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Sanity.Io
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
      
      <ShareData />
    </div>
  );
};

export default shareMemories;
