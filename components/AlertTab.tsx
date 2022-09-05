import React, { useEffect, useState } from 'react'

const AlertTab = (props:any) => {
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
        props.checkClose(false)
    }

    useEffect(() =>{
        setOpen(props.checkOpen)
    },[props.checkOpen])

  return (
     <>
    {open ? (
    <div className='fixed transition-all h-screen w-screen flex justify-center items-center top-0 left-0 botton-0 right-0 z-40 backdrop-filter backdrop-blur-sm bg-opacity-10'>
            <div className='h-100 w-120 bg-dark rounded '>
              <div className='flex p-5 justify-between'>
                <p className='text-xl'></p>
                <button className='text-red hover:text-subRed text-lg' onClick={handleClose}>Close</button>
              </div>
              <div className='text-white text-4xl mt-15 text-center items-center font-normal'>
                    <div>Thanks for sending a message. I will get back to you soon.</div>
              </div>
            </div>
        </div>
    ) : ''}
    </>
  )
}

export default AlertTab