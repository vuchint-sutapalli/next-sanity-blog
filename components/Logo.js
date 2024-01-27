import Image from 'next/image'
import React from 'react'

function Logo(props) {
    const{renderDefault, title} = props
    // return renderDefault({...props, title: title.toUpperCase() });

  return (

    <div className='flex items-center space-x-2'>
        <p>erg54y56y56y</p>
        <Image className='rounded-full object-cover' height={50} width={50} src="https://links.papareact.com/1m8"/>
        {renderDefault && <>renderDefault(props)</>}
    </div>
  )
}

export default Logo 