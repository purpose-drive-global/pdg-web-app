"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhoWeAre() {
  return (
    <section className="relative inset-0 bg-white bg-cover bg-center z-0"
      style={{
        backgroundImage: `url('/bg-image.svg'), url('/bg-image2.svg')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row justify-between w-full gap-[6.25rem] px-8 py-12 r">
        <div className="flex flex-col gap-8 w-full lg:w-1/2">
          <div className="flex flex-col gap-4 relative">
            <h2 className="text-black font-inter font-semibold text-[3rem] text-center">Who We Are</h2>
            <motion.div className="w-[12rem] absolute inset-0 top-14 mx-auto"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.2,
                repeat: Infinity, 
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}>
              <Image
                src='/underline.svg'
                alt='underline-image'
                width={192}
                height={20}
                className="object-contain w-full h-auto"
              />
            </motion.div>
          </div>
          <div className="flex flex-col gap-6">
            <p className='text-black font-inter font-normal text-[1.125rem]'>
              <span className='text-[#FFBF00] font-bold'>Purpose Drive Global</span> is a transformative hub where innovation meets purpose. We are more than an organization; we are a movement dedicated to empowering the next generation of leaders.
            </p>
            <p className='text-black font-inter font-normal text-[1.125rem]'>
              Through cutting-edge programs, world-class speakers, and impactful initiatives, we strive to instill purpose-driven leadership qualities. PDG is a driving force behind building Pan-African Gen Z Leaders in <strong>Media,</strong> <strong>Technology,</strong> and <strong>Entrepreneurship.</strong>
            </p>
            <p className="text-black font-normal text-[1.125rem] font-inter">
              We empower young minds with relevant skills, knowledge, and leadership competencies while fostering innovation and positive change across the continent.
            </p>

            <button className="bg-[#FFBF00] flex gap-4 items-center justify-center md:w-1/2 xl:w-1/3 whitespace-nowrap rounded-[1.25rem] text-black px-4 py-5 font-semibold mt-6 hover:bg-[#FFBF00] hover:text-white transition-colors">
              Learn More
              <Image
                src='/Vector.svg'
                alt='hero-image'
                width={500}
                height={500}
                className="object-contain w-3 h-full"
              />
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="lg:w-1/2">
          <Image
            src='/image.avif'
            alt='hero-image'
            width={500}
            height={500}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </section >
  )
}