import React from 'react';
import Pusbas from './pusbas';
import Puskom from './puskom';

const Program = () => {
  return (
    <div className='flex flex-col md:gap-16 gap-10 px-4 py-6 shadow-2xl sm:py-12 bg-netral' style={{backgroundImage: `url(/images/bg-program7.png)`,backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <Pusbas/>
        <Puskom/>
    </div>
  )
}

export default Program