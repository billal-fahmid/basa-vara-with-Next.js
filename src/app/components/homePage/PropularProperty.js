'use client'
import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';

const PropularProperty = () => {

    const [properties, setProperties] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/propertis')
            .then(res => res.json())
            .then(data => setProperties(data.result))
    }, [])

    console.log('this all------->', properties)


    return (
        <div className='min-h-screen bg-gray-100 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 p-10'>
            {
                properties.map(prot => <>
                    <div>
                        <PropertyCard
                            flatImage={prot.flatImage}
                            area="Gulshan Apartment"
                            division="Dhaka"
                            district="Dhaka"

                        ></PropertyCard>
                    </div>
                </>)
            }

        </div>
    );
};

export default PropularProperty;