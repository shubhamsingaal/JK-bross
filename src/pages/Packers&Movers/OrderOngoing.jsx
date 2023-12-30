import React from 'react'
import { Footer, PackersNav, SignupOne } from '../../components';
import OrderOngoingTwo from '../../components/Packers&Movers/OrderOngoingTwo';


const Ongoing = () => {
    return (
        <div className='flex flex-col'>
            <PackersNav/>
            
            <div className='flex md:flex-row flex-col'>
                
                <OrderOngoingTwo/>
            </div>

            <Footer />
        </div>
    )
}

export default Ongoing;