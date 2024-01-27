import { client, urlFor } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import Image from 'next/image'
import React from 'react'
 
async function page({params: {slug}}) {

    const query = groq`*[_type == "blog" && slug.current == $slug][0] `

    const data = await client.fetch(query, {slug:slug})



    console.log("fetchedd...", data)
  return  (
    
    <article className='px-10 pb-28'>
        <section className='space-y-2 text-white border-[#F7AB0A]'>
            <div className='relative flex min-h-56 flex-col md:flex-row justify-between'>
                <div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
                    <Image
                         className=' object-cover object-center mx-auto'
                         src={urlFor(data.titleImage).url()}
                         fill
                    />
                </div>
                <section className='p-5 w-full bg-[#F7AB0A]'>
                    <div className='flex flex-col justify-between gap-y-5'>
                        <div>
                            <h1 className='text-4xl font-extrabold'>{data.title}</h1>
                            <p>
                                {
                                new Date(data._createdAt).toLocaleDateString("en-us", {
                                    day: "numeric",
                                    month:"long",
                                    year:"numeric"
                                }

                                )
                                }
                            </p>
                        </div>
                        {/* <div>
                            <Image src={urlFor(data)} className='rounded-full'/>
                        </div> */}
                        <div>
                            <h2 className='italic pt-10'>{data.smallDescription}</h2>
                        </div>
                    </div>
                    
                </section>
            </div>
        </section>
    </article>
  )
}
 
export default page