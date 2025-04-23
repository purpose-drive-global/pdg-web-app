import React from 'react'
import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <div className='bg-[#0E0E0D] pb-5 text-white'>
        <div className='flex flex-col md:flex-row justify-evenly md:justify-between text-white w-full p-5'>
      <div className='w-full md:w-[60%]'>
        <img src="/assets/pdglogo.png" alt='Purpose-Drive Global logo' />
      </div>
      <div className='w-full md:w-[60%] justify-center'>
        <h4 className='text-[#FFBF00] font-medium'>Talk to Us</h4>
        <img src="/assets/talk.png" alt='Talk to us illustration' />
      </div>
      <div className='w-full md:w-[60%]'>
        <h1 className='text-[#FFBF00] font-medium'>Pages</h1>
        <ul className='flex flex-col gap-4 pt-3'>
            <li className='text-[18px]'><a href="">Home</a></li>
            <li className='text-[18px]'><a href="">About Us</a></li>
            <li className='text-[18px] gap-5 flex items-center'>Initiatives<Icon icon="iconamoon:arrow-down-2-light" width="20" height="20" style={{}} /></li>
            <li className='text-[18px]'><a href="">Blog</a></li>
        </ul>
      </div>
      <div className='w-full md:w-[60%]'>
        <h1 className='text-[#FFBF00] font-medium'>Follow Us</h1>
        <ul className='flex flex-col gap-5 pt-3'>
        <li ><a className='text-[12px] flex gap-1 items-center' href="" target="_blank" rel="noopener noreferrer">
        <span className='rounded-full bg-white p-1'><Icon icon="mage:facebook" width="20" height="20" style={{color: '#FFBF00'}} /></span>@purposedriveglobal</a></li>
        <li ><a className='text-[12px] flex gap-1 items-center' href="" target="_blank" rel="noopener noreferrer">
        <span className='rounded-full bg-white p-1'><Icon icon="mingcute:linkedin-line" width="20" height="20" style={{color: '#FFBF00'}} /></span>@purposedriveglobal</a></li>
        <li ><a className='text-[12px] flex gap-1 items-center' href="" target="_blank" rel="noopener noreferrer">
        <span className='rounded-full bg-white p-1'><Icon icon="uim:google" width="20" height="20" style={{color: '#FFBF00'}} /></span>@purposedriveglobal</a></li>
        <li ><a className='text-[12px] flex gap-1 items-center' href="" target="_blank" rel="noopener noreferrer">
        <span className='rounded-full bg-white p-1'><Icon icon="prime:twitter" width="20" height="20" style={{color: '#FFBF00'}} /></span>@purposedriveglobal</a></li>
        </ul>
      </div>
      <div className='w-full'>
      <h1 className='text-[#FFBF00] font-medium'>About Us</h1>
      <p className='text-[16px] pt-3'>Our Vision Fuels 2030. Our Dreams Build 2050. The journey from 2023 to 2030, is a crucial Launchpad towards the Pan-African leadership that we will fully manifest in 2050.</p>
      <p className='text-[16px] pt-4'>Our Projects and Initiatives are your expedition into a future where impact reverberates across continents. Step onto this road to 2030 with Purpose-Drive Global. Together, we will not only traverse this decade; we’ll build the legacy that defines 2050.</p>
   <ul className='py-2 flex flex-col gap-2'>
    <li><a href='tel:+2349126457283'><span className='flex gap-1'><Icon icon="ion:call" width="20" height="20" style={{color: '#FFBF00'}} />+234 912 645 7283</span></a></li>
    <li><a href='mailto:hello@genzsummit.africa'><span className='flex gap-1'><Icon icon="material-symbols-light:mail" width="20" height="20" style={{color: '#FFBF00'}} />hello@genzsummit.africa</span></a></li>
   </ul>
   <p className='text-[#FFBF00] text-[12px] py-2'>Get a Newsletter from us</p>
   <div className='w-[95%]'>
   <div className='flex bg-white rounded-2xl'>
   <input className='rounded-xl w-full pl-4' placeholder='Enter your  email here' />
   <div className='w-[40%] flex justify-center items-center'><div className='bg-[#FFBF00] w-full justify-center text-center rounded-2xl p-2'>Sign Up</div></div>
   </div>
   </form>
   </div>
      </div>
    </div>
    <div className='bg-red-500'>
        <div className='bg-white h-[0.5px] w-full flex'></div>
    </div>
    <div className='flex justify-between pt-2 px-3'>
        <h6>Powered by Purpose-Drive Educational Foundation</h6>
          <h6><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-use">Terms of Use</a></h6>
    </div>
    </div>
  )
}

export default Footer
