import Link from 'next/link'
import Image from 'next/image'

import React from 'react'

function Header() {
  return (
    <header className='flex  items-center justify-between space-x-2 font-bold px-10 py-10'>
        <div className='flex'>
            <Link href="/">
                <Image className='rounded-full object-cover' height={50} width={50} src="https://links.papareact.com/1m8"/>
            </Link>
        </div>
        <div>Header</div>

    </header>
    
  )
}

export default Header