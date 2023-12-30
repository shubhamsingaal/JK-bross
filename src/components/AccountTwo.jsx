import React, { useState } from 'react';
import account from '/assets/Account.png';
 // import '../css/AccountTwo.css';

const AccountTwo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState({
    day: '',
    month: '',
    year: '',
  });
  const [purpose, setPurpose] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBirthdateChange = (field, value) => {
    setBirthdate((prevBirthdate) => ({
      ...prevBirthdate,
      [field]: value,
    }));
  };

  const handlePurposeChange = (e) => {
    setPurpose(e.target.value);
  };

  const handleSubmit = () => {
    // Add logic to handle form submission
    // You can access the values of name, email, birthdate, and purpose here
  };

  const isAllFieldsFilled = name !== '' && email !== '' && birthdate.day !== '' && birthdate.month !== '' && birthdate.year !== '' && purpose !== '';

  return (
    <div className='flex-1 md:bg-gray-200 bg-white md:p-11 pt-1'>
      <div className='container sm:p-10 mx-auto md:mb-2 md:mt-2 xl:mx-14 bg-white p-7  rounded-lg md:p-10 h-full w-auto'>
        <h1 className=' text-textPrimary mb-10 font-playfair text-2xl'>Account Details</h1>
        <div className='mb-4'>
         
          <input
            type='text'
            id='name'
            placeholder='Enter your name'
            value={name}
            onChange={handleNameChange}
            className='flex-1  bg-gray-5  ml-1 w-full p-2 border-2 border-[#D8E3FF] rounded-xl text-md mb-4'
          />

          <input
            type='email'
            id='email'
            placeholder='Enter your email'
            value={email}
            onChange={handleEmailChange}
            className='flex-1  bg-gray-5  ml-1 w-full p-2 border-2 border-[#D8E3FF] rounded-xl text-md mb-4'
          />
          <div className='birthdate-label'>
            <label className='label-text text-sm text-gray-700'>Birthdate</label>
          </div>
          <div className='flex mb-2'>
            
            <div className='flex  gap-3 small-input-container'>
              <input
                type='text'
                placeholder='DD'
                value={birthdate.day}
                onChange={(e) => handleBirthdateChange('day', e.target.value)}
                className='flex-1  bg-gray-5  ml-1 w-full h-12 p-2 border-2 border-[#D8E3FF] rounded-xl text-md mb-4'
              />
              <input
                type='text'
                placeholder='MM'
                value={birthdate.month}
                onChange={(e) => handleBirthdateChange('month', e.target.value)}
                className='flex-1  bg-gray-5  ml-1 w-full h-12 p-2 border-2 border-[#D8E3FF] rounded-xl text-md mb-4'
              />
              <input
                type='text'
                placeholder='YYYY'
                value={birthdate.year}
                onChange={(e) => handleBirthdateChange('year', e.target.value)}
                className='flex-1  bg-gray-5 ml-1 w-full p-2 h-12 border-2 border-[#D8E3FF] rounded-xl text-lg mb-6'
              />
            </div>
          </div>

          <label htmlFor='purpose' className='label-text text-sm text-gray-700'>
            I'm here for...
          </label>
          <select
            id='purpose'
            value={purpose}
            onChange={handlePurposeChange}
            className='flex-1  bg-gray-5  ml-1 w-full p-2 border-2 border-[#D8E3FF] rounded-xl text-sm mb-4'
          >
            <option value=''>Select</option>
            <option value='delivery'>Delivery</option>
            <option value='other'>Other services</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button
          onClick={handleSubmit}
          className={`bg-${isAllFieldsFilled ? 'primary' : 'blue-100'} rounded-xl px-1 md:px-2 text-white w-full p-2 hover:bg-${isAllFieldsFilled ? 'blue-500' : 'blue-100'} ${isAllFieldsFilled ? '' : 'cursor-not-allowed'}`}
          disabled={!isAllFieldsFilled}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AccountTwo;
