import React from 'react';
import { Calendar, Footer, OrderRequest, PackersNav } from '../../components';
import logojkbros from '/assets/logojkbros.svg';

const OrderDetails = () => {
    return (
        <div className='flex flex-col overflow-hidden'>
            <PackersNav />
            <Calendar />
            <p className='mx-[60px] mt-4 mb-2 text-sm text-left text-gray-500'>Order Request</p>
            <div className='flex justify-evenly flex-wrap gap-4 md:flex-row flex-col mb-5'>
                
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
}

export default OrderDetails;
