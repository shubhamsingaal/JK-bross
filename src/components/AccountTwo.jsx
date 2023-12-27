import React, { useState } from 'react';
import account from '../assets/Account.png';
 import '../css/AccountTwo.css'; // Import your CSS file

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

  return (
    <div className='flex-1 bg-gray-200 p-11 '>
      <div className='container bg-white p-10   mb-12 rounded-lg h-full'>
        <img src={account} alt='Logo' className='mx-5 mb-10' />
        <div className='mb-4'>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={handleNameChange}
            className='input-field'
          />
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
            className='input-field'
          />
          <div className='flex mb-2'>
            <input
              type='text'
              placeholder='DD'
              value={birthdate.day}
              onChange={(e) => handleBirthdateChange('day', e.target.value)}
              className='small-input-field'
            />
            <input
              type='text'
              placeholder='MM'
              value={birthdate.month}
              onChange={(e) => handleBirthdateChange('month', e.target.value)}
              className='small-input-field'
            />
            <input
              type='text'
              placeholder='YY'
              value={birthdate.year}
              onChange={(e) => handleBirthdateChange('year', e.target.value)}
              className='small-input-field'
            />
          </div>
          <select
            value={purpose}
            onChange={handlePurposeChange}
            className='input-field'
          >
            <option value=''>I'm here for...</option>
            <option value='delivery'>Delivery</option>
            <option value='other'>Other services</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button
          onClick={handleSubmit}
          className='submit-button'
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AccountTwo;
