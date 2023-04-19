import Image from 'next/image'
import { lazy } from "react";
import { groq } from "next-sanity";
import type { SanityDocument } from "@sanity/client";
import { client } from "../../lib/client";
import Posts from "./Posts";
// import PostsSlideShow from './PostsSlideShow';
import { PreviewSuspense } from "next-sanity/preview";

const PreviewPostsSlideShow = lazy(() => import("./PreviewPostsSlideShow"));
const PreviewPosts = lazy(() => import("./PreviewPosts"));
const query = groq`*[_type == "post" && defined(slug.current)]{
  _id,
  title,
  description,
  publishedAt,
  slug,
  mainImage,
}`;

export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query);

  return { props: { preview, data } };
};

export default function Blog({
  preview,
  data,
}: {
  preview: Boolean;
  data: SanityDocument[];
}) {

  // PreviewSuspense shows while data is being fetched
  // The fetch happens inside PreviewPosts
  return preview ? (
    <div id="blog" >
      <div className="space-y-3 px-5">
    <PreviewSuspense fallback="Loading...">
      <PreviewPostsSlideShow query={query} />
      <PreviewPosts query={query} />
    </PreviewSuspense>
    </div>
    </div>
  ) : (
    <>
    <PostsSlideShow posts={data} />
    <Posts posts={data} />
    </>
  );
}