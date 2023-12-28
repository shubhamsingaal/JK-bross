import React from 'react';
import AccountOne from '../components/AccountOne';
import AccountTwo from '../components/AccountTwo';
// import '../css/AccountScreen.css'; // Import the external CSS file

const AccountScreen = () => {
    return (
        <div className='flex md:flex-row flex-col'> 
            <AccountOne />
            <AccountTwo />
        </div>
    );
};

export default AccountScreen;
