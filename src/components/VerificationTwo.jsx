import React, { useState, useRef } from 'react';
// import verification from '/assets/Verification.png';

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
        <div className='flex-1 md:bg-gray-200 bg-white md:p-11 pt-1'>
            <div className='container sm:p-10 mx-auto md:mb-2 md:mt-2 xl:mx-14 bg-white p-7  rounded-lg md:p-10 h-full w-auto'>
                <h1 className='text-3xl font-extrabold text-textPrimary font-serif  mb-8'>Verification</h1>
                <div className='flex justify-between '>
                    <h4 className='mb-1 font-semibold'>+91 99999 99999</h4>
                    <button
                        onClick={handleChangeClick}
                        className='text-sm no-underline text-blue-500 hover:text-blue-700 focus:outline-none '
                    >
                        Change
                    </button>
                </div>
                <p className='text-left text-sm mb-12 lg:mb-1 text-zinc-400'>
                    One Time Password (OTP) has been sent to this number.
                </p>
                <div className='flex mb-1 lg:p-5 xl:p-10 gap-1 sm:gap-3 justify-center'>
                    {/* Four small boxes for OTP verification */}
                    {otp.map((value, index) => (
                        <input
                            key={index}
                            type='text'
                            placeholder='_'
                            maxLength='1'
                            value={value}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className='flex-1 text-center bg-gray-4  ml-1 w-1  h-auto p-2 border-2 border-[#D8E3FF] rounded-xl text-lg mb-6'
                            ref={inputRefs.current[index]}
                        />
                    ))}
                </div>

                {/* "Change" and "Resend OTP" buttons */}
                <div className='flex justify-between  '>
                    <button
                        onClick={handleResendClick}
                        className='text-sm -mt-5 md:mb-9 text-blue-500 hover:text-blue-700 focus:outline-none '
                    >
                        Resend OTP
                    </button>
                </div>
                <div>
                    {/* Submit button at the bottom */}
                    <button
                        onClick={handleSubmit}
                        className={`w-full p-2 mt-2 md:mt-8 lg:mt-1 xl:mb-12 relative  -bottom-20 rounded-xl transition duration-300 ${isAllFieldsFilled ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-100 text-gray-600 cursor-not-allowed '}`}
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
