import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import NavLogo from '../public/assets/logo.jpg'
import Button from "./Button";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { useTheme } from "next-themes";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#e3e3e1');
  const [linkColor, setLinkColor] = useState('#4f520b');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);
  useEffect(() => {
    setMounted(true);
  }, []);
  const navigations = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/#project' },
    { label: 'Blog', path: '/#blog' },
    { label: 'About', path: '/#about' },
    { label: 'Contact', path: '/#contact' },
    { label: 'Curriculum Vitae', path: '/cv' },
  ];
  const navIcons = [
    {icon: <FaLinkedinIn /> , path:'https://www.linkedin.com/in/yasir-al-shukaili-2808b428/' },
    {icon:<FaGithub /> , path: 'https://github.com/YasirObaid5'},
    {icon:<AiOutlineMail/> , path:'/#contact' },
    {icon:<BsFillPersonLinesFill/> , path:'/resume' },
  ]
  const renderThemeChanger = () => {
    if(!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    if(currentTheme === 'dark') {
      return (
        <Button className="bg-gray-200 dark:bg-gray-600"
          onClick={() => setTheme('light')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        </Button>
      )
    } else {
      return (
        <Button className="bg-gray-200"
          onClick={() => setTheme('dark')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </Button>
      )
    }

  }

  return (
    <>
    
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-15 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-15 z-[100]'
      }
    >

      <div className='grid grid-flow-col justify-stretch items-center h-auto w-full shadow-xl shadow-gray-400 group hover:bg-gradient-to-r from-[#33e7a2] to-[#709dff]'>
        <Link href='/' legacyBehavior>
          <a>
            <Image
             class="flex space-x-3 mr-8 font-semibold bg-gradient-to-r from-blue-500 to-purple-600
             text-gray-100 rounded-full ring-2 ring-slate-400 px-3 py-2 
             hover:bg-white hover:text-white hover:ring-slate-300 mx-8 shadow-lg shadow-slate-800/100"
              src={NavLogo}
              alt='/'
              width='70'
              height='60'
              className='cursor-pointer h-17 w-17 rounded-full'
            />
          </a>
        </Link>
       
        <div>
          <ul style={{ color: `${linkColor}` }} className=' font-Caveat hidden md:flex justify-center items-center '>
          {navigations.map(nav => (
            <li className='ml-10 text-sm hover:border-b hover:scale-150 ease-out-in duration-300  '>
              <Link href={nav.path} legacyBehavior>{nav.label}</Link>
            </li>
            ))}
          </ul>
         
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
           
        </div>
        <div className="h-16 flex items-center justify-between">
          {renderThemeChanger()}
        </div>
        
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        
        {/* Side Drawer Menu */}
        
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#e3e3e1] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/' legacyBehavior>
                <a>
                  <Image
                    src={NavLogo}
                    width='87'
                    height='35'
                    alt='/'
                    className='cursor-pointer h-17 w-17 rounded-full'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
            {navigations.map(nav => (
              <Link href={nav.path} legacyBehavior>
                <li onClick={() => setNav(false)} className='py-5 text-sm'>
                  {nav.label}
                </li>
              </Link>
            ))}
              
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#0b0b0c]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
              {navIcons.map(nav => ( 
                 <a
                  href={nav.path}
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    {nav.icon}
                  </div>
                </a>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;