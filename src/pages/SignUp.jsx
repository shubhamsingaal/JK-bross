import React from 'react';
import SignupOne from '../components/SignupOne';
import SignupTwo from '../components/SignupTwo';
import logojk from '/assets/layer-12@2x.png'

const SignUp = () => {
  return (
    <div className='flex md:flex-row flex-col'>
      <SignupOne logoSrc={logojk} />
      <SignupTwo/>
   </div>

  );
}

export default SignUp;
