import React from 'react'
import Blog from '../components/Blog/Blog'
import Head from 'next/head'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects/Projects'
import About from '../components/About'
import Slideshow from '../components/Blog/PostsSlideShow'

export default function Home(){

  return (
    <>
    <div className=' relative h-screen z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
    <Head>
        <title>Yasir Portfolio</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="h-screen container mx-auto px-4"> 
      
         <Main />
     
     {/* <Overlay /> */}
    <Projects />
    {/* <Slideshow preview/> */}
    <Blog preview  />
    <About/>
    <Contact/>
    {/* <BottomNavigation /> */}
    </div>
   </div> 
   </div>
    </>
  )
}



