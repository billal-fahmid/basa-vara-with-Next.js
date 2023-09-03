import React from 'react';
import SectionTitle from '../SectionTitle';
import CategoryBtn from './CategoryBtn';
import FamilyProperty from './FamilyPropery';
import BachelorsProperty from './BachelorsProperty';
import OfficeProperty from './OfficeProperty';
import HotelProperty from './HotelProperty';
import RestaurantProperty from './RestaurantProperty';

const RecentPublished = () => {
    return (
        <div className='py-10 px-5'>
            <SectionTitle title={'Recent published property'} subTitle={'THIS PROPERTIES POST RECENTLY'}></SectionTitle>
            <CategoryBtn category={'Family'}></CategoryBtn>
            <FamilyProperty></FamilyProperty>
            <CategoryBtn category={'Bachelors'}></CategoryBtn>
            <BachelorsProperty></BachelorsProperty>
            <CategoryBtn category={'Offices'}></CategoryBtn>
            <OfficeProperty></OfficeProperty>
            <CategoryBtn category={'Hotel'}></CategoryBtn>
            <HotelProperty></HotelProperty>
            <CategoryBtn category={'Restaurant'}></CategoryBtn>
            <RestaurantProperty></RestaurantProperty>
        </div>
    );
};

export default RecentPublished;