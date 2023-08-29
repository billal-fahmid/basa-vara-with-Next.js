'use client'
import React from 'react';

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className='text-center py-10 '>
            <h2 className='text-2xl text-violet-500 font-semibold'>{title}</h2>
            <p className='text-[12px] text-gray-600'>{subTitle}</p>
        </div>
    );
};

export default SectionTitle;