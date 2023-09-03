'use client'
import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';

const PropularProperty = () => {

    const [properties, setProperties] = useState([])

    useEffect(() => {
        fetch('api/propertis')
            .then(res => res.json())
            .then(data => setProperties(data.result))
    }, [])

    console.log('this all------->', properties)
    // http://localhost:3000/
    // https://basa-vara-with-next-js.vercel.app/
    // https://basa-vara-with-next-fianw29gp-billal-fahmid.vercel.app/



    return (
        <div className='min-h-screen bg-gray-100 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pb-20 gap-5 p-5'>
            {
                properties?.slice(0, 18).map(prot => <>
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