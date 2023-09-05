import React from 'react';
import SectionTitle from '../SectionTitle';
import LocationCard from './LocationCard';

const PopularLocation = () => {
    const popularPlaces = [
        'Dhaka, Gulshan',
        'Dhaka, Banani',
        'Dhaka, Dhanmondi',
        'Dhaka, Uttara',
        'Dhaka, Mirpur',
        'Chattogram, GEC Circle',
        'Chattogram, Agrabad',
        'Chattogram, Panchlaish',
        'Chattogram, Nasirabad',
        'Sylhet, SUST Campus area',
        'Sylhet, Amberkhana',
        'Sylhet, Upashahar',
        'Khulna, Boyra',
        'Khulna, Khalishpur',
        'Khulna, Sonadanga',
        'Rajshahi, Laxmipur',
        'Rajshahi, Shaheb Bazar',
        'Rajshahi, Shiroil',
        'Cox\'s Bazar, Inani Beach',
        'Cox\'s Bazar, Sugandha Beach',
        'Cox\'s Bazar, Kolatoli Beach',
        'Barisal, Banaripara',
        'Barisal, Sadar Road',
        'Barisal, Airport Road'
      ];
      
     
      
    return (
        <div className='p-5 pb-16'>
            <SectionTitle title={'Most popular places'} subTitle={'PROPERTIES IN MOST POPULAR PLACES'}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-gray-100 p-5'>
              {
                popularPlaces?.map((location, index)=>  <LocationCard key={index} locationName={location}></LocationCard>)
              }
            </div>
        </div>
    );
};

export default PopularLocation;