import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
     <div className='border-t-1 border-sub-white my-30'>
        <div className='w-11/12 xl:w-5/6 2xl:w-3/5  mx-auto'>
          <div className='text-4xl mt-15 text-white font-medium'>
            Recent Projects
          </div>
        </div>
        <div className='noScrollBar text-white text-xl mt-4 flex justify-between' style={{width: '100%', height: 'auto', display: 'block', overflowX: 'auto', overflowY: 'auto'}}>
          <div className="noScrollBar flex space-x-5 ml-5 lg:ml-10 xl:ml-30 2xl:ml-95" style={{width: '3000px'}}>
            <a href={'https://netporch.netlify.app'} target="_blank" rel="noreferrer">
              <div className='w-70 h-80 lg:(w-100 h-110) relative auto z-10 rounded-lg bg-grey mt-7 overflow-hidden transition-all' >
                  <div className='w-70 h-80 lg:(w-100 h-110) rounded-lg bg-grey transition-all p-5 z-40 flex justify-center items-center cursor-pointer'>
                    <button className='flex  items-center hover:(text-sub-white z-10 backdrop-filter bg-opacity-10 backdrop-blur-lg)'>
                      Visit Site <svg style={{width:'17px', marginLeft:'5px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path  fill='red' d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                    </button>
                  </div>
                  <Image 
                    src={'/assets/img-5.png'} 
                    layout="fill" 
                    alt="netporch" 
                    className="rounded-lg -mt-102 transition-all hover:(opacity-10 cursor-pointer)" 
                  />                  
              </div>
            </a>
            <a href={'https://orionapp.netlify.app'} target="_blank" rel="noreferrer">
              <div className='w-70 h-80 lg:(w-100 h-110) relative auto z-10 rounded-lg bg-grey mt-7 overflow-hidden transition-all' >
                  <div className='w-70 h-80 lg:(w-100 h-110) rounded-lg bg-grey transition-all p-5 z-40 flex justify-center items-center cursor-pointer'>
                    <button className='flex  items-center hover:(text-sub-white z-10 backdrop-filter bg-opacity-10 backdrop-blur-lg)'>
                      Visit Site <svg style={{width:'17px', marginLeft:'5px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path  fill='red' d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                    </button>
                  </div>
                  <Image 
                    src={'/assets/img-5.png'} 
                    layout="fill" 
                    alt="netporch" 
                    className="rounded-lg -mt-102 transition-all hover:(opacity-10 cursor-pointer)" 
                  />                  
              </div>
            </a>
            <a href={'https://roadrunnerapp.netlify.app'} target="_blank" rel="noreferrer">
              <div className='w-70 h-80 lg:(w-100 h-110) relative auto z-10 rounded-lg bg-grey mt-7 overflow-hidden transition-all' >
                  <div className='w-70 h-80 lg:(w-100 h-110) rounded-lg bg-grey transition-all p-5 z-40 flex justify-center items-center cursor-pointer'>
                    <button className='flex  items-center hover:(text-sub-white z-10 backdrop-filter bg-opacity-10 backdrop-blur-lg)'>
                      Visit Site <svg style={{width:'17px', marginLeft:'5px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path  fill='red' d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                    </button>
                  </div>
                  <Image 
                    src={'/assets/img-5.png'} 
                    layout="fill" 
                    alt="netporch" 
                    className="rounded-lg -mt-102 transition-all hover:(opacity-10 cursor-pointer)" 
                  />                  
              </div>
            </a>
            <a href={'https://crazypandas.net'} target="_blank" rel="noreferrer">
              <div className='w-70 h-80 lg:(w-100 h-110) relative auto z-10 rounded-lg bg-grey mt-7 overflow-hidden transition-all' >
                  <div className='w-70 h-80 lg:(w-100 h-110) rounded-lg bg-grey transition-all p-5 z-40 flex justify-center items-center cursor-pointer'>
                    <button className='flex  items-center hover:(text-sub-white z-10 backdrop-filter bg-opacity-10 backdrop-blur-lg)'>
                      Visit Site <svg style={{width:'17px', marginLeft:'5px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path  fill='red' d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                    </button>
                  </div>
                  <Image 
                    src={'/assets/img-5.png'} 
                    layout="fill" 
                    alt="netporch" 
                    className="rounded-lg -mt-102 transition-all hover:(opacity-10 cursor-pointer)" 
                  />                  
              </div>
            </a>
            <a href={'https://consulta.netlify.app'} target="_blank" rel="noreferrer">
              <div className='w-70 h-80 lg:(w-100 h-110) relative auto z-10 rounded-lg bg-grey mt-7 overflow-hidden transition-all' >
                  <div className='w-70 h-80 lg:(w-100 h-110) rounded-lg bg-grey transition-all p-5 z-40 flex justify-center items-center cursor-pointer'>
                    <button className='flex  items-center hover:(text-sub-white z-10 backdrop-filter bg-opacity-10 backdrop-blur-lg)'>
                      Visit Site <svg style={{width:'17px', marginLeft:'5px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path  fill='red' d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                    </button>
                  </div>
                  <Image 
                    src={'/assets/img-5.png'} 
                    layout="fill" 
                    alt="netporch" 
                    className="rounded-lg -mt-102 transition-all hover:(opacity-10 cursor-pointer)" 
                  />                  
              </div>
            </a>
            <a href={'https://cosmestore.netlify.app'} target="_blank" rel="noreferrer">
              <div className='w-70 h-80 lg:(w-100 h-110) relative auto z-10 rounded-lg bg-grey mt-7 overflow-hidden transition-all' >
                  <div className='w-70 h-80 lg:(w-100 h-110) rounded-lg bg-grey transition-all p-5 z-40 flex justify-center items-center cursor-pointer'>
                    <button className='flex  items-center hover:(text-sub-white z-10 backdrop-filter bg-opacity-10 backdrop-blur-lg)'>
                      Visit Site <svg style={{width:'17px', marginLeft:'5px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path  fill='red' d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                    </button>
                  </div>
                  <Image 
                    src={'/assets/img-5.png'} 
                    layout="fill" 
                    alt="netporch" 
                    className="rounded-lg -mt-102 transition-all hover:(opacity-10 cursor-pointer)" 
                  />                  
              </div>
            </a>
            <a href={'https://commiun.netlify.app'} target="_blank" rel="noreferrer">
              <div className='w-70 h-80 lg:(w-100 h-110) relative auto z-10 rounded-lg bg-grey mt-7 overflow-hidden transition-all' >
                  <div className='w-70 h-80 lg:(w-100 h-110) rounded-lg bg-grey transition-all p-5 z-40 flex justify-center items-center cursor-pointer'>
                    <button className='flex  items-center hover:(text-sub-white z-10 backdrop-filter bg-opacity-10 backdrop-blur-lg)'>
                      Visit Site <svg style={{width:'17px', marginLeft:'5px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path  fill='red' d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                    </button>
                  </div>
                  <Image 
                    src={'/assets/img-5.png'} 
                    layout="fill" 
                    alt="netporch" 
                    className="rounded-lg -mt-102 transition-all hover:(opacity-10 cursor-pointer)" 
                  />                  
              </div>
            </a>
          </div>
        </div>
      </div>
  )
}

export default Projects