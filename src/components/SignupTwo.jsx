import React, { useState } from 'react';
import LogoGoogle from '/assets/icon--google@2x.png';
import LogoFacebook from '/assets/vector@2x.png';
import frame from '/assets/Frame.png';

const SignupTwo = () => {
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

    const handleGoogleLogin = () => {
        // Add logic to handle Google login
    };

    const handleFacebookLogin = () => {
        // Add logic to handle Facebook login
    };

    return (
        <div className='flex-1 md:bg-gray-200 bg-white md:p-11 pt-1'>
            <div className='container mx-auto md:mb-2 md:mt-2 md:mx-14 bg-white p-6  rounded-lg md:p-10 h-full w-auto'>
                <h1 className='text-3xl font-extrabold text-textPrimary font-serif'>Welcome</h1>
                <h4 className='mb-2 font-semibold'>Create a new account</h4>
                <p className='text-left mb-4 text-zinc-700'>With a valid number, you can access deliveries, and our other services.</p>
                <div className='flex mb-4'>
                    <select
                        value={selectedCountryCode}
                        onChange={handleCountryCodeChange}
                        className='  bg-gray-5  ml-1 p-2 border-2 border-[#D8E3FF] rounded-xl text-lg mb-6 '
                    >
                        <option value='+91'>+91</option>
                        <option value='+1'>+1</option>
                        {/* Add more country codes as needed */}
                    </select>
                    <input
                        type='tel'
                        placeholder='Mobile Number'
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        className='flex-1  bg-gray-5  ml-1 w-full p-2 border-2 border-[#D8E3FF] rounded-xl text-lg mb-6'
                    />
                </div>
                <button onClick={handleNextClick} className='w-full   mb-12 transition duration-300 bg-primary rounded-3xl px-1 md:px-2 text-white  p-2 hover:bg-blue-500'>
                    Next
                </button>
                <img src={frame} className='mx-auto mb-12' alt="" />
                <button onClick={handleGoogleLogin} className='w-full bg-gray-50 text-zinc-800 p-2 mb-2 rounded-3xl flex items-center justify-center hover:bg-gray-100 transition duration-300'>
                    <img src={LogoGoogle} className='mr-10' alt="" />
                    Login with Google
                </button>
                <button onClick={handleFacebookLogin} className='w-full bg-gray-50 text-zinc-800 p-2 rounded-3xl flex items-center justify-center hover:bg-gray-100 transition duration-300'>
                    <img src={LogoFacebook} className='mr-10' alt="" />
                    Login with Facebook
                </button>
            </div>
        </div>
    );
};

export default SignupTwo;
