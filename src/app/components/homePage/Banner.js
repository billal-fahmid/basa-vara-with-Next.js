'use client'
import React from 'react';
import image1 from '../../../../public/Screenshot_565.png'

const Banner = () => {
    return (
        <div className="relative p-5 h-auto">
            {/* <img src={image1} alt="" /> */}
            {/* Banner Image */}
            <img
                src='https://i.ibb.co/GRnWk78/Screenshot-565.png'
                alt="Banner"
                className="w-full h-auto"
            />

            {/* Cards */}
            <div className="flex justify-center mt-[-70px] space-x-4 relative px-5">

                <div className="bg-white shadow-md rounded-lg text-left  transform hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                    {/* Card Image */}
                    <img src='https://i.ibb.co/CJthPmQ/living-room-modern-apartment-with-two-identical-sofas-opposite-each-other-min.jpg' alt="Card 1" className="mb-3 w-52 p-3 h-32 rounded-lg" />
                    {/* Card content */}
                    <h3 className="text-xl text-left font-semibold mb-2">Home</h3>

                </div>


                <div className="bg-white shadow-md rounded-lg text-left  transform hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                    {/* Card Image */}
                    <img src='https://i.ibb.co/gJckYJ7/indoor-hotel-view-min.jpg' alt="Card 1" className="mb-3 w-52 p-3 h-32 rounded-lg" />
                    {/* Card content */}
                    <h3 className="text-xl text-left font-semibold mb-2">Hotel</h3>

                </div>

                <div className="bg-white shadow-md rounded-lg text-left  transform hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                    {/* Card Image */}
                    <img src='https://i.ibb.co/ZfYN0qF/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling-min.jpg' alt="Card 1" className="mb-3 w-52 p-3 h-32 rounded-lg" />
                    {/* Card content */}
                    <h3 className="text-xl text-left font-semibold mb-2">Restaurant</h3>

                </div>
                <div className="bg-white shadow-md rounded-lg text-left  transform hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                    {/* Card Image */}
                    <img src='https://i.ibb.co/Rj4bZ53/building-night-min.jpg' alt="Card 1" className="mb-3  w-52 p-3 h-32 rounded-lg" />
                    {/* Card content */}
                    <h3 className="text-xl text-left font-semibold mb-2">Shoping Mall</h3>

                </div>


            </div>
        </div>
    );
};

export default Banner;
