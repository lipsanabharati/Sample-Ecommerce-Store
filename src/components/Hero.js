import React from 'react';
//import image
import WomanImg from '../img/woman_hero.png';
//import Link
import {Link} from 'react-router-dom';

const Hero = ({scrolltoDiscover}) => {
  return (<section className='bg-pink-200 h-[800px] bg-no-repeat bg-cover bg-center py-24 bg-hero'>
    <div className='container'>
     <div className='grid grid-cols-2'>
        <div className='flex-col '>
          <div className='my-[200px] ml-[200px]'>
            <h1 className='font-bold text-6xl mb-3'>Womens Best Stylish Clothing</h1>
            <Link to='#' onClick={scrolltoDiscover} className='border-b border-black'>Discover More</Link>
          </div>
        </div>
        <div className='gap-4'>
          <img src={WomanImg} alt='' className='mx-auto' />
        </div>
     </div>
    </div>
  </section>);
};

export default Hero;
