import React from 'react'
import HomeImage from '@/components/Assets/Images/data.png';
import Image from 'next/image';

const BackGroundImage = () => {
  return (
    <div className="absolute inset-0 flex items-end justify-end">
    <div className="relative w-96 h-[480px] sm:w-80 sm:h-[380px] md:w-80 md:h-[380px] lg:w-[680px] lg:h-[480px]">
      <Image
        src={HomeImage}
        alt="Your Image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  </div>
  )
}

export default BackGroundImage