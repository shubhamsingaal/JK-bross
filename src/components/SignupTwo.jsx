import React, { useState } from 'react';
import LogoGoogle from '../assets/icon--google@2x.png';
import LogoFacebook from '../assets/vector@2x.png';
import welcome from '../assets/welcome.png';
import frame from '../assets/Frame.png';

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
        <div className='flex-1 bg-gray-200 p-11'>
            <div className='container mx-auto bg-white p-6 rounded-md h-full'>
                <img src={welcome} alt='Logo' className='mx-5 mb-10' />
                <h4 className='mb-2 font-semibold'>Create a new account</h4>
                <p className='text-left mb-4 text-zinc-700'>With a valid number, you can access deliveries, and our other services.</p>
                <div className='flex mb-4'>
                    <select
                        value={selectedCountryCode}
                        onChange={handleCountryCodeChange}
                        className='p-2 border bg-gray-50 border-gray-300 rounded-l-md'
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
                        className='flex-1 p-2 border bg-gray-50 border-gray-300 rounded-r-md ml-1'
                    />
                </div>
                <button onClick={handleNextClick} className='w-full bg-blue-500 text-white p-2 mb-12 rounded-md hover:bg-blue-600 transition duration-300'>
                    Next
                </button>
                <img src={frame} className='mx-auto mb-12' alt="" />
                <button onClick={handleGoogleLogin} className='w-full bg-gray-50 text-zinc-800 p-2 mb-2 rounded-md flex items-center justify-center hover:bg-gray-100 transition duration-300'>
                    <img src={LogoGoogle} className='mr-10' alt="" />
                    Login with Google
                </button>
                <button onClick={handleFacebookLogin} className='w-full bg-gray-50 text-zinc-800 p-2 rounded-md flex items-center justify-center hover:bg-gray-100 transition duration-300'>
                    <img src={LogoFacebook} className='mr-10' alt="" />
                    Login with Facebook
                </button>
            </div>
        </div>
    );
};

export default SignupTwo;
