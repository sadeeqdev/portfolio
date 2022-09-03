import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import Navbar from '../components/Navbar';
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

 useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
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
          <div className='text-sub-white text-6xl lg:text-7xl xl:text-8xl pt-4 lg:pt-6 font-medium '>
            Hi! I am<br/>
            <span className='text-white'>Abubakar<br/>
            Ibrahim</span>,<span className='hidden lg:inline'> I am <br/>a </span>
            <span className='flex lg:hidden'> I am a</span>
            Software<br/> Developer<br/>
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
