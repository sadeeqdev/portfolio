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
            <div className='w-full lg:h-160 xl:h-150 rounded-lg bg-grey mt-7 p-3 xl:p-5' data-aos="fade-up" data-aos-delay="20">
                <div className='h-20 w-20 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/design-icon.svg`} width="40px" height="50px" alt="bgasdw"/>
                </div>
                  <div className='text-white ml-4 mt-5  text-3xl font-meduim'>
                    Design
                  </div>
                  <div className='p-5 text-justify text-lg text-sub-white'>
                    Design involves creating the HTML, CSS, and presentational JavaScript code that makes up a user interface. 
                    This means understanding UX principles, best practices, executing both a great visual design and code, 
                    ensuring good user experience and turning wireframes into reality. Great design improves the trust and satisfaction of 
                    users coming to your website. If This is what you&rsquo;re 
                    looking for. You are in the right place.
                  </div>
              </div>
              <div className='w-full lg:h-160 xl:h-150 rounded-lg bg-grey mt-7 p-3 xl:p-5' data-aos="fade-up" data-aos-delay="100">
                <div className='h-20 w-20 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/coding-icon.svg`} width="40px" height="50px" alt="bgasdw"/>
                </div>
                  <div className='text-white ml-4  mt-5 text-3xl font-meduim'>
                    Development
                  </div>
                  <div className='p-5 text-justify text-lg text-sub-white'>
                    Also known as client-side development. This is the practice of using HTML to lay out a document’s general structure and content, 
                    CSS for styling and JavaScript for situations that require advanced interactivity. Additionally, consuming APIs 
                    to populate and update specific areas of a website.<br/>This also involves Authentication, Integrating client-side with server-side,
                    Testing and Optimization.
                  </div>
              </div>
              <div className='w-full lg:h-160 xl:h-150 rounded-lg bg-grey mt-7 p-3 xl:p-5' data-aos="fade-up" data-aos-delay="200">
                <div className='h-20 w-20 rounded-full bg-black flex justify-center items-center'>
                    <Image src={`/assets/seo-icon.svg`} width="40px" height="50px" alt="bgasdw"/>
                </div>
                <div className='text-white ml-4 mt-5  text-3xl font-meduim'>
                  SEO
                </div>
                <div className='p-5 text-justify text-lg text-sub-white'>
                    SEO stands for ‘Search Engine Optimization’, which is the process of getting traffic 
                    from free, organic, editorial, or natural search results in search engines. It aims to 
                    improve your website’s position in search results pages. Remember, the higher the website is listed, 
                    the more people will see it.
                    Want Your Website to get noticed on the first page of the search engine? Waste no time anymore. Hit the contact button!
                  </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Services