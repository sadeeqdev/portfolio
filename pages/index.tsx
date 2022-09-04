import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import Navbar from '../components/Navbar';
import TextPlugin from 'gsap/dist/TextPlugin';
import GlassCardBanner from '../components/GlassCardBanner';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import TechStacks from '../components/TechStacks';
import Services from '../components/Services';
import Contact from '../components/Contact';
import About from '../components/About';
import Skills from '../components/Skills';


const Home: NextPage = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const boxRef3 = useRef<HTMLDivElement>(null);
  const boxRef4 = useRef<HTMLDivElement>(null);
  const boxRef5 = useRef<HTMLDivElement>(null);
  const boxRefMobile = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(TextPlugin);

 useEffect(() => {
    let boxTl = gsap.timeline({repeat:-1, repeatDelay:2})
    boxTl.to(boxRef1.current, {delay:.5, duration: .5, text: "Hi! I am", ease: "none"})
    .to(boxRef2.current, {duration: .5, text: "Abubakar", ease: "none"})
    .to(boxRef3.current, {duration: .5, text: "Ibrahim, I am", ease: "none"})
    .to(boxRef4.current, {duration: .5, text: "a Frontend ", ease: "none"})
    .to(boxRef5.current, {duration: .5, text: "Developer", ease: "none"})
    .to(boxRef1.current, {delay:2, duration: .5, text: "I develop", ease: "none"})
    .to(boxRef2.current, {duration: .5, text: "Responsive,", ease: "none"})
    .to(boxRef3.current, {duration: .5, text: "Scalable,", ease: "none"})
    .to(boxRef4.current, {duration: .5, text: "and Reliable ", ease: "none"})
    .to(boxRef5.current, {duration: .5, text: "Websites!", ease: "none"})
    .to(boxRef1.current, {delay:2, duration: .5, text: "I can help", ease: "none"})
    .to(boxRef2.current, {duration: .5, text: "you turn", ease: "none"})
    .to(boxRef3.current, {duration: .5, text: "your ideas", ease: "none"})
    .to(boxRef4.current, {duration: .5, text: "to reality", ease: "none"})
    .to(boxRef5.current, {duration: .5, text: "with ease!", ease: "none"})

    let BoxTlMobile = gsap.timeline({repeat:-1, repeatDelay:2})
    BoxTlMobile.to(boxRefMobile.current, {delay:.5, duration:2, text:"Hi! I am Abubakar Ibrahim, I am a Frontend Developer", ease:"none"})
    .to(boxRefMobile.current, {delay:2, duration:2, text:"I develop Responsize, Scalable and reliable websites", ease:"none"})
    .to(boxRefMobile.current, {delay:2, duration:2, text:"I can help you turn your ideas to reality with ease", ease:"none"})
  });

  return (
    <div data-aos="fade-left">
      <Head>
        <title>Abubakar Ibrahim</title>
        <meta name="Sadeeqdev" content="Abubakar Ibrahim" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <!-----Navbar-----------> -------------------------------------------------------------*/}

     <Navbar/>

      {/* <!-----Welcome bar--------------------------------------------------------------------------------> */}
        
        <div className='w-11/12 lg:w-11/12 xl:w-5/6 2xl:w-3/5 mt-0 lg:mt-15 mx-auto lg:flex justify-between '>
          <div className='xl:w-4/6 h-110 lg:h-auto text-sub-white text-7xl lg:text-7xl xl:text-8xl pt-4 lg:pt-6 font-medium'>
            <div ref={boxRef} className="hidden lg:block">
              <div ref={boxRef1}></div>
              <div ref={boxRef2} className='text-white'> </div>
              <div ref={boxRef3}></div>
              <span className='flex lg:hidden'> </span>
              <div ref={boxRef4}></div>
              <div ref={boxRef5}></div>
            </div>
            <div className="flex lg:hidden text-white">
              <div ref={boxRefMobile}></div>
            </div>
          </div>
          <div className='text-white text-8xl font-medium '>
           <GlassCardBanner/>
          </div>
        </div>

      {/* <!-----Skills bar--------------------------------------------------------------------------------> */}

      <div className='w-11/12 lg:w-4/5 mx-auto flex justify-center items-center mt-20 space-x-4' >
        <div className='border-b-1 border-sub-white w-30 lg:w-80'/>
        <div className='w-6 h-6 lg:w-8 lg:h-8 rounded-full border-1 border-sub-white'/>
        <div className='border-b-1 border-sub-white w-30 lg:w-80'/>
      </div>

      <Skills/>

      {/* <!-----Welcome bar--------------------------------------------------------------------------------> */}
        
      <About/>

      {/* <!-----Services bar--------------------------------------------------------------------------------> */}
      
      <Services/>

      {/* <!-----Tech Stacks bar--------------------------------------------------------------------------------> */}
      
     <TechStacks/>

      {/* <!-----Projects So Far--------------------------------------------------------------------------------> */}

     <Projects/>

      
      {/* <!-----Contact Me So Far--------------------------------------------------------------------------------> */}

      <Contact/>

      {/* <!-----Footer So Far--------------------------------------------------------------------------------> */}

     <Footer/>

    </div>
  )
}

export default Home
