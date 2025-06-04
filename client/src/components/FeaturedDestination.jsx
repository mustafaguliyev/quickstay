import React from 'react';
import { roomsDummyData } from '../assets/assets';
import HotelCard from '../components/HotelCard.jsx';
import Title from './Title.jsx';
import { useNavigate } from 'react-router-dom';

function FeaturedDestination() {
  const navigate = useNavigate();

  return (
    <div className='px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
      <Title
        title='Featured Destination'
        subTitle='Discover our handpicked selection of exceptional properties around 
            the world, offering unparalleled luxury and unforgettable experiences'
      />

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20'>
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <div className='flex justify-center'>
        <button
          onClick={() => {
            navigate('/rooms');
            scrollTo(0, 0);
          }}
          className='my-16 px-6 py-2 text-sm font-medium 
          text-gray-700 border border-gray-300 rounded bg-white hover:bg-gray-100
          hover:shadow-md transition-all duration-200 shadow cursor-pointer'
        >
          View All Hotels
        </button>
      </div>
    </div>
  );
}

export default FeaturedDestination;
