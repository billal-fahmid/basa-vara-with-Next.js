'use client'
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const Footer = ({setShow}) => {
      const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
      })
      console.log('from main',inView)
     useEffect(()=>{
        setShow(inView)
     },[inView])

  return (
    <footer className="bg-[#0a7bbd] text-white py-12 " id='' ref={ref}>
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            urna a nulla euismod suscipit.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <ul className="text-sm">
            <li>Email: info@example.com</li>
            <li>Phone: +123 456 789</li>
            <li>Address: 123 Main Street, City</li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Offers</h2>
          <ul className="text-sm">
            <li>Special Discounts</li>
            <li>Seasonal Promotions</li>
            <li>Refer a Friend Program</li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-xl hover:text-gray-300 transition duration-300"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-xl hover:text-gray-300 transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-xl hover:text-gray-300 transition duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">
          {/* &copy; {new Date().getFullYear()} Bachelors Home. All Rights Reserved. */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
