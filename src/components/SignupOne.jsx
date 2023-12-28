import React from 'react';
import cycle from '/assets/group@2x.png';
import dots from '/assets/group-55@2x.png';

const SignupOne = ({ logoSrc }) => {
    return (
        <div className='flex-1 bg-white md:p-8 pt-4 pb-1 h-screen flex flex-col justify-center items-center'>
            {/* Logo Image */}
            <img
                src={logoSrc}
                alt="Logo"
                className="w-36 h-auto mb-8 md:mb-8 mt-16"
            />

            {/* Cycle Image */}
            <img
                src={cycle}
                alt="Cycle Image"
                className="w-64 h-auto mb-8 md:block hidden"
            />

            <img
                src={dots}
                alt="Cycle Image"
                className="w-20 h-auto mb-8 md:block hidden"
            />

            {/* Text Content */}
            <p className="mb-4 text-center md:block hidden">
                This is the first section of the page. You can add your content here.
            </p>
            {/* Add additional text content as needed */}
        </div>
    );
};

export default SignupOne;
