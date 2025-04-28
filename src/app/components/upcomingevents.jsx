'use client'

import { Icon } from '@iconify/react'
import React from 'react'
import { motion } from 'framer-motion'

const Upcomingevents = () => {
    const events = [
        {
            Id: 1,
            title: "GEN Z Summit 3.0",
            desc: "This is our flagship annual event bringing together Gen Z leaders to explore the intersection of media, technology, and entrepreneurship to build meaningful connections.",
            pic: "/assets/1.png"
        },
        {
            Id: 2,
            title: "GEN Z Shapers",
            desc: "The Gen Z Shapers Project is a community-focused initiative aimed at transforming underserved areas.",
            pic: "/assets/3.png"
        },
        {
            Id: 3,
            title: "Leadership Fair",
            desc: "Focuses on promoting leadership development and connecting individuals with resources and opportunities for leadership growth.",
            pic: "/assets/2.png"
        },
        {
            Id: 4,
            title: "GEN Z Happy Hour",
            desc: "This engaging platform provides a relaxed space for Gen Z leaders to connect, share ideas, and gain inspiration.",
            pic: "/assets/7.png"
        },
        {
            Id: 5,
            title: "Masterclass Series",
            desc: "The Masterclass Series is a monthly sequence of lessons taught by experts in a particular field, aimed at providing advanced students with in-depth knowledge and skills.",
            pic: "/assets/5.png"
        },
        {
            Id: 6,
            title: "Leadership Academy",
            desc: "Through strategic programs, workshops, and mentorship, we equip Gen Z individuals with the skills and insights needed to excel in media, technology, and entrepreneurship.",
            pic: "/assets/4.png"
        },
        {
            Id: 7,
            title: "Hackathon",
            desc: "Innovate. Code. Collaborate. A platform for young minds to tackle real problems and prototype bold solutions.",
            pic: "/assets/1.png"
        },
        {
            Id: 8,
            title: "Leadership Soiree",
            desc: "Leadership Soiree is an end of year party where we relax and talk about the impact PDG has made.",
            pic: "/assets/6.png"
        }
    ]

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 }
    }

    return (
        <div className='mb-5 bg-white'>
            <div className='mx-auto max-w-7xl flex flex-col gap-12 py-12 px-8'>
                <motion.h2 
                    className='font-inter text-3xl text-center md:text-left md:text-5xl text-black font-semibold'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUpVariants}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Upcoming Events
                </motion.h2>
                
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 justify-center items-center'>
                    {events ?
                        events.map((event, index) =>
                            <motion.div 
                                key={index} 
                                className='flex flex-col justify-end relative'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={cardVariants}
                                transition={{ 
                                    duration: 0.7, 
                                    ease: "easeOut", 
                                    delay: 0.1 * (index % 3) // Stagger animation by column
                                }}
                            >
                                <img src={event.pic} className='mb-72' alt={event.title} />
                                <div className='bg-white md:w-5/6 text-black border-[0.5px] h-[300px] md:h-[400px] flex flex-col justify-between absolute drop-shadow-md p-5 pb-7'>
                                    <div className="flex flex-col gap-8">
                                        <h3 className='text-2xl font-semibold'>{event.title}</h3>
                                        <p className='font-normal text-black'>{event.desc}</p>
                                    </div>
                                    <motion.button 
                                        className='flex text-white'
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className='bg-[#FFBF00] text-[16px] font-medium px-7 py-4 rounded-2xl cursor-pointer flex'>
                                            Read More
                                            <Icon icon="ci:arrow-up-right-sm" width="24" height="24" />
                                        </span>
                                    </motion.button>
                                </div>
                            </motion.div>
                        ) :
                        ""}
                </div>
            </div>
        </div>
    )
}

export default Upcomingevents