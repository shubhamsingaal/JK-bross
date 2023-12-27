import React from 'react'
import worker from '../assets/worker.png';
import logo from '../assets/layer-12@2x.png';
import dots from '../assets/group-55@2x.png';

const AccountOne = () => {
  return (
    <div>
          <div className='flex-1 bg-white p-8 h-screen flex flex-col justify-center items-center'>
              {/* Logo Image */}
              <img
                  src={logo}
                  alt="Logo"
                  className="w-36 h-auto mb-8"
              />

              {/* Cycle Image */}
              <img
                  src={worker}
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
                  This is the first section of the page. You can add your content here.
              </p>
              {/* Add additional text content as needed */}
          </div>
    </div>
  )
}

export default AccountOne