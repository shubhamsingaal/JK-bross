import React from 'react';
import SignupOne from '../components/SignupOne';
import SignupTwo from '../components/SignupTwo';
import SignupThree from '../components/SignupThree';

const SignUp = () => {
  return (

    <div className='flex md:flex-row flex-col'>
      <SignupOne />
      <SignupTwo/>
   </div>

  );
}

export default SignUp;
