"use client"

import { useEffect, useState } from 'react'

import Image from 'next/image'
import { motion } from 'framer-motion'

const heroImages = [
  '/hero-image.avif',
  '/hero-image2.avif',
  '/hero-image3.avif'
]



export default function Hero() {
    
const [currentImageIndex, setCurrentImageIndex] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
  }, 4000) 

  return () => clearInterval(interval)
}, [])
    return (
        <section className="relative w-full">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: 'url("/hero-bg-image.avif")' }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-70 mix-blend-darken z-10"></div>

            <div className="relative max-w-7xl mx-auto z-20 h-full w-full flex flex-col gap-8 md:flex-row items-center py-12 px-8 justify-between">
                <motion.div
                    className="flex flex-col gap-[1.75rem] lg:w-3/5"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-white font-bold font-inter text-4xl md:text-3xl xl:text-[3.75rem] lg:leading-[1.25]">
                        Empowering Africa's Gen Z to Lead, Innovate and Transform
                    </h2>
                    <p className='text-white md:w-[89%] text-sm lg:text-[1.125rem] '>
                        We’re building a movement where media, tech, and entrepreneurship collide to spark change. Join the next generation of African changemakers.
                    </p>
                    <button className="bg-[#FFBF00] md:w-3/4 xl:w-1/2 whitespace-nowrap rounded-[1.25rem] text-black px-4 py-5 font-semibold mt-6 hover:bg-[#FFBF00] hover:text-white transition-colors">
                        Register to join our Community
                    </button>
                </motion.div>

                <motion.div
                    className="relative w-full md:w-[35%]"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                         src={heroImages[currentImageIndex]}
                        alt='hero-image'
                        width={500}
                        height={500}
                        className="object-contain w-full h-full"
                    />
                </motion.div>
            </div>
        </section>
    )
}
