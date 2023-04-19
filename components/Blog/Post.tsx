import { PortableText } from "@portabletext/react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { client } from "../../lib/client";
import Head from "next/head";

const builder = imageUrlBuilder(client);

export default function Post({ post }: { post: SanityDocument }) {
  return (
    <>
      <Head >
        <title>{post.title}</title>
      </Head>
      <main className="container mx-auto prose prose-lg p-4 margin-inline-start: 10px">
        <h1 className="mt-14 text-xl tracking-widest uppercase text-[#010e0a]">{post.title}</h1>
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={builder.image(post.mainImage).width(300).height(300).url()}
          width={300}
          height={300}
          alt={post.title}
        />
        <PortableText value={post.body}/>
        <PortableText value={post.publishedAt} />
      </main>
    </>
  );
}