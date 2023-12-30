import React, { useState } from 'react';
import { Calendar, Footer, OrderRequest, PackersNav } from '../../components';

const OrderDetails = () => {
    const [selectedTab, setSelectedTab] = useState('All');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        // Add logic to handle click, update data, etc.
    };

    return (
        <div className='flex flex-col overflow-hidden'>
            <PackersNav />

            <div className='flex mx-[60px] mb-2  mt-5 space-x-4'>
                <TabButton
                    tab="All"
                    count={0} // Replace with the actual count for "All"
                    selected={selectedTab === 'All'}
                    onClick={() => handleTabClick('All')}
                />
                <TabButton
                    tab="Accepted"
                    count={0} // Replace with the actual count for "Accepted"
                    selected={selectedTab === 'Accepted'}
                    onClick={() => handleTabClick('Accepted')}
                />
                <TabButton
                    tab="Assigned"
                    count={0} // Replace with the actual count for "Assigned"
                    selected={selectedTab === 'Assigned'}
                    onClick={() => handleTabClick('Assigned')}
                />
                <TabButton
                    tab="Completed"
                    count={0} // Replace with the actual count for "Completed"
                    selected={selectedTab === 'Completed'}
                    onClick={() => handleTabClick('Completed')}
                />
            </div>

            <p className='mx-[60px]  mb-2 text-sm text-left text-gray-500'>On going</p>

            <div className='flex justify-evenly flex-wrap gap-1 md:flex-row flex-col mb-5'>
                <OrderRequest />
                <OrderRequest />
                <OrderRequest />
                <OrderRequest />
                <OrderRequest />
                <OrderRequest />
            </div>
            <Footer />
        </div>
    );
};

const TabButton = ({ tab, count, selected, onClick }) => {
    return (
        <div
            className={`cursor-pointer text-${selected ? 'blue-500' : 'gray-500'} ${selected ? 'border-b-2 border-blue-500' : ''}`}
            onClick={onClick}
        >
            <span>{tab}</span>
            {count > 0 && (
                <span className="ml-1 text-xs bg-blue-500 text-white rounded-full px-2">
                    {count}
                </span>
            )}
        </div>
    );
};

export default OrderDetails;
