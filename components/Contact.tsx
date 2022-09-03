import React from 'react'

const Contact = () => {
  return (
    <div className='border-t-1 border-sub-white mt-30 mb-15 lg:mb-20'>
        <div className='w-11/12 xl:w-5/6 2xl:w-3/5  mx-auto'>
            <div className='text-4xl mt-15 text-white font-medium'>
                Contact Me
            </div>
            <div className='text-white text-xl mt-10 lg:mt-20 flex flex-col lg:flex-row lg:space-x-15 justify-between'>
                <div className='text-sub-white leading-normal text-3xl lg:(text-5xl leading-relaxed mt-5) xl:(text-6xl leading-normal mt-0)' data-aos="zoom-in" data-aos-delay="50">
                    Thanks for taking the time to reach out. How can I help you today?
                </div>
                <div className='lg:float-right lg:w-120 xl:w-150 mt-10 lg:mt-0' data-aos="fade-left" data-aos-delay="100">
                    <input type="text" className='border border-sub-white bg-grey text-white py-4 px-3 rounded w-full lg:w-120 xl:w-150' placeholder='Full Name'/>
                    <input type="text" className='border border-sub-white bg-grey text-white py-4 px-3 mt-5 rounded w-full lg:w-120 xl:w-150' placeholder='Email'/>
                    <textarea className='border border-sub-white bg-grey text-white h-60 p-4 px-3 mt-5 rounded w-full lg:w-120 xl:w-150' placeholder='Description'/>
                    <button className='w-full lg:w-auto text-center justify-center bg-red py-3 px-10 rounded mt-4 text-white font-medium text-xl flex hover:opacity-70'>
                        Send 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" style={{marginLeft:'7px', marginTop:'5px'}} viewBox="0 0 512 512"><path fill='#fff' d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L277.3 424.9l-40.1 74.5c-5.2 9.7-16.3 14.6-27 11.9S192 499 192 488V392c0-5.3 1.8-10.5 5.1-14.7L362.4 164.7c2.5-7.1-6.5-14.3-13-8.4L170.4 318.2l-32 28.9 0 0c-9.2 8.3-22.3 10.6-33.8 5.8l-85-35.4C8.4 312.8 .8 302.2 .1 290s5.5-23.7 16.1-29.8l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
                    </button>
                </div>
       
            </div>
        </div>
    </div>
  )
}

export default Contact