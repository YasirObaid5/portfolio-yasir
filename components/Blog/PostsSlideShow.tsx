import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Head from "next/head";
import Image from 'next/image'
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../lib/client";
import { useState } from 'react';
import PostData from '../../lib/data/postData';
import Button from '../Button'
import { Carousel } from 'react-responsive-carousel';
const builder = imageUrlBuilder(client);
// NEXT_PUBLIC_SANITY_PROJECT_ID

const LOAD_MORE_STEP = 4;

export default function PostsSlideShow({ posts }: { posts: SanityDocument[] }) {
  
  const Url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D`


  return (
    <div >
      <div className='bg-[#d0d4d6] my-2 p-4 w-full flex  items-center'>
      <div className='mt-14 text-xl tracking-widest uppercase text-[#010e0a]'>
            My Blog 
          </div>
       </div>   
      <div >
         

        <div className="max-w-[940px] mx-auto p-2 pt-[120px]" >
         
        
        <Carousel>
        { posts.map((post, index) => (
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
      </Carousel>
        </div>
        </div>
     
    </div>
  );
}