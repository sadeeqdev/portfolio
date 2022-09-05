import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
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
import AlertTab from '../components/AlertTab';


const Home: NextPage = () => {
  const [checkOpen, setCheckOpen] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null);
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const boxRef3 = useRef<HTMLDivElement>(null);
  const boxRef4 = useRef<HTMLDivElement>(null);
  const boxRef5 = useRef<HTMLDivElement>(null);
  const boxRefMobile1 = useRef<HTMLDivElement>(null);
  const boxRefMobile2 = useRef<HTMLDivElement>(null);
  const boxRefMobile3 = useRef<HTMLDivElement>(null);
  const boxRefMobile4 = useRef<HTMLDivElement>(null);
  const hireRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollToPlugin);

 useEffect(() => {
    let boxTl = gsap.timeline({repeat:-1, repeatDelay:2})
    boxTl.to(boxRef1.current, {delay:.5, duration: .5, text: "Hi! I am", ease: "none"})
    .to(boxRef2.current, {duration: .5, text: "Abubakar", ease: "none"})
    .to(boxRef3.current, {duration: .5, text: "Ibrahim, I ", ease: "none"})
    .to(boxRef4.current, {duration: .5, text: "build things ", ease: "none"})
    .to(boxRef5.current, {duration: .5, text: " for the web", ease: "none"})
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

    let BoxTlMobile = gsap.timeline({})
    BoxTlMobile.to(boxRefMobile1.current, {delay:0, duration:.5, text:"Hi! I am", ease:"none"})
    .to(boxRefMobile2.current, {delay:.3, duration:.5, text:"Abubakar Ibrahim", ease:"none"})
    .to(boxRefMobile3.current, {delay:.3, duration:.5,  text:"I build products for the web", ease:"none"})
    .to(boxRefMobile4.current, {delay:.3, duration:1.5,  text:`I am a software developer with 4+ years background specializing in creating
    and executing innovative software solutions to enhance business and productivity.`, ease:"none"})
    .to(hireRef.current, {delay:.3, duration:.6, opacity:1})
  });

  function checkClose(data:any){
    setCheckOpen(data)
 }

 function openBar(data:any){
  setCheckOpen(data)
 }

 function handleScroll(data:any){
    gsap.to(window, {duration: 1, scrollTo:{y:`#${data}`, offsetY: 80}});
 }
  return (
    <div data-aos="fade-left">
      <Head>
        <title>Abubakar Ibrahim</title>
        <meta name="Sadeeqdev" content="Abubakar Ibrahim" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <!-----Navbar-----------> -------------------------------------------------------------*/}
     <AlertTab checkOpen={checkOpen} checkClose={checkClose}/>

     <Navbar scrollTo={handleScroll}/>

      {/* <!-----Welcome bar--------------------------------------------------------------------------------> */}
        
        <div className='w-11/12 lg:w-11/12 xl:w-5/6 2xl:w-3/5 mt-0 lg:mt-15 mx-auto lg:flex justify-between ' id="top">
          <div className='xl:w-4/6 h-110 lg:h-auto text-sub-white text-5xl lg:text-7xl xl:text-8xl pt-4 lg:pt-6 font-medium'>
            <div ref={boxRef} className="hidden lg:block">
              <div ref={boxRef1}></div>
              <div ref={boxRef2} className='text-white'> </div>
              <div ref={boxRef3}></div>
              <span className='flex lg:hidden'> </span>
              <div ref={boxRef4}></div>
              <div ref={boxRef5}></div>
            </div>
            <div className="w-1/1 flex mx-auto flex text-2xl lg:hidden text-sub-white mt-7">
              <div>
                <div ref={boxRefMobile1}></div>
                <div className='text-4xl text-white pt-2' ref={boxRefMobile2}></div> 
                <div className='text-4xl pt-2' ref={boxRefMobile3}></div>
                <div className='text-lg mt-2 font-light' ref={boxRefMobile4}>
                </div>
                <div className='border border-red rounded hover:opacity-70 w-30 py-2 text-center mt-12 text-white text-xl opacity-0' ref={hireRef} onClick={() => handleScroll('contact')}>
                  Hire me!
                </div>

              </div>
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
      <div id="about">
        <About />
      </div>

      {/* <!-----Services bar--------------------------------------------------------------------------------> */}
      <div id="services">
        <Services/>
      </div>

      {/* <!-----Tech Stacks bar--------------------------------------------------------------------------------> */}
      <div id="stacks">
        <TechStacks/>
      </div>

      {/* <!-----Projects So Far--------------------------------------------------------------------------------> */}
      <div id="projects">
        <Projects/>
      </div>
      
      {/* <!-----Contact Me So Far--------------------------------------------------------------------------------> */}
      <div id="contact">
        <Contact openBars={openBar}/>
      </div>

      {/* <!-----Footer So Far--------------------------------------------------------------------------------> */}

     <Footer/>

    </div>
  )
}

export default Home
