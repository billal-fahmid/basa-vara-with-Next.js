'use client'
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import PropertyForm from '../components/addProperty/PropertyForm';

const AddProperty = () => {
    return (
        <div className='p-5'>
            {/* <SectionTitle title={'Add Your Property'} subTitle={'Add & Relax '}></SectionTitle> */}
            <div>
                <PropertyForm></PropertyForm>
            </div>
        </div>
    );
};

export default AddProperty;