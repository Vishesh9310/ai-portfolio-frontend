import React, { useEffect } from 'react'
import tku from '../assets/notfound/animation.webp';
import { useNavigate } from 'react-router-dom';

const Thankyou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Redirect to homepage after 5 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='h-screen flex justify-center items-center'>
      {/* <img src={tku} alt="Page Not Found" className='w-200 h-200 rounded-4xl object-contain'/> */}
      Thankyou
      <p className="mt-4 text-gray-600">Redirecting to homepage...</p>
    </div>
  )
}

export default Thankyou;