import React from 'react';
import CardPage from './CardPage';
import { cardsData } from '@/components/utils/arrays';

const BrowsReviews: React.FC = () => {
  return (
    <div className='text-center pt-8 pb-16'>
      <h1 className='text-4xl font-bold'>Brows Reviews</h1>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
