import usePropertyByCategory from '@/app/hooks/usePropertyByCategory';
import React from 'react';
import PropertyCard from './PropertyCard';

const FamilyProperty = () => {
    const { data } = usePropertyByCategory("family")
    console.log(data)
    return (
        <div className='min-h-screen bg-gray-100 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pb-20 gap-5 p-5'>
            {
                data?.map(prot => <>
                    {console.log(prot?.locationInformation?.division)}
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

export default FamilyProperty;