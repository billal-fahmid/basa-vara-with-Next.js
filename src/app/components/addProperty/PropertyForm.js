'use client'
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";


const PropertyForm = () => {


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
    const allDistricts = [
        {
            division: "Dhaka",
            districts: [
                "Dhaka",
                "Faridpur",
                "Gazipur",
                "Gopalganj",
                "Kishoreganj",
                "Madaripur",
                "Manikganj",
                "Munshiganj",
                "Narayanganj",
                "Narsingdi",
                "Rajbari",
                "Shariatpur",
                "Tangail"
            ]
        },
        {
            division: "Chittagong",
            districts: [
                "Bandarban",
                "Brahmanbaria",
                "Chandpur",
                "Chittagong",
                "Comilla",
                "Cox's Bazar",
                "Feni",
                "Khagrachari",
                "Lakshmipur",
                "Noakhali",
                "Rangamati"
            ]
        },
        {
            division: "Khulna",
            districts: [
                "Bagerhat",
                "Chuadanga",
                "Jessore",
                "Jhenaidah",
                "Khulna",
                "Kushtia",
                "Magura",
                "Meherpur",
                "Narail",
                "Satkhira"
            ]
        },
        {
            division: "Rajshahi",
            districts: [
                "Bogura",
                "Chapainawabganj",
                "Joypurhat",
                "Naogaon",
                "Natore",
                "Pabna",
                "Rajshahi",
                "Sirajganj"
            ]
        },
        {
            division: "Barisal",
            districts: [
                "Barguna",
                "Barisal",
                "Bhola",
                "Jhalokathi",
                "Patuakhali",
                "Pirojpur"
            ]
        },
        {
            division: "Sylhet",
            districts: ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"]
        },
        {
            division: "Rangpur",
            districts: [
                "Dinajpur",
                "Gaibandha",
                "Kurigram",
                "Lalmonirhat",
                "Nilphamari",
                "Panchagarh",
                "Rangpur",
                "Thakurgaon"
            ]
        },
        {
            division: "Mymensingh",
            districts: ["Jamalpur", "Mymensingh", "Netrokona", "Sherpur"]
        }
    ];
    const [districts, setDistricts] = useState([])

    const handleSelectDistricts = division => {

        const currentDivision = allDistricts?.find(district => division === district?.division)
        setDistricts(currentDivision?.districts)
    }

    // const image_hosting_token = process.env.NEXT_PUBLIC_Image_Upload_Token;

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_Image_Upload_Token}`
    const { register, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);
    const onSubmit = data => {
        console.log(data.image[0])
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    const imgURL = imgData.data.display_url;
                    console.log(imgURL)
                    const { propertyType, division, district, area, houseName, availableMonth, propertyCategory, bedrooms, bathrooms, price, Summary, floorNo } = data;
                    const newProperty = { Summary, propertyType, locationInformation: { division, district, area }, basicInfo: { bedrooms, bathrooms, floorNo }, flatDetails: { availableFrom: availableMonth, propertyType: houseName, category: propertyCategory }, price, flatImage: imgURL }
                    console.log(newProperty)



                    fetch('api/add-propertis', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newProperty)
                    })
                        .then(data => {
                            console.log(data)
                        })



                }
            })

    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Add Property</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Property Type */}
                <div className="mb-4 flex gap-10">
                    <div className='w-1/2'>
                        <label className="block font-medium mb-1">Select Type</label>
                        <select
                            className="w-full border rounded p-2"
                            {...register("propertyType", { required: true })}
                   
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
                            {...register("image", { required: true })}
                  
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
                            {...register("division")}
                            // onChange={(e) => setDivision(e.target.value)}
                            onChange={(e) => handleSelectDistricts(e.target.value)}
                        >
                            <option value={''}>Division</option>
                            {
                                divisions?.map((divi, ind) => <option key={ind} value={divi}>{divi}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium mb-1">District</label>
                      
                        <select
                            type="text"
                            className="w-full border rounded p-2"
                            {...register("district")}
                       
                        >
                            <option value={''}>District</option>
                            {
                                districts?.map((district, ind) => <option key={ind} value={district}>{district}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Area</label>
                        <input
                            type="text"
                            className="w-full border rounded p-2"
                            {...register("area")}
                     
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">House Name</label>
                        <input
                            type="text"
                            className="w-full border rounded p-2"
                            {...register("houseName")}
                      
                        />
                    </div>
                </div>

                {/* Basic Information */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block font-medium mb-1">Available Month</label>
                        <select
                            className="w-full border rounded p-2"
                            {...register("availableMonth")}
                  
                        >
                            <option value="">Select Month</option>
                            <option value="january">January</option>
                            <option value="february">February</option>
                            <option value="march">March</option>
                            <option value="april">April</option>
                            <option value="may">May</option>
                            <option value="june">June</option>
                            <option value="july">July</option>
                            <option value="august">August</option>
                            <option value="september">September</option>
                            <option value="october">October</option>
                            <option value="november">November</option>
                            <option value="december">December</option>
                            {/* Add other months */}
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Property Type</label>
                        <input
                            type="text"
                            className="w-full border rounded p-2"
                            {...register("propertyCategory")}
                  
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Bedrooms</label>
                        <input
                            type="number"
                            className="w-full border rounded p-2"
                            {...register("bedrooms")}
                    
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Bathrooms</label>
                        <input
                            type="number"
                            className="w-full border rounded p-2"
                            {...register("bathrooms")}
                   
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Floor No</label>
                        <input
                            type="number"
                            className="w-full border rounded p-2"
                            {...register("floorNo")}
                     
                        />
                    </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Price (per month)</label>
                    <input
                        type="number"
                        className="w-full border rounded p-2"
                        {...register("price")}
                 
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-1">Summary</label>
                    <textarea
                        type="text"
                        className="w-full border rounded p-2"
                        {...register("Summary")}
                
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
