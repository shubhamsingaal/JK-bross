import React from 'react'
import VerificationOne from '../components/VerificationOne';
import VerificationTwo from '../components/VerificationTwo';
import logojk from '/assets/layer-12@2x.png'
import SignupOne from '../components/SignupOne';

const VerificationScreen = () => {
  return (

    <div className='flex md:flex-row flex-col'>

      <SignupOne logoSrc={logojk} />
      <VerificationTwo />


    </div>

  )
}

export default VerificationScreen