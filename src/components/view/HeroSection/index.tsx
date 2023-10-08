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
        <div className="">
          <h1 className='font-poppins sm:text-lg md:text-4xl font-extrabold text-4xl text-white'>
            To be the best, 
          </h1>
          <h1 className='text-[#67E776] font-poppins sm:text-lg md:text-4xl font-extrabold text-4xl'>
            Choose the best...
          </h1>
          <h4 className='pt-3 sm:text-[14px] md:text-[17px] font-poppins text-white text-[18px]'>
            Company reviews, Course review, Internship
          </h4>
          <div className="inputMain flex mt-3">
            <input className='p-2 w-full text-lg rounded-md outline-none text-black' type="search" placeholder='Search Here' />
            <button className='ml-2 px-4 py-2 bg-[#67E776] rounded-md'>
              Search
            </button>
          </div>
        </div>
            <Image src={HomeImage} alt="Text-Image" className="text-image" />
          </div>
      </div>
    </div>
  );
};

export default HomePage;












