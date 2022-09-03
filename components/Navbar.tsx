import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  const [mobile, setMobile] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState(false);
    function handleShow(){
        setShow(!show)
    }

    function handleClose(){
      setShow(false)
    }

    /* eslint-disable */
    useEffect(() => {
        if(window.innerWidth < 850 ){
            setMobile(true)
        }
    },[])

    function checkWindow(){
        if(window.innerWidth > 800 ){
            setShow(true)
            setMobile(false)
        }else if(window.innerWidth < 800 ){
            setShow(false)
            setMobile(true)
        }
    }

    useEffect(() => {
      if(typeof window !== "undefined"){
        window.onresize = checkWindow
      }
    },[])

     useEffect(() => {
      window.onscroll = function () {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
    }, []);

  return (
    <>
    <div onClick={() => setShow(false)} className='w-full top-0 bg-grey z-40 delay-100 scroll-y-hidden fixed h-screen backdrop-filter -ml-1/1 transition-all backdrop-blur-sm bg-opacity-10' style={{transform:(mobile && show)  ? 'translateX(100%)' : 'translateX(0%)'}}>
    <div className='fixed w-72 -ml-72 bg-grey h-screen transition-all delay-100' style={{transform:(mobile && show)  ? 'translateX(288px)':  'translateX(0)'}}>
      <div className=' text-white pt-6 px-2 pb-7 w-11/12  lg:pt-28 lg:py-7 lg:w-5/6 2xl:w-4/6 mx-auto grid grid-cols-1'>
          <div className='text-2xl font-medium lg:text-xl flex justify-between'>
            <div>Sadeeq.<span className='text-sub-white font-normal  '>dev</span></div>
            <button onClick={handleClose}>
              <svg version="1.1" style={{width:'14px'}} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.878 122.88" enableBackground="new 0 0 122.878 122.88"><g><path fill='#AF0404' d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z"/></g></svg>
            </button>
          </div>
          <div className='font-medium grid text-xl gap-y-5 mt-10 text-left' onClick={() => setShow(false)}>
              <Link href="/home" className="hover:text-greentext" >
                <div className='flex'>
                  <svg style={{width:'15px', marginRight:'5px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 326.85"><path fill="#AF0404" fillRule="nonzero" d="M307.56 301.51c.51 10.05 3.9 17.2 10.19 21.35 15.76 10.52 31.28-1.96 42.64-12.05L502.5 183.04c12.67-11.46 12.67-27.76 0-39.22L363.62 18.96c-11.9-10.69-28.78-26.39-45.87-14.99-6.29 4.17-9.68 11.33-10.19 21.38v76.31H6.33c-3.48 0-6.33 2.85-6.33 6.33v110.88c0 3.47 2.86 6.33 6.33 6.33h301.23v76.31z"/></svg>
                  About
                </div>
              </Link>
              <Link href="/tokenclaim" className="hover:text-greentext">
                <div className='flex'>
                  <svg style={{width:'15px', marginRight:'5px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 326.85"><path fill="#AF0404" fillRule="nonzero" d="M307.56 301.51c.51 10.05 3.9 17.2 10.19 21.35 15.76 10.52 31.28-1.96 42.64-12.05L502.5 183.04c12.67-11.46 12.67-27.76 0-39.22L363.62 18.96c-11.9-10.69-28.78-26.39-45.87-14.99-6.29 4.17-9.68 11.33-10.19 21.38v76.31H6.33c-3.48 0-6.33 2.85-6.33 6.33v110.88c0 3.47 2.86 6.33 6.33 6.33h301.23v76.31z"/></svg>
                  Services
                </div>
              </Link>
              <Link href="/home" className="hover:text-greentext">
                <div className='flex'>
                  <svg style={{width:'15px', marginRight:'5px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 326.85"><path fill="#AF0404" fillRule="nonzero" d="M307.56 301.51c.51 10.05 3.9 17.2 10.19 21.35 15.76 10.52 31.28-1.96 42.64-12.05L502.5 183.04c12.67-11.46 12.67-27.76 0-39.22L363.62 18.96c-11.9-10.69-28.78-26.39-45.87-14.99-6.29 4.17-9.68 11.33-10.19 21.38v76.31H6.33c-3.48 0-6.33 2.85-6.33 6.33v110.88c0 3.47 2.86 6.33 6.33 6.33h301.23v76.31z"/></svg>
                  Tech Stacks
                </div>
              </Link>
              <Link href="/home" className="hover:text-greentext">
                <div className='flex'>
                  <svg style={{width:'15px', marginRight:'5px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 326.85"><path fill="#AF0404" fillRule="nonzero" d="M307.56 301.51c.51 10.05 3.9 17.2 10.19 21.35 15.76 10.52 31.28-1.96 42.64-12.05L502.5 183.04c12.67-11.46 12.67-27.76 0-39.22L363.62 18.96c-11.9-10.69-28.78-26.39-45.87-14.99-6.29 4.17-9.68 11.33-10.19 21.38v76.31H6.33c-3.48 0-6.33 2.85-6.33 6.33v110.88c0 3.47 2.86 6.33 6.33 6.33h301.23v76.31z"/></svg>
                  Portfolio
                </div>
              </Link>
              <a href="/home" className="hover:text-greentext">
                <div className='flex'>
                  <svg style={{width:'15px', marginRight:'5px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 326.85"><path fill="#AF0404" fillRule="nonzero" d="M307.56 301.51c.51 10.05 3.9 17.2 10.19 21.35 15.76 10.52 31.28-1.96 42.64-12.05L502.5 183.04c12.67-11.46 12.67-27.76 0-39.22L363.62 18.96c-11.9-10.69-28.78-26.39-45.87-14.99-6.29 4.17-9.68 11.33-10.19 21.38v76.31H6.33c-3.48 0-6.33 2.85-6.33 6.33v110.88c0 3.47 2.86 6.33 6.33 6.33h301.23v76.31z"/></svg>
                  Resume
                </div>
              </a>
              <Link href="/home" className="hover:text-greentext">
                <div className='flex'>
                  <svg style={{width:'15px', marginRight:'5px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 326.85"><path fill="#AF0404" fillRule="nonzero" d="M307.56 301.51c.51 10.05 3.9 17.2 10.19 21.35 15.76 10.52 31.28-1.96 42.64-12.05L502.5 183.04c12.67-11.46 12.67-27.76 0-39.22L363.62 18.96c-11.9-10.69-28.78-26.39-45.87-14.99-6.29 4.17-9.68 11.33-10.19 21.38v76.31H6.33c-3.48 0-6.33 2.85-6.33 6.33v110.88c0 3.47 2.86 6.33 6.33 6.33h301.23v76.31z"/></svg>
                  Contact Me
                </div>
              </Link>
              <div className='flex space-x-5 mt-4 mx-auto'>
                <a href='https://github.com/sadeeqdev' target="_blank" rel='noreferrer' className='hover:opacity-60'>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{height:'25px'}} viewBox="0 0 496 512"><path fill='#fff' d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                </a>
                <a href='https://linkedin.com/in/abubakar-ibrahim-84b9b623a/' rel='noreferrer' target="_blank" className='hover:opacity-60'>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{height:'25px'}} viewBox="0 0 448 512"><path fill='#fff' d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                </a>
                <a href='https://twitter.com/__aboubakar' target="_blank" rel='noreferrer' className='hover:opacity-60'>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{height:'25px'}} viewBox="0 0 640 512"><path fill='#fff' d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/></svg>
                </a>
                <a href='#' target="_blank" rel='noreferrer' className='hover:opacity-60'>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{height:'25px'}} viewBox="0 0 512 512"><path fill='#fff' d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                </a>
              </div>
          </div>
      </div>
    </div>
    </div>
     <div className='lg:border-b-1 border-sub-white bg-black h-15 lg:h-20 w-full mt-0 z-30 top-0 flex items-center text-white ' style={{borderBottom:((mobile && scrolled ) || !mobile) ? '1px solid #333' : 'none', position:scrolled ? 'fixed' :'relative'}}>
        <div className='w-11/12 xl:w-5/6 2xl:w-3/5  mx-auto flex flex-row justify-between items-center'>
          <div className='text-2xl font-medium lg:text-xl'>
            Sadeeq.<span className='text-sub-white font-normal'>dev</span>
          </div>
          <div className='hidden lg:flex space-x-7 text-lg text-sub-white'>
            <button className='hover:text-white'>
              About
            </button>
            <button className='hover:text-white'>
              Services
            </button>
            <button className='hover:text-white'>
              Stacks
            </button>
            <button className='hover:text-white'>
              Portflio
            </button>
            <a href='https://drive.google.com/file/d/18YPWVQrmLpP6aamqOIJ4sCdIwbgaMsSe/view?usp=sharing' target="_blank" rel='noreferrer' className='hover:text-white'>
              Resume
            </a >
            <button className='hover:text-white'>
              Contact
            </button>
            <a href='https://github.com/sadeeqdev' target="_blank" rel='noreferrer' className='hover:opacity-60'>
              <svg xmlns="http://www.w3.org/2000/svg" style={{height:'30px'}} viewBox="0 0 496 512"><path fill='#fff' d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            </a>
            <a href='https://linkedin.com/in/abubakar-ibrahim-84b9b623a/' target="_blank" rel='noreferrer' className='hover:opacity-60'>
              <svg xmlns="http://www.w3.org/2000/svg" style={{height:'30px'}} viewBox="0 0 448 512"><path fill='#fff' d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            </a>
          </div>
          <button className='lg:hidden' onClick={handleShow}>
            <svg fill="#fff" style={{width:'27px'}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/></svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar