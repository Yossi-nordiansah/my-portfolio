import React from 'react';
import Pusbas from './pusbas';
import Puskom from './puskom';

const Program = () => {
  return (
    <div className='flex flex-col md:gap-16 gap-10 px-4 py-6 sm:py-12'>
        <Pusbas/>
        <Puskom/>
        <video src="/videos/background.mp4" autoPlay loop className='fixed top-0 left-0 -z-10 object-cover'></video>
    </div>
  )
}

export default Program