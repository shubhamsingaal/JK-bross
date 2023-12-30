import React from 'react';
import line from "/assets/Frame.png";

const OrderOngoingTwo = () => {
    return (
        <div className='w-[100svw] mb-7 flex justify-center'>
            <div className='lg:w-[70%] w-[90%] mt-[7rem]'>
            

                <div className='w-[100%] flex gap-x-4 md:flex-row flex-col md:items-start items-center'>

                    <div className='flex flex-wrap gap-4 md:gap-4 w-[65%] md:items-center items-center justify-center md:justify-start md:mt-6'>

                    </div>
                    <div className='w-[40%] min-w-[20rem] mt-[2rem] md:mt-[-4rem]'>
                        <div className='bg-[#F5F7FE] w-[100%] flex justify-between min-h-[35rem] border-2  p-8'>
                            
                            <h1 className='text-md font-semibold'>Order Tracking</h1>
                            <p className='text-xs'>Status <br /> On going</p>
                        </div>
                        <form className='md:pt-6 pt-4' onSubmit={(e) => { e.preventDefault() }}>
                            <button className='bg-primary rounded-xl px-1 md:px-2 text-white w-full p-2 hover:bg-blue-500'>
                                Confex& Update
                            </button>
                        </form>
                    </div>
                  
                </div>
            </div>
        </div>
    );
}

export default OrderOngoingTwo;
