// components/LocationCard.js
import Link from 'next/link';
import React from 'react';

const LocationCard = ({ locationName }) => {
    return (
        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer">
            <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-location" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                </svg>
                <Link href={''} className="text-[16px] font-semibold hover:border-b-2 border-[#00abfb] ">{locationName}</Link>
            </div>
        </div>
    );
};

export default LocationCard;
