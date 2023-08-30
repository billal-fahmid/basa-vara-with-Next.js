import React from 'react';
import SectionTitle from '../SectionTitle';
import CategoryBtn from './CategoryBtn';

const RecentPublished = () => {
    return (
        <div className='py-10 px-5'>
            <SectionTitle title={'Recent published property'} subTitle={'THIS PROPERTIES POST RECENTLY'}></SectionTitle>
            <CategoryBtn category={'Family'}></CategoryBtn>
        </div>
    );
};

export default RecentPublished;