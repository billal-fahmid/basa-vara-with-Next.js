'use client'
import React, { useState } from 'react';
import Navbar from '../Navbar';
import HomeNavbar from '../HomeNavbar';
import Footer from '../Footer';



const MainAll = ({children}) => {
    const [show , setShow] = useState(false)

    console.log(show)
    return (
        <div className=' '>

        <div className=''>

          <Navbar></Navbar>
          <div className='lg:px-24 md:px-16 sm:px-10 px-5'>
            <div className='flex '>
              <div className='w-[20%] border-r-[1px] pt-32 border-gray-300'>
                <HomeNavbar show={show}></HomeNavbar>
              </div>
              <div className='w-[80%] pt-32'> {children}</div>
            </div>
          </div>


        </div>
        <Footer setShow={setShow}></Footer>
      </div>
    );
};

export default MainAll;