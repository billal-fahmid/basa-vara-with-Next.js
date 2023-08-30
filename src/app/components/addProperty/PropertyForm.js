'use client'
import React, { useState } from 'react';

const PropertyForm = () => {
    const [propertyType, setPropertyType] = useState('');
    const [division, setDivision] = useState('');
    const [district, setDistrict] = useState('');
    const [area, setArea] = useState('');
    const [houseName, setHouseName] = useState('');
    const [availableMonth, setAvailableMonth] = useState('');
    const [propertyCategory, setPropertyCategory] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [price, setPrice] = useState('');
    const [propertyImage, setPropertyImage] = useState(null);

    const divisions = [
        "Dhaka",
        "Chittagong",
        "Khulna",
        "Rajshahi",
        "Barisal",
        "Sylhet",
        "Rangpur",
        "Mymensingh"
      ];

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setPropertyImage(imageFile);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Add Property</h2>
            <form onSubmit={handleSubmit}>
                {/* Property Type */}
                <div className="mb-4 flex gap-10">
                    <div className='w-1/2'>
                        <label className="block font-medium mb-1">Select Type</label>
                        <select
                            className="w-full border rounded p-2"
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                        >
                            <option value="">Select Type</option>
                            <option value="family">Family</option>
                            <option value="sublet">Sublet</option>
                            <option value="hostel">Hostel</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="bachelor">Bachelor</option>
                            <option value="office">Office</option>
                            <option value="shop">Shop</option>
                        </select>
                    </div>
                    <div className="w-1/2">
                        <label className="block font-medium mb-1">Property Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                </div>


                {/* Location Information */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block font-medium mb-1">Division</label>
                        <select
                            type="text"
                            className="w-full border rounded p-2"
                            value={division}
                            onChange={(e) => setDivision(e.target.value)}
                        >
                          
                             {
                                divisions?.map((divi,ind)=> <option key={ind} value={divi}>{divi}</option>)
                             }
                            </select>
                    </div>
                    <div>
                        <label className="block font-medium mb-1">District</label>
                        <input
                            type="text"
                            className="w-full border rounded p-2"
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Area</label>
                        <input
                            type="text"
                            className="w-full border rounded p-2"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">House Name</label>
                        <input
                            type="text"
                            className="w-full border rounded p-2"
                            value={houseName}
                            onChange={(e) => setHouseName(e.target.value)}
                        />
                    </div>
                </div>

                {/* Basic Information */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block font-medium mb-1">Available Month</label>
                        <select
                            className="w-full border rounded p-2"
                            value={availableMonth}
                            onChange={(e) => setAvailableMonth(e.target.value)}
                        >
                            <option value="">Select Month</option>
                            <option value="january">January</option>
                            {/* Add other months */}
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Property Type</label>
                        <input
                            type="text"
                            className="w-full border rounded p-2"
                            value={propertyCategory}
                            onChange={(e) => setPropertyCategory(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Bedrooms</label>
                        <input
                            type="number"
                            className="w-full border rounded p-2"
                            value={bedrooms}
                            onChange={(e) => setBedrooms(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Bathrooms</label>
                        <input
                            type="number"
                            className="w-full border rounded p-2"
                            value={bathrooms}
                            onChange={(e) => setBathrooms(e.target.value)}
                        />
                    </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Price (per month)</label>
                    <input
                        type="number"
                        className="w-full border rounded p-2"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default PropertyForm;
``
