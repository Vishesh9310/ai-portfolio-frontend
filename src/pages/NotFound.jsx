import React from 'react'
import Notfound from '../assets/notfound/animation.webp';

const NotFound = () => {
  return (
    <div className='h-screen bg-[#EEF2F6] flex justify-center items-center'>
        <img src={Notfound} alt="Page Not Found" className='w-200 h-200 rounded-4xl object-contain'/>
    </div>
  )
}

export default NotFound