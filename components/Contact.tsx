import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Button from './Button'
import { useForm, SubmitHandler } from 'react-hook-form'


type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type Props = {};
const Contact = ({}: Props) => {
  const {
    register,
    handleSubmit,
    formState: {  },
} = useForm<Inputs>();
const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:yasir.obaid5@gmail.com?subject=${formData.subject}& body=Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`
};

  return (
    <div id='contact' >
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
      <div className='bg-[#d0d4d6] my-2 p-4 w-full flex justify-between items-center'>
        <h1 className='mt-14 text-xl tracking-widest uppercase text-[#010e0a]'>
          Contact
        </h1>
        </div>
       
        <div className='grid lg:grid-cols-5 gap-8 w-full lg:h-screen max-w-[940px] mx-auto p-2 pt-[120px]'
      
        >
         
          <div className='flex col-span-4 bg-gray-300 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                     {...register('name')}
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                  {...register('email')}
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                  {...register('subject')}
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                  {...register('message')}
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <Button >
                  Send Message
                </Button>
              </form>
            </div>
            <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/yasir-al-shukaili-2808b428/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='space-x-3 mr-8 font-semibold bg-gradient-to-r from-blue-500 to-purple-600
      text-gray-100 rounded-full ring-2 ring-slate-400 px-3 py-2 
      hover:bg-white hover:text-white hover:ring-slate-300 mx-8 shadow-lg shadow-slate-800/100'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/YasirObaid5'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='space-x-3 mr-8 font-semibold bg-gradient-to-r from-blue-500 to-purple-600
      text-gray-100 rounded-full ring-2 ring-slate-400 px-3 py-2 
      hover:bg-white hover:text-white hover:ring-slate-300 mx-8 shadow-lg shadow-slate-800/100'>
                      <FaGithub />
                    </div>
                  </a>

                  <div className='space-x-3 mr-8 font-semibold bg-gradient-to-r from-blue-500 to-purple-600
      text-gray-100 rounded-full ring-2 ring-slate-400 px-3 py-2 
      hover:bg-white hover:text-white hover:ring-slate-300 mx-8 shadow-lg shadow-slate-800/100'>
                    <AiOutlineMail />
                  </div>
                  <Link href='/resume' legacyBehavior>
                    <a>
                      <div className='space-x-3 mr-8 font-semibold bg-gradient-to-r from-blue-500 to-purple-600
      text-gray-100 rounded-full ring-2 ring-slate-400 px-3 py-2 
      hover:bg-white hover:text-white hover:ring-slate-300 mx-8 shadow-lg shadow-slate-800/100'>
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
            
              </div>
            
          </div>       
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/' legacyBehavior>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
