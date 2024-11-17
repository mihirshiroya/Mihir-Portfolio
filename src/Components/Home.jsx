import React from 'react'
import DynamicText from './DynamicText';
import avtar from '../assets/avtar.png';

const Home = () => {
    return (
        <div className="min-h-screen w-full bg-black flex flex-col md:gap-16 md:flex-row items-center justify-evenly px-10 md:justify-between lg:px-40">
  {/* First Div */}
  <div className=" order-2 md:order-1 flex-1 mb-4 md:w-1/2 ">
    <p className='text-yellow-300 mt-4 text-xl mb-1'>Hello, I am</p>
    <DynamicText />
    <p className='text-gray-400 mb-4 mt-2'>
      I’m a top web and app developer with a proven track record of creating innovative digital solutions that captivate users and drive results. I began my career by designing and launching cutting-edge platforms that gained rapid traction, achieving millions of active users and website visitors in just a few short years. My expertise spans front-end and back-end development, ensuring seamless performance and exceptional user experiences. Passionate about turning ideas into scalable, high-performing applications, I help brands and businesses thrive in the digital world.
    </p>
    <button className='bg-yellow-300 px-4 py-2 rounded-md hover:bg-yellow-500'>
    <a href="https://drive.google.com/uc?export=download&id=1-84U2ViBGCYbEnX2QA5LcLzLvgkgVAGi">Download CV</a></button>
  </div>

  {/* Second Div */}
  <div className="flex items-center justify-end order-1 md:order-2 flex-1 md:w-1/2 ">
    <img src={avtar} alt="logo" className="w-[200px] rounded-xl md:w-[350px]" />
  </div>
</div>

    )
}

export default Home