import React from 'react';
import AccountOne from '../components/AccountOne';
import AccountTwo from '../components/AccountTwo';
import logojk from '/assets/layer-12@2x.png';
import SignupOne from '../components/SignupOne';
// import '../css/AccountScreen.css'; // Import the external CSS file

const AccountScreen = () => {
    return (
        <div className='flex md:flex-row flex-col'> 
            <SignupOne logoSrc={logojk}/>
            <AccountTwo />
        </div>
    );
};

export default AccountScreen;
