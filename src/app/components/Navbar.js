'use client'
import Link from 'next/link';
import React from 'react';
import NavbarTop from './NavbarTop';
import { FaEarthAfrica, FaMagnifyingGlass } from 'react-icons/fa6'
import { BuildingCommunity, Heart, HomeCheck, MapPins } from 'tabler-icons-react';

const Navbar = () => {
    return (
        <div className='fixed z-10  w-full'>
            <NavbarTop></NavbarTop>
            <div className='flex justify-between items-center border-y-[1px] lg:px-24 md:px-16 sm:px-10 px-5 border-gray-300 bg-black'>
                <ul className='flex text-[16px] text-gray-100 gap-5  py-3 w-full'>
                    <li className=' '><Link className='flex items-center gap-1' href={'/'}>
                        <HomeCheck
                            size={20}
                            strokeWidth={1}
                            color={'white'}
                        /> Home</Link>
                    </li>
                    <li className=''><Link className='flex items-center gap-1' href={'/homemap'}>
                        <MapPins
                            size={20}
                            strokeWidth={1}
                            color={'white'}
                        />
                        Home Map</Link></li>
                    <li className=''><Link className='flex items-center gap-1' href={'/arealist'}>
                        <BuildingCommunity
                            size={20}
                            strokeWidth={1}
                            color={'white'}
                        />
                        Area List</Link></li>
                    <li className=''><Link className='flex items-center gap-1' href={'/savehome'}>
                        <Heart
                            size={20}
                            strokeWidth={1}
                            color={'white'}
                        />
                        Save Home</Link></li>
                </ul>
                <div>
                    <button className='flex gap-2 items-center w-full'><span className=''><FaMagnifyingGlass></FaMagnifyingGlass></span> Search </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;