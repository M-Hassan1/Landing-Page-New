
import React from 'react';
import CardPage from './CardPage';
import { cardsData } from '@/components/utils/arrays';

const BrowsReviews: React.FC = () => {
  return (
    <div className='text-center pt-32 '>
        <h1 className='text-4xl text-bold font-bold'>Brows Reviews</h1>
    <div className="flex justify-center items-center pt-4 ">
      <div className="grid grid-cols-4 gap-4">
        {cardsData.map((data, index) => (
          <CardPage
            key={index}
            profileIcon={data.profileIcon}
            name={data.name}
            rating={data.rating}
            description={data.description}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default BrowsReviews;
