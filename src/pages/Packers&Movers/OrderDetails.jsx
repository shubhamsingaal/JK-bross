import React from 'react';
import { Calendar, Footer, OrderRequest, PackersNav } from '../../components';
import logojkbros from '/assets/logojkbros.svg';

const OrderDetails = () => {
    return (
        <div className='flex flex-col'>
            <PackersNav />
            <Calendar />
            <p className='ml-4 text-sm text-gray-500'>Order Request</p>
            <div className='flex  justify-evenly flex-wrap  gap-1 md:flex-row flex-col'>
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
