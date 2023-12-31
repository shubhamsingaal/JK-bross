import React from 'react';
import { Footer, PackersNav} from '../../components';
import PProfileInfo from './PProfileInfo';

const AccountProfile = () => {
    return (
        <div className='overflow-x-hidden'>
            <PackersNav/>
            <PProfileInfo/>
            <Footer />
        </div>

    );
}

export default AccountProfile;
