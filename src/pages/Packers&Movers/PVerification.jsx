import React from 'react'

import logojkbros from '/assets/logojkbros.svg'
import { VerificationTwo , VerificationOne, SignupOne} from '../../components'

const VerificationScreen = () => {
    return (

        <div className='flex md:flex-row flex-col'>

            <SignupOne logoSrc={logojkbros} />
            <VerificationTwo />


        </div>

    )
}

export default VerificationScreen