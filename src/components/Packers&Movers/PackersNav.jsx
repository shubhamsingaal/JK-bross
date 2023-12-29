import React from 'react';
import { NavLink } from 'react-router-dom';
import jkbLogo from '/assets/logojkbros.svg';


const PackersNav = () => {
    return (
        <div className='w-[100svw] h-[10svh] flex bg-[#F5F7FE] border-b-2 border-outline'>
            <div className='w-[50svw] flex items-center justify-start md:ml-16'>
                <NavLink to="/">
                    <img src={jkbLogo} className='md:w-[5rem] w-[4rem] ml-[1rem] md:ml-[10rem]' alt='Logo' />
                </NavLink>
            </div>

            <div className='w-[50svw] flex items-center justify-center'>
                <div className='flex gap-x-4 items-center text-textPrimary font-semibold'>
                    <NavLink to="/tracking" className='text-sm'>
                        Home
                    </NavLink>
                    <NavLink to="/earnings" className='text-sm'>
                        Earnings
                    </NavLink>
                    <NavLink to="/profile" className='text-sm'>
                        Profile
                    </NavLink>
                    <NavLink to="/orders" className='text-sm'>
                        Orders
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default PackersNav;
