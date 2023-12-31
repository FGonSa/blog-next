
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";
import {PortableText} from "@portabletext/react";
import { RichTextComponents } from "@/app/components/RichTextComponent";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined }
};

//METADATA DINÁMICA
export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.slug

  return{
    title: "Franky's Next Blog - " + id,
    description: id
  }
}

export const revalidate = 60; // revalidate this page every 60 seconds

export async function generateStaticParams() {
  const query = groq`*[_type=='post']
    {
      slug
    }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function Post({ params: { slug } }: Props) {
  const query = groq`*[_type=='post' && slug.current == $slug][0]
    {
      ...,
      author->,
      categories[]->
    }`;

  const post: Post = await client.fetch(query, { slug: slug });

  

  return (
    <article className="px-10 pb-28">
      <Link className="font-semibold" href="/">🡐 Volver</Link>
      <section className="space-y-2 border border-[#45b1e8] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          <section className="p-5 bg-[#45b1e8] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  className="rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />

                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div className="line-clamp-2 text-ellipsis text-xs text-white">
                    <PortableText
                      value={post.author.bio}
                      components={RichTextComponents}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <h2 className="italic pt-10">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <div
                    key={category._id}
                    className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                  >
                    {category.title}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
}

export default Post;