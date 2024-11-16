import React from 'react'
import { Download } from 'lucide-react';
import avtar from '../assets/avtar.png';

const AboutMe = () => {
    return (
        <div className="min-h-screen w-full bg-gray-800  flex flex-col items-center justify-center md:gap-16 md:flex-row  px-10 md:justify-between lg:px-40">
  <div className=" order-2  flex-1 mb-4 md:w-1/2 ">
    <h1 className='text-yellow-300 mt-4 font-bold text-3xl mb-8'>About Me</h1>
    
    <p className='text-gray-400 mb-4 mt-2'>
    Hello! I’m Mihir Shiroya, a passionate Web and App Developer with a talent for turning ideas into engaging, user-centric digital experiences. My journey in the tech world began with a simple curiosity about how websites and applications function, which quickly evolved into a full-blown passion for coding and innovation.
      </p>
      <p className='text-gray-400 mb-4 mt-2'>
      I believe in crafting solutions that not only meet the immediate needs of users but also anticipate their future demands. Whether it's building a responsive website, designing a seamless mobile application, or solving complex technical challenges, I bring creativity, precision, and a results-driven mindset to every project.
      </p>
      <p className='text-gray-400 mb-4 mt-2'>
      When I’m not coding, you’ll find me exploring emerging technologies, mentoring aspiring developers, or brainstorming innovative ideas for the next big thing in tech. My ultimate goal? To help businesses and individuals thrive in the digital age by delivering solutions that truly make a difference.
      </p>
      <div className='flex gap-4'>
        <button  className='bg-yellow-300 px-4 py-2 rounded-md'>Hire Me</button>
    <button className='bg-yellow-100/50  px-4 py-2 rounded-md flex items-center gap-2 hover:bg-yellow-300'>
    <a href="https://drive.google.com/uc?export=download&id=1-84U2ViBGCYbEnX2QA5LcLzLvgkgVAGi">Download CV</a>  <Download/></button>

      </div>
      
    
  </div>


  <div className="hidden md:flex items-center justify-start order-1 flex-1 md:mt-4 md:w-1/2">
    <img src={avtar} alt="logo" className="w-[200px] rounded-xl md:w-[350px]" />
  </div>

  {/* Second Div */}
  
</div>

    )
}

export default AboutMe;