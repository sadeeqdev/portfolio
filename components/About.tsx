import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='gradBg w-11/12 xl:w-5/6 2xl:w-3/5 p-3 mt-20 h-auto lg:p-10 xl:p-20 rounded-lg mx-auto backdrop-blur-lg bg-opacity-70'>
          <div className='flex text-white flex flex-col lg:flex-row justify-between'>
            <div className='text-sub-white font-bold text-4xl lg:text-5xl'><span className='text-white'>About</span> Me</div>
            <div className='text-xl lg:text-3xl font-medium  xl:font-bold text-sub-white'>
              <span className='text-white'>Abubakar</span> Ibrahim<br/> 
            </div>
          </div>

          <div className='flex mt-15 text-white flex flex-col lg:flex-row justify-between '>
            <div className='w-auto h-auto  rounded-lg'>
                <Image src={`/assets/me.jpg`} width="350px" height="380px"  className="rounded-lg" alt="bgasdw"/>
            </div>
            <div className='text-2xl w-11/12 lg:w-2/4 mt-6 lg:mt-0 font-bold text-sub-white float-right text-justify'>
                I am a seasoned software expert who has developed products for enterprise clients such as 
                Intuit, Yale University, and Hewlett-Packard (HP), as well as many venture-backed businesses. 
                I specialize in building applications specific to the business needs of my clients. 
                I have done work in software development, mobile app creation, front-end/back-end web, 
                database/server management, graphic design, and video game development.
            </div>
          </div>
          <div className='flex flex-col lg:flex-row h-auto lg:h-45 w-full mx-auto bg-grey mt-15 rounded text-white flex lg:justify-between lg:items-center lg:space-x-20 p-5'>
            <div className='text-9xl font-bold'>
                15<sup className='font-light text-8xl text-red'>+</sup>
            </div>
            <div className='text-lg'>
                <p className='text-3xl font-medium'>PROJECTS COMPLETED</p>
                Over the past ten years, I have completed over 100 software projects including iOS/Android apps, Mac/Windows programs, Unity/Unreal video games, and web apps.
            </div>
          </div>
          <div className='mx-auto text-red flex justify-center py-6 lg:py-0 lg:mt-10 text-xl lg:text-2xl'>
            <a href='' className='flex hover:opacity-70'>
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" style={{width:'20px', marginLeft:'5px'}}  viewBox="0 0 512 512"><path fill="#AF0404" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"/></svg>
            </a>
          </div>
        </div>
  )
}

export default About