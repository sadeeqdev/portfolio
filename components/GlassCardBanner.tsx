import Image from 'next/image'
import React from 'react'

const GlassCardBanner = () => {
  return (
    <div className='flex flex-row-reverse lg:flex-col w-11/12 lg:w-auto mt-10 lg:mt-0 justify-center '>
        <div className='w-40 h-50 lg:(w-65 h-85) xl:w-80 xl:h-100 bg-white rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-10'>
            <Image src={'/assets/welcome-banner.jpg'} layout="fill" className="rounded " alt="comp"/>
        </div>
        <div className='w-40 h-50 lg:(w-70 h-85) xl:w-80 xl:h-100 bg-white mt-20 -mr-12 lg:(-mt-50 -ml-40) xl:-mt-70 xl:-ml-60 flex justify-center items-center rounded-lg backdrop-filter backdrop-blur bg-opacity-10'>
            <Image src={'/assets/man-on-system.png'} width={350} height={350} className="rounded" alt="comp"/>
        </div>
    </div>
  )
}

export default GlassCardBanner