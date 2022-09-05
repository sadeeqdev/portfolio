import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className='border-t-1 border-sub-white my-30' data-aos="fade-up">
        <div className='w-11/12 xl:w-5/6 2xl:w-3/5  mx-auto'>
          <div className='text-4xl mt-15 text-white font-medium'>
            Services
          </div>
          <div className='text-white text-xl mt-4 flex flex-col lg:flex-row justify-between lg:space-x-7 xl:space-x-10'>
            <div className='w-full lg:h-110 xl:h-100 rounded-lg bg-grey mt-7 p-3 xl:p-5' data-aos="fade-up" data-aos-delay="20">
                <div className='h-20 w-20 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/design-icon.svg`} width="40px" height="50px" alt="bgasdw"/>
                </div>
                  <div className='text-white ml-4 mt-5  text-3xl font-meduim'>
                    Design
                  </div>
                  <div className='p-5 text-justify text-lg text-sub-white'>
                    Great design has become a must-have in modern websites.
                    It provides is better first impression to users.
                    This is the perfect place to have cripsy, responsive and 
                    pixel perfect web applications.
                  </div>
              </div>
              <div className='w-full lg:h-110 xl:h-100 rounded-lg bg-grey mt-7 p-3 xl:p-5' data-aos="fade-up" data-aos-delay="100">
                <div className='h-20 w-20 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/coding-icon.svg`} width="40px" height="50px" alt="bgasdw"/>
                </div>
                  <div className='text-white ml-4  mt-5 text-3xl font-meduim'>
                    Development
                  </div>
                  <div className='p-5 text-justify text-lg text-sub-white'>
                    With a proven knowledge of React, Next, and Vue JS, I  
                    develop performant, efficient and functional wesbites.
                    In addition, I can help populate the content of your site.
                  </div>
              </div>
              <div className='w-full lg:h-110 xl:h-100 rounded-lg bg-grey mt-7 p-3 xl:p-5' data-aos="fade-up" data-aos-delay="200">
                <div className='h-20 w-20 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/maintenace.svg`} width="40px" height="50px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-4 mt-5  text-3xl font-meduim'>
                  Maintenance
                </div>
                <div className='p-5 text-justify text-lg text-sub-white'>
                    Keeping a website up-to-date is crucial to ensuring it&apos;s 
                    working at full capacity, engaging and retaining site visitors.
                    I help in monitoring your website&apos;s overall health and performance.
                </div>
            </div>
          </div>
          <div className='text-white text-xl mt-4 flex flex-col lg:flex-row justify-between lg:space-x-7 xl:space-x-10'>
            <div className='w-full lg:h-120 xl:h-115 rounded-lg bg-grey mt-7 p-3 xl:p-5' data-aos="fade-up" data-aos-delay="20">
                <div className='h-20 w-20 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/documentation-1.svg`} width="40px" height="50px" alt="bgasdw"/>
                </div>
                  <div className='text-white ml-4 mt-5 text-3xl font-meduim'>
                    Documentation
                  </div>
                  <div className='p-5 text-justify text-lg text-sub-white'>
                    Website documentation is a must as it provides easily accessible information 
                    on a product and gives answers to important questions pertaining to: product usage 
                    in general. aspects of functionality. architecture of a technical product.
                  </div>
              </div>
              <div className='w-full lg:h-120 xl:h-115 rounded-lg bg-grey mt-7 p-3 xl:p-5' data-aos="fade-up" data-aos-delay="200">
                <div className='h-20 w-20 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/seo-icon.svg`} width="40px" height="50px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-4 mt-5  text-3xl font-meduim'>
                  SEO
                </div>
                <div className='p-5 text-justify text-lg text-sub-white'>
                    SEO is the process of getting traffic from free, organic, 
                    editorial, or natural search results in search engines and
                    improve your website’s position in search results pages. 
                    I can make your websites appear on the first page of the search engine.
                  </div>
              </div>
              <div className='w-full lg:h-120 xl:h-115 rounded-lg bg-grey mt-7 p-3 xl:p-5' data-aos="fade-up" data-aos-delay="100">
                <div className='h-20 w-20 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/mentor.svg`} width="40px" height="50px" alt="bgasdw"/>
                </div>
                  <div className='text-white ml-4  mt-5 text-3xl font-meduim'>
                    Mentoring
                  </div>
                  <div className='p-5 text-justify text-lg text-sub-white'>
                    Supporting, influencing and guiding young people who are interested
                    in starting a career in tech is among the numerous services I enjoy.
                    Knowledge and skills are best retained when &apos; when they are being
                    passed to other people
                  </div>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Services