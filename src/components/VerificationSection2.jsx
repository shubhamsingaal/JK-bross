import React, { useState, useRef } from 'react';
import verification from '../assets/Verification.png';
import frame from '../assets/Frame.png';

const VerificationSection2 = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef([
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
    ]);

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Focus on the next input box
        if (index < 3 && value !== '') {
            inputRefs.current[index + 1].current.focus();
        }
    };

    const handleKeyDown = (index, event) => {
        // Move to the previous input box on backspace if the current box is empty
        if (event.key === 'Backspace' && index > 0 && otp[index] === '') {
            inputRefs.current[index - 1].current.focus();
        }
    };

    const handleSubmit = () => {
        // Add logic to handle the submission of OTP
    };

    return (
        <div className='flex-1 bg-gray-200 p-11'>
            <div className='container mx-auto  bg-white p-6 rounded-md h-full'>
                <img src={verification} alt='Logo' className='mx-5 mb-5' />
                <h4 className='mb-2 font-semibold'>+91 99999 99999</h4>
                <p className='text-left mb-4 text-zinc-700'>
                    One Time Password (OTP) has been sent to this number.
                </p>
                <div className='flex mb-12'>
                    {/* Four small boxes for OTP verification */}
                    {otp.map((value, index) => (
                        <input
                            key={index}
                            type='text'
                            maxLength='1'
                            value={value}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className='w-1/4 p-2 border text-center border-gray-300 rounded-md mr-1 focus:outline-none focus:border-blue-500 focus:ring focus:border-blue-500'
                            ref={inputRefs.current[index]}
                        />
                    ))}
                </div>
                {/* Submit button at the bottom */}
                <button
                    onClick={handleSubmit}
                    className='w-full bg-blue-500 text-white p-2 mt-auto rounded-md hover:bg-blue-600 transition duration-300'
                >
                    Submit
                </button>

                
            </div>
        </div>
    );
};

export default VerificationSection2;
