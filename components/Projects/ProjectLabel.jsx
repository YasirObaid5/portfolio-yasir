import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectLabel = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <>
    <di >
    <div className='relative flex items-center justify-centerw-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#33e7a2] to-[#709dff] '>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} width={1920}
          height={977} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <Link href={projectUrl} legacyBehavior>
            <p className='text-center py-2 rounded-lg bg-white text-gray-600 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
 </div>
 </di>
 </>
  )
}

export default ProjectLabel