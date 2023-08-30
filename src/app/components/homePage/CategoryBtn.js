import React from 'react';

const CategoryBtn = ({ category, }) => {
    return (
        <div className='flex justify-between items-center py-5'>
            <h2 className="text-2xl font-semibold text-gray-800">{category}</h2>
            <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full transform hover:scale-105 transition duration-300">
                See All Properties
            </button>
        </div>
    );
};

export default CategoryBtn;