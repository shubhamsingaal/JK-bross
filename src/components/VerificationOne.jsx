import React from 'react';
import truck from '/assets/truck.png';
import logo from '/assets/layer-12@2x.png';
import dots from '/assets/group-55@2x.png';

const VerificationOne = () => {
    return (
        <div className='flex-1 bg-white p-8 h-screen flex flex-col justify-center items-center'>
            {/* Logo Image */}
            <img
                src={logo}
                alt="Logo"
                className="w-36 h-auto mb-8"
            />

            {/* Cycle Image */}
            <img
                src={truck}
                alt="Cycle Image"
                className="w-64 h-auto mb-8"
            />

            <img
                src={dots}
                alt="Cycle Image"
                className="w-20 h-auto mb-8"
            />

            {/* Text Content */}
            <p className="mb-4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* Add additional text content as needed */}
        </div>
    );
};

export default VerificationOne;
