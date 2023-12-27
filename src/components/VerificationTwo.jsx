import React, { useState, useRef } from 'react';
import verification from '/assets/Verification.png';

const VerificationTwo = () => {
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

    const handleChangeClick = () => {
        // Add logic for handling "Change" button click
    };

    const handleResendClick = () => {
        // Add logic for handling "Resend OTP" button click
    };

    const isAllFieldsFilled = otp.every(value => value !== '');

    return (
        <div className='flex-1 bg-gray-200 p-11'>
            <div className='container mx-auto bg-white p-6 rounded-md h-full'>
                <img src={verification} alt='Logo' className='mx-4 mb-7 mt-7' />
                <div className='flex justify-between '>
                    <h4 className='mb-1 font-semibold'>+91 99999 99999</h4>
                    <button
                        onClick={handleChangeClick}
                        className='text-sm no-underline text-blue-500 hover:text-blue-700 focus:outline-none focus:underline'
                    >
                        Change
                    </button>
                </div>
                <p className='text-left mb-12 text-zinc-700 text-sm'>
                    One Time Password (OTP) has been sent to this number.
                </p>
                <div className='flex mb-2'>
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

                {/* "Change" and "Resend OTP" buttons */}
                <div className='flex justify-between mt-2 mb-15'>
                    <button
                        onClick={handleResendClick}
                        className='text-sm text-blue-500 hover:text-blue-700 focus:outline-none focus:underline'
                    >
                        Resend OTP
                    </button>
                </div>
                <div>
                    {/* Submit button at the bottom */}
                    <button
                        onClick={handleSubmit}
                        className={`w-full p-2 mt-12 relative  -bottom-20 rounded-md transition duration-300 ${isAllFieldsFilled ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-100 text-gray-600 cursor-not-allowed'}`}
                        disabled={!isAllFieldsFilled}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VerificationTwo;
