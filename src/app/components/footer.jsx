'use client'

import { Icon } from '@iconify/react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Footer = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }
  
  return (
    <footer className="bg-[#0E0E0D] py-10 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 w-full">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <Image
            src="/assets/pdglogo.png"
            alt="Purpose-Driven Global logo"
            width={150}
            height={100}
            className="w-24 md:w-32"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col items-start gap-4"
        >
          <h4 className="text-[#FFBF00] text-2xl font-semibold">Talk to Us</h4>
          <Image
            src="/assets/talk.png"
            alt="Talk to Us illustration"
            width={100}
            height={80}
            className="w-20 md:w-24"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col gap-5"
        >
          <h1 className="text-[#FFBF00] text-2xl font-semibold">Pages</h1>
          <ul className="flex flex-col gap-3">
            <li>Home</li>
            <li>About Us</li>
            <li className="flex items-center justify-between">
              Initiatives
              <Icon icon="iconamoon:arrow-down-2-light" width="20" height="20" />
            </li>
            <li>Blog</li>
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col gap-5"
        >
          <h1 className="text-[#FFBF00] text-2xl font-semibold">Follow Us</h1>
          <ul className="flex flex-col gap-3">
            {[
              { icon: 'mage:facebook', handle: '@purposedriveglobal' },
              { icon: 'mingcute:linkedin-line', handle: '@purposedriveglobal' },
              { icon: 'uim:google', handle: '@purposedriveglobal' },
              { icon: 'prime:twitter', handle: '@purposedriveglobal' },
            ].map((social, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm">
                <span className="bg-white p-1 rounded-full">
                  <Icon icon={social.icon} width="20" height="20" className="text-[#FFBF00]" />
                </span>
                {social.handle}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col gap-6 lg:col-span-2"
        >
          <h1 className="text-[#FFBF00] text-2xl font-semibold">About Us</h1>
          <p className="text-sm leading-relaxed">
            Our Vision Fuels 2030. Our Dreams Build 2050. The journey from 2023 to 2030 is a crucial Launchpad towards Pan-African leadership.
          </p>
          <p className="text-sm leading-relaxed">
            Our Projects and Initiatives are your expedition into a future where impact reverberates across continents.
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Icon icon="ion:call" width="20" height="20" className="text-[#FFBF00]" />
              +234 912 645 7283
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="material-symbols-light:mail" width="20" height="20" className="text-[#FFBF00]" />
              hello@genzsummit.africa
            </div>
          </div>

          <div className="w-full relative">
            <div className="flex items-center bg-white rounded-2xl overflow-hidden">
              <input
                className="rounded-l-2xl w-full pl-4 h-12 text-black py-2 focus:outline-none"
                placeholder="Enter your email here"
              />
              <button className="flex items-center justify-center gap-2 h-12 bg-[#FFBF00] text-white font-semibold px-6 py-2 rounded-r-2xl hover:bg-yellow-400 transition-all whitespace-nowrap">
                Sign Up
                <span className="transform rotate-[-45deg]">
                  <Icon icon="mdi:arrow-right" width="20" height="20" color="white" />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="my-8"
      >
        <div className="h-[1px] bg-gray-400 w-full" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col md:flex-row justify-between mx-auto max-w-7xl items-center gap-2 text-xs px-2"
      >
        <h6>Powered by Purpose-Driven Educational Foundation</h6>
        <h6>Privacy Policy | Terms of Use</h6>
      </motion.div>
    </footer>
  )
}

export default Footer