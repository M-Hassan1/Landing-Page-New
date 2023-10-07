import Image from 'next/image';
import BgImage from '@/components/Assets/Images/Rectangle 2.png';
import BackGroundImage from './BackGroundImage';
import Content from './Content';

const HomePage = () => {
  return (
    <div className="relative ">
      {/* Background Image */}
      <div className="relative">
        <Image className="bg-cover w-full bg-center" src={BgImage} alt="Background" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-700 opacity-80"></div>

        {/* Content */}
        <Content />
      </div>

      {/* Image on the right (Responsive and at the bottom-right corner) */}
      <BackGroundImage />
    </div>
  );
};

export default HomePage;