
import React from 'react';
import Rating from "@/components/assets/Images/Star9.png";
import Image from 'next/image';
import Profile from "@/components/assets/Images/Ellipse-8-(4).png";

interface CardProps {
  profileIcon: string;
  name: string;
  rating: number;
  description: string;
}

const CardPage: React.FC<CardProps> = ({ profileIcon, name, rating, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center">
        <Image
          src={Profile}
          alt={`Profile icon for ${name}`}
          className="w-12 h-12 rounded-full mb-4 md:mb-0 md:mr-4"
        />
        <div>
          <p className="text-xl font-semibold">{name}</p>
          <div className="flex">
            {Array.from({ length: rating }, (_, index) => (
              <Image src={Rating} alt='Alt' key={index} />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-2 text-center">{description}</p> {/* Display description */}
    </div>
  );
};

export default CardPage;
