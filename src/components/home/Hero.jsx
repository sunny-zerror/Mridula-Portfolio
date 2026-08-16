import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="container w-full h-screen! center">
        <div className="w-[80%] relative h-full center ">
          <Image width={1920} height={1080} src={"/images/home/hero.png"} className='w-full h-auto object-contain' alt='hero img' priority />
        </div>
      </div>
    </>
  )
}

export default Hero