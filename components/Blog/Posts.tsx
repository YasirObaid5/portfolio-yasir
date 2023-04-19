import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Head from "next/head";
import Image from 'next/image'
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../lib/client";
import { useState } from 'react';
import PostData from '../../lib/data/postData';
import Button from '../Button'
const builder = imageUrlBuilder(client);
// NEXT_PUBLIC_SANITY_PROJECT_ID

const LOAD_MORE_STEP = 4;

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  
  const Url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D`
  const [ postNum, setPostNum] = useState(4); // Default number of posts dislplayed
  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 4) // 4 is the number of posts you want to load per click
  
  };
  return (
    <div >
      {/* <div className='bg-[#d0d4d6] my-2 p-4 w-full flex justify-between items-center'>
      <h1 className='mt-14 text-xl tracking-widest uppercase text-[#010e0a]'>
            My Blog 
          </h1>
       </div>    */}
      <div className="project-container flex items-center justify-between  border-y  py-10 lg:py-0 ">
         

        <div className=" grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3 " >
         
        
    
        { posts.slice(0, postNum).map((post, index) => (
          <Link key={post._id} href={post.slug.current} className="p-4 hover:bg-blue-50">
             <div className="group cursor-pointer overflow-hidden rounded-lg border">
             <span key={index}>   
            <Image
          className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
          src={builder.image(post.mainImage).width(200).height(200).url()}
          width={200}
          height={200}
          alt={post.title}
        />
         </span>
            <span className="tracking-widest uppercase text-lg font-medium text-black-400 mb-1">
              {post.title}</span>
              <div>
                <span className="py-4 text-justify sm:max-w-[70%] m-auto">
              {post.description}</span> 
              </div>
              <div>
                <span className="py-4 text-sm text-gray-500 text-justify sm:max-w-[70%] m-auto">
              {new Date(post.publishedAt).toDateString()}</span> 
              </div> 
              
            </div>
          </Link>
        ))}
         <div>
           <Button onClick={handleClick}>Load More</Button>
        </div>
        </div>
       
        <PostData Url={Url}/>
        </div>
     
    </div>
  );
}