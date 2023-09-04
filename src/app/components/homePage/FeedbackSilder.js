import React, { useEffect, useRef, useState } from 'react';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

import { FreeMode, Pagination } from 'swiper/modules';


const FeedbackSlider = () => {
    const [feedbackData, setFeedbackData] = useState([]);
    useEffect(() => {
        fetch('api/feedback')
            .then((res) => res.json())
            .then((data) => setFeedbackData(data.result));
    }, []);
    console.log(feedbackData);


    return (
        <>
            <div id='app' className='bg-gray-100 p-10'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {feedbackData?.map((feedback, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-lg p-6 shadow-lg h-[420px]">
                                <div className="mb-4 pt-4">
                                    <img
                                        src={feedback?.profileImage}
                                        alt={feedback?.name}
                                        className="w-16 h-16 rounded-full mx-auto"
                                    />
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800">{feedback?.name}</h2>
                                <div className="text-yellow-400">
                                    {/* Add star rating UI here */}
                                    <h3>Rated {feedback?.rating}</h3>
                                </div>
                                <p className="text-gray-600 mt-2">{feedback?.feedback}</p>
                            </div>
                        </SwiperSlide>
                            ))}
                    {/* <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide> */}
                </Swiper>
            </div>
        </>
        // <Swiper {...swiperOptions}>
        //     {feedbackData?.map((feedback, index) => (
        //         <SwiperSlide key={index}>
        //             <div className="bg-white rounded-lg p-4 shadow-lg">
        //                 <div className="mb-4">
        //                     <img
        //                         src={feedback?.profileImage}
        //                         alt={feedback?.name}
        //                         className="w-16 h-16 rounded-full mx-auto"
        //                     />
        //                 </div>
        //                 <h2 className="text-xl font-semibold text-gray-800">{feedback?.name}</h2>
        //                 <div className="text-yellow-400">
        //                     {/* Add star rating UI here */}
        //                     <h2>This is slider one</h2>
        //                 </div>
        //                 <p className="text-gray-600 mt-2">{feedback?.feedback}</p>
        //             </div>
        //         </SwiperSlide>
        //     ))}
        //     <div className="swiper-pagination"></div>
        //     <div className="swiper-button-prev"></div>
        //     <div className="swiper-button-next"></div>
        // </Swiper>
    );
};

export default FeedbackSlider;
