import React from 'react';
import SectionTitle from '../SectionTitle';
import FeedbackSlider from './FeedbackSilder';

const Feedback = () => {
    return (
        <div className=''>
            <SectionTitle title={'Feedback'} subTitle={'OUR USERS SEND US BUNCH OF SMILIES WITH OUR SERVICES, AND WE LOVE THEM 😍'}></SectionTitle>
            <div className='py-10 px-5'>
                <FeedbackSlider></FeedbackSlider>
            </div>
        </div>
    );
};

export default Feedback;