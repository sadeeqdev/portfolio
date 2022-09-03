import React from 'react'

const Skills = () => {
  return (
    <div className='lg:w-11/12 w-4/5 mt-10 mx-auto justify-center text-lg lg:text-2xl flex space-x-5 text-sub-white '>
        <div className='text-center flex flex-col justify-center w-70' data-aos="fade-up" data-aos-delay="200">
            <svg xmlns="http://www.w3.org/2000/svg" style={{height:'30px'}} viewBox="0 0 512 512"><path fill="#444" d="M7.724 65.49C13.36 55.11 21.79 46.47 32 40.56C39.63 36.15 48.25 33.26 57.46 32.33C59.61 32.11 61.79 32 64 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 93.79 .112 91.61 .3306 89.46C1.204 80.85 3.784 72.75 7.724 65.49V65.49zM48 416C48 424.8 55.16 432 64 432H448C456.8 432 464 424.8 464 416V160H48V416z"/></svg>
            Web Developer
        </div>
        <div className='text-center flex flex-col justify-center w-70' data-aos="fade-up" data-aos-delay="200">
            <svg xmlns="http://www.w3.org/2000/svg" style={{height:'30px'}} viewBox="0 0 384 512"><path fill="#444" d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zM192 464c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg>
            Mobile Developer
        </div>
        <div className='text-center flex flex-col justify-center w-70' data-aos="fade-up" data-aos-delay="200">
            <svg xmlns="http://www.w3.org/2000/svg" style={{height:'30px'}} viewBox="0 0 512 512"><defs></defs><path fill="#444" className="fa-primary" d="M175.7 271.1C182.4 271.9 188.7 274.6 193.3 279.4L232.2 320L303.8 233.8C308.4 228.3 315.2 225.1 322.3 225.1C329.4 225.1 336.2 228.3 340.7 233.8L413.4 321.2L358.1 416.9C355.3 421.9 350 424.9 344.3 424.9H167.7C161.1 424.9 156.7 421.9 153.9 416.9L107.1 335.9L158.3 279.8C162.8 274.9 169.1 272.1 175.7 271.1V271.1z"/><path className="fa-secondary" fill="#444" d="M105.4 67.08C118.2 44.8 141.1 31.08 167.7 31.08H344.3C370 31.08 393.8 44.8 406.6 67.08L494.9 219.1C507.8 242.3 507.8 269.7 494.9 291.1L406.6 444.9C393.8 467.2 370 480.9 344.3 480.9H167.7C141.1 480.9 118.2 467.2 105.4 444.9L17.07 291.1C4.206 269.7 4.206 242.3 17.07 219.1L105.4 67.08zM158.3 279.8L107.1 335.9L153.9 416.9C156.7 421.9 161.1 424.9 167.7 424.9H344.3C350 424.9 355.3 421.9 358.1 416.9L413.4 321.2L340.7 233.8C336.2 228.3 329.4 225.1 322.3 225.1C315.2 225.1 308.4 228.3 303.8 233.8L232.2 320L193.3 279.4C188.7 274.6 182.4 271.9 175.7 271.1C169.1 272.1 162.8 274.9 158.3 279.8V279.8zM192 199.1C214.1 199.1 232 182.1 232 159.1C232 137.9 214.1 119.1 192 119.1C169.9 119.1 152 137.9 152 159.1C152 182.1 169.9 199.1 192 199.1z"/></svg>
            Blockchain Developer
        </div>
    </div>
  )
}

export default Skills