import React from 'react';
import { SignupOne, SignupTwo } from '../../components';
import logojkbros from '/assets/logojkbros.svg'
const PSignUp = () => {
    return (

        <div className='flex md:flex-row flex-col'>
            <SignupOne logoSrc={logojkbros}/>
            <SignupTwo />
        </div>

    );
}

export default PSignUp;
