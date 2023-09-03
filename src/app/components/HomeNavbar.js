'use client'
import React from 'react';
import { BrandOffice, Coffee, HomeInfinity, HomeShield, HomeSignal } from 'tabler-icons-react';

const HomeNavbar = ({show}) => {
    console.log(show)
    
    return (
        <section >
            <div className={`${show ? '' : 'fixed'}`}>
                <div className='flex flex-col gap-5 justify-center mt-10 items-center py-5'>
                    <button className='py-2 w-full  border-b-[1px] border-gray-300 hover:border-gray-500 flex justify-center items-center gap-1'>
                        <HomeSignal
                            size={20}
                            strokeWidth={1}
                            color={'black'}
                        />
                        Family
                    </button>
                    <button className='py-2 px-5 w-full  justify-center border-b-[1px] border-gray-300 hover:border-gray-500 flex items-center gap-1'>
                        <HomeInfinity
                            size={20}
                            strokeWidth={1}
                            color={'black'}
                        />
                        Bachelor</button>
                    <button className='py-2 px-5 w-full justify-center border-b-[1px] border-gray-300 hover:border-gray-500 flex items-center gap-1'>
                        <BrandOffice
                            size={20}
                            strokeWidth={1}
                            color={'black'}
                        />
                        Office</button>
                    <button className='py-2 px-5 w-full justify-center border-b-[1px] border-gray-300 hover:border-gray-500 flex items-center gap-1'>
                        <HomeShield
                            size={20}
                            strokeWidth={1}
                            color={'black'}
                        />
                        Hotel</button>
                    <button className='py-2 px-5 w-full justify-center border-b-[1px] border-gray-300 hover:border-gray-500 flex items-center gap-1'>
                        <Coffee
                            size={20}
                            strokeWidth={1}
                            color={'black'}
                        />
                        Restaurant</button>
                </div>
            </div>
        </section>
    );
};

export default HomeNavbar;