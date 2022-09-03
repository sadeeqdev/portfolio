import Image from 'next/image'
import React from 'react'

const TechStacks = () => {
  return (
     <div className='border-t-1 border-sub-white my-30'>
        <div className='w-11/12 xl:w-5/6 2xl:w-3/5  mx-auto'>
          <div className='text-4xl mt-15 text-white font-medium'>
            Tech Stacks 
          </div>
          <div className='text-white text-2xl text-sub-white mt-4'>
            As an experienced software developer, I have dedicated the last 4 years in delivering modern, reliable and scalable websites using the appropriate technology stacks. 
          </div>
          <div className='text-white text-xl mt-11 flex-wrap lg:flex-nowrap flex justify-between gap-y-2 gap-x-2 lg:(gap-y-0 gap-x-0) lg:space-x-4'>
            <div data-aos="zoom-in" data-aos-delay="100" className='w-max flex-grow h-20 lg:h-30 rounded-lg bg-color-5 p-2 lg:p-2 lg:p-5 flex items-center'>
                <div className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/html-5.png`} width="30px" height="40px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-2 lg:ml-4 text-lg lg:text-2xl xl:text-3xl font-meduim'>
                  HTML
                </div>
            </div>
           <div data-aos="zoom-in" data-aos-delay="100" className='w-max flex-grow h-20 lg:h-30  rounded-lg bg-color-13  p-2 lg:p-5 flex items-center'>
                <div className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/css-3.png`} width="30px" height="40px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-2 lg:ml-4 text-lg lg:text-2xl xl:text-3xl font-meduim'>
                  CSS
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100" className='w-max flex-grow h-20 lg:h-30  rounded-lg bg-maroon  p-2 lg:p-5 flex items-center'>
                <div className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/javascript-icon.svg`} width="30px" height="40px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-2 lg:ml-4 text-lg lg:text-2xl xl:text-3xl font-meduim'>
                  Javascript
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100" className='w-max flex-grow h-20 lg:h-30  rounded-lg bg-color-14 p-2 lg:p-5 flex items-center'>
                <div className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/typescript-icon.svg`} width="30px" height="40px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-2 lg:ml-4 text-lg lg:text-2xl xl:text-3xl font-meduim'>
                  Typescript
                </div>
            </div>
          </div>
          <div className='text-white text-xl mt-2 lg:mt-4 flex flex-wrap lg:flex-nowrap justify-between gap-y-2 gap-x-2 lg:(gap-y-0 gap-x-0) lg:space-x-4'>
            <div data-aos="zoom-in" data-aos-delay="100" className='w-max flex-grow h-20 lg:h-30  rounded-lg bg-color-6 p-2 lg:p-5 flex items-center'>
                <div className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/node-js-icon.svg`} width="30px" height="40px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-2 lg:ml-4 text-lg lg:text-2xl xl:text-3xl font-meduim'>
                  Node Js
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100" className='w-max flex-grow h-20 lg:h-30  rounded-lg bg-color-14 p-2 lg:p-5 flex items-center'>
                <div className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/react-js-icon.svg`} width="50px" height="50px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-2 lg:ml-4 text-lg lg:text-2xl xl:text-3xl font-meduim'>
                  React JS
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100" className='w-max flex-grow h-20 lg:h-30  rounded-lg bg-color-5 p-2 lg:p-5 flex items-center'>
                <div className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-sub-white flex justify-center items-center'>
                    <Image src={`/assets/next-js.svg`} width="50px" height="50px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-2 lg:ml-4 text-lg lg:text-2xl xl:text-3xl font-meduim'>
                  Next JS
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100" className='w-max flex-grow h-20 lg:h-30  rounded-lg bg-color-9 p-2 lg:p-5 flex items-center'>
                <div className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/vue-js-icon.svg`} width="30px" height="40px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-2 lg:ml-4 text-lg lg:text-2xl xl:text-3xl font-meduim'>
                  Vue JS
                </div>
            </div>
            
            
           
          </div>
          <div className='text-white text-xl mt-2 lg:mt-4 flex flex-wrap lg:flex-nowrap justify-between gap-y-2 gap-x-2 lg:(gap-y-0 gap-x-0) lg:space-x-4'>
            <div data-aos="zoom-in" data-aos-delay="100" className='w-max flex-grow h-20 lg:h-30  rounded-lg bg-maroon p-2 lg:p-5 flex items-center'>
                <div className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/tailwind-css-icon.svg`} width="30px" height="40px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-2 lg:ml-4 text-lg lg:text-2xl xl:text-3xl font-meduim'>
                  Tailwind CSS
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100" className='w-max flex-grow h-20 lg:h-30  rounded-lg bg-purple p-2 lg:p-5 flex items-center'>
                <div className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/styled-icon .png`} width="30px" height="40px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-2 lg:ml-4 text-lg lg:text-2xl xl:text-3xl font-meduim'>
                  Styled Components
                </div>
            </div>
            
            <div data-aos="zoom-in" data-aos-delay="100" className='w-max flex-grow h-20 lg:h-30  rounded-lg bg-green p-2 lg:p-5 flex items-center'>
                <div className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/mongodb-icon.svg`} width="30px" height="40px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-2 lg:ml-4 text-lg lg:text-2xl xl:text-3xl font-meduim'>
                  MongoDB
                </div>
            </div>
            
          </div>
          <div className='text-white text-xl mt-2 lg:mt-4 flex flex-wrap lg:flex-nowrap justify-between gap-y-2 gap-x-2 lg:(gap-y-0 gap-x-0) lg:space-x-4'>
            
            <div data-aos="zoom-in" data-aos-delay="100" className='w-max flex-grow h-20 lg:h-30  rounded-lg bg-color-14 p-2 lg:p-5 flex items-center'>
                <div className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/mui-icon.png`} width="50px" height="50px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-2 lg:ml-4 text-lg lg:text-2xl xl:text-3xl font-meduim'>
                  Material UI
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100" className='w-max flex-grow h-20 lg:h-30  rounded-lg bg-color-13 p-2 lg:p-5 flex items-center'>
                <div className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-sub-white flex justify-center items-center'>
                    <Image src={`/assets/cypress-icon.svg`} width="30px" height="40px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-2 lg:ml-4 text-lg lg:text-2xl xl:text-3xl font-meduim'>
                  Cypress
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100" className='w-max flex-grow h-20 lg:h-30  rounded-lg bg-color-5 p-2 lg:p-5 flex items-center'>
                <div className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/redux-icon.svg`} width="30px" height="40px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-2 lg:ml-4 text-lg lg:text-2xl xl:text-3xl font-meduim'>
                  Redux
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100" className='w-max flex-grow h-20 lg:h-30  rounded-lg bg-color-13 p-2 lg:p-5 flex items-center'>
                <div className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/vuex-icon.png`} width="30px" height="40px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-2 lg:ml-4 text-lg lg:text-2xl xl:text-3xl font-meduim'>
                  VueX
                </div>
            </div>
          </div>
          <div className='text-white text-xl mt-2 lg:mt-4 flex flex-wrap lg:flex-nowrap justify-between gap-y-2 gap-x-2 lg:(gap-y-0 gap-x-0) lg:space-x-4'>
            <div data-aos="zoom-in" data-aos-delay="100" className='w-max flex-grow h-20 lg:h-30  rounded-lg bg-purple p-2 lg:p-5 flex items-center'>
                <div className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-sub-white flex justify-center items-center'>
                    <Image src={`/assets/stripe-icon.svg`} width="30px" height="40px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-2 lg:ml-4 text-lg lg:text-2xl xl:text-3xl font-meduim'>
                  Stripe CLI
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100" className='w-max flex-grow h-20 lg:h-30  rounded-lg bg-maroon p-2 lg:p-5 flex items-center'>
                <div className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/mysql-icon.svg`} width="30px" height="40px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-2 lg:ml-4 text-lg lg:text-2xl xl:text-3xl font-meduim'>
                  MySql
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100" className='w-max flex-grow h-20 lg:h-30  rounded-lg bg-color-14 p-2 lg:p-5 flex items-center'>
                <div className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/wind.png`} width="30px" height="40px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-2 lg:ml-4 text-lg lg:text-2xl xl:text-3xl font-meduim'>
                  Windi CSS
                </div>
            </div>
          </div>

        </div>
      </div>
  )
}

export default TechStacks