import Image from 'next/image';
import React from 'react';
import BgImage from '@/components/assets/Images/Background.png';
import HomeImage from '@/components/assets/Images/data.png';

const HomePage = () => {
  return (
    <div className="cover-container">
      <Image src={BgImage} alt="Cover Photo" className="cover-photo" />
      <div className="overlay">
        <div className="flex-container">
          <div className="text text-2xl "><h1>To be the best, 
            </h1>
          <h1 className='text-[#67E776] text-2xl ' >Choose the best...</h1>
          <h4 className='pt-3 text-[12px]'>Company reviews, Course review, Internship</h4>
          <input className='p-1 w-full text-md rounded-md outline-none text-black' type="search" placeholder='Searh Here' />
          </div>
          <Image src={HomeImage} alt="Text Image" className="text-image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;












