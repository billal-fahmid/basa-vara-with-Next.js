'use client';
import React from 'react';
import { FaEarthAfrica ,FaMagnifyingGlass } from 'react-icons/fa6'
import { HiOutlineBell } from "react-icons/hi";
import { DarkThemeToggle, Flowbite, Avatar } from 'flowbite-react';
import Link from 'next/link';

const NavbarTop = () => {
    return (
        <div className='flex justify-between items-center lg:px-24 md:px-16 sm:px-10 px-5 bg-[#0a7bbd]'>
            <div className='py-3 text-white'>
                <h1 className='text-white font-semibold text-2xl'>Bachelors Home</h1>
                <p>Solution of Basa Vara</p>
            </div>
            <div className='flex items-center gap-4 text-xl'>
                <Link href={'/addproperty'} className='py-2 px-5 text-[16px] border-white text-white border'> <span>+</span> Add Home </Link>
                <Flowbite>

                    <DarkThemeToggle />

                </Flowbite>
                <button><FaEarthAfrica></FaEarthAfrica></button>
                <button><HiOutlineBell></HiOutlineBell></button>
                <Avatar
                    rounded
                />

            </div>

        </div>
    );
};

export default NavbarTop;