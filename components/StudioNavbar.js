import Link from 'next/link'
import React from 'react'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'


function StudioNavbar(props) {
  return (
    <div className='flex flex-col justify-between  bg-black'>
      <Link href="/" className='text-[#F7AB0A] py-5 bg-black flex items-center'>
        <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A] mr-2" />
        Go to Site
      </Link>
      <>{props.renderDefault(props)}</>
    </div>
     

    // 
  )
}

export default StudioNavbar