import React, { useState } from 'react';
import { Button } from '../../ui';

const PSignupTwo = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedCountryCode, setSelectedCountryCode] = useState('');

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleCountryCodeChange = (e) => {
        setSelectedCountryCode(e.target.value);
    };

    const handleNextClick = () => {
        // Add logic to handle the "Next" button click
    };


    return (
        <div className='flex-1 md:bg-gray-200 bg-white md:p-11 pt-1'>
            <div className='container sm:p-10 mx-auto md:mb-2 md:mt-2 xl:mx-14 bg-white p-7  rounded-lg md:p-10 h-full w-auto'>
                <h1 className='text-3xl font-extrabold text-textPrimary font-serif mb-4'>Welcome</h1>
                
                <p className='text-left text-md mb-5 text-black font-semibold'>Movers & Packers account
                    sign-up/login</p>
                <div className='flex '>
                    <select
                        value={selectedCountryCode}
                        onChange={handleCountryCodeChange}
                        className='  bg-gray-5 h-10 ml-1 p-2 border-2 border-[#D8E3FF] rounded-xl text-lg mb-6 '
                    >
                        <option value='+91'>+91</option>
                        <option value='+1'>+1</option>
                        {/* Add more country codes as needed */}
                    </select>
                    <input
                        type='number'
                        placeholder='Mobile Number'
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        className='flex-1  bg-gray-5  ml-1 w-full h-10 p-2 border-2 border-[#D8E3FF] rounded-xl text-lg mb-6'
                    />
                </div>
                
                <Button  >Next</Button>
                
            </div>
        </div>
    );
};

export default PSignupTwo;
