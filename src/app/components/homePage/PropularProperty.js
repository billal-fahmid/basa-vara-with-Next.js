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
//     https://i.ibb.co/j3Bhfvq/3d-contemporary-living-room-interior-modern-furniture-min.jpg
// https://i.ibb.co/RC11F5x/3d-rendering-loft-scandinavian-living-room-with-working-table-bookshelf-min.jpg
// https://i.ibb.co/7SMzSGz/bangkok-thailand-august-12-2016-beautiful-luxury-living-room-min.jpg
// https://i.ibb.co/MnrMr9W/bedroom-interior-min.jpg
// https://i.ibb.co/GCtdtGW/cozy-living-room-modern-apartment-min.jpg
// https://i.ibb.co/K24qjbC/dining-area-comfortable-studio-flat-hotel-room-min.jpg
// https://i.ibb.co/CJthPmQ/living-room-modern-apartment-with-two-identical-sofas-opposite-each-other-min.jpg
// https://i.ibb.co/FgdBk9B/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table-min.jpg
// https://i.ibb.co/FV24NR9/modern-studio-apartment-design-with-bedroom-living-space-1-min.jpg
// https://i.ibb.co/FV24NR9/modern-studio-apartment-design-with-bedroom-living-space-1-min.jpg
// https://i.ibb.co/kh7Mf3C/tidy-hotel-room-with-brown-curtains-min.jpg


    return (
        <div className='min-h-screen bg-gray-100 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pb-20 gap-5 p-5'>
            {
                properties.map(prot => <>
                  {  console.log(prot?.locationInformation?.division)}
                    <div>
                        <PropertyCard
                            flatImage={prot.flatImage}
                            area={prot?.locationInformation?.area}
                            division={prot?.locationInformation?.division}
                            district={prot?.locationInformation?.district}

                        ></PropertyCard>
                    </div>
                </>)
            }

        </div>
    );
};

export default PropularProperty;