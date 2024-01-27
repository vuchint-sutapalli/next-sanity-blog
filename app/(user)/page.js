import React from 'react'

import {previewData} from "next/headers"
import { groq } from 'next-sanity'
import { client, urlFor } from '@/sanity/lib/client'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import ClientSideRoute from '@/components/ClientSideRoute'

const query = groq`
  *[_type == "blog"] | order(_createdAt asc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
    _createdAt
  }
`
const querya = groq`*`


async function page() {
  // if(previewData()) {
  //   return (<div>preview mode</div>)
  // }
  const data = await client.fetch(query)

  console.log("posts are," , data)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-x-10 gap-y-16 pb-24'>
      {
        data.map((blogData, i)=>{          
          return (

            <ClientSideRoute route={`/post/${blogData.currentSlug}`}>
              <div className = "flex flex-col  group cursor-pointer" key={i}>
                <div className=' relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
                  <Image className='rounded-t-lg object-left lg:object-center object-cover' fill alt="img"  src={urlFor(blogData.titleImage).url()}></Image>
                  <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white flex p-5 justify-between'>
                    <div>
                      <p className='font-bold'>{blogData.title}</p>
                      <p>
                        {
                          new Date(blogData._createdAt).toLocaleDateString("en-us", {
                            day: "numeric",
                            month:"long",
                            year:"numeric"
                          }

                          )
                        }
                      </p>
                    </div>  
                  </div>

                </div>
                <div className="mt-5 flex-1">
                  <h3 className=' underline text-lg font-bold line-clamp-2n'>{blogData.title}</h3>
                  <p className='line-clamp-3 text-sm mt-2'>{blogData.smallDescription}</p>
                </div>
                <p className='flex font-bold  mt-5  items-center group-hover:underline'>
                  Read Post
                  <ArrowRightIcon className='ml-2 h-4 w-4' />
                </p>
              </div>
            </ClientSideRoute>
          )

        })
      }
    </div>
  )
}

export default page