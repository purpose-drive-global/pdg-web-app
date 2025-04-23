import { Icon } from '@iconify/react'
import React from 'react'

const Upcomingevents = () => {
    const events =[
        {
            Id: 1,
            title:"GEN Z Summit 3.0",
            desc:"This is our flagship annual event bringing together Gen Z leaders to explore the intersection of media, technology, and entrepreneurship to build meaningful connections.",
            pic: "/assets/1.png"
        },
        {
            Id: 2,
            title:"GEN Z Shapers",
            desc:"The Gen Z Shapers Project is a community-focused initiative aimed at transforming underserved areas.",
            pic: "/assets/3.png"
        },
        {
            Id: 3,
            title:"Leadership Fair",
            desc:"Focuses on promoting leadership development and connecting individuals with resources and opportunities for leadership growth.",
            pic: "/assets/2.png"
        },
        {
            Id: 4,
            title:"GEN Z Happy Hour",
            desc:"This engaging platform provides a relaxed space for Gen Z leaders to connect, share ideas, and gain inspiration.",
            pic: "/assets/7.png"
        },
        {
            Id: 5,
            title:"Masterclass Series",
            desc:"The Masterclass Series is a monthly sequence of lessons taught by experts in a particular field, aimed at providing advanced students with in-depth knowledge and skills.",
            pic: "/assets/5.png"
        },
        {
            Id: 6,
            title:"Leadership Academy",
            desc:"Through strategic programs, workshops, and mentorship, we equip Gen Z individuals with the skills and insights needed to excel in media, technology, and entrepreneurship.",
            pic: "/assets/4.png"
        },
        {
            Id: 7,
            title:"Hackathon",
            desc:"Innovate. Code. Collaborate. A platform for young minds to tackle real problems and prototype bold solutions.",
            pic: "/assets/1.png"
        },
        {
            Id: 8,
            title:"Leadership Soiree",
            desc:"Leadership Soiree is an end of year party where we relax and talk about the impact PDG has made.",
            pic: "/assets/6.png"
        }
    ]
  return (
    <div className='mb-5'>
      <div>
        {/* <img/> */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 justify-center items-center p-5'>
        {events ? 
       events.map((event)=>
        <div key={event.Id} className='flex flex-col justify-end relative '>
        <img src={event.pic} alt={`${event.title} event`} className='mb-72' />
        <div className='bg-white w-[70%] ml-1 border-[0.5px] absolute drop-shadow-md p-5 pb-7'>
        <h3 className='text-[28px] font-semibold'>{event.title}</h3>
            <p className=' font-normal text-[18px] pt-4 pb-6 h-[200]'>{event.desc}</p>
            <div className='flex text-white'>
            <span className='bg-[#FFBF00] text-[16px] font-medium px-7 py-4 rounded-2xl cursor-pointer flex'>Read More
            <Icon icon="ci:arrow-up-right-sm" width="24" height="24" />
            </span>
            </div>
            </div>
        </div>
        ):
        ""}
        </div>
      </div>
    </div>
  )
}

export default Upcomingevents
