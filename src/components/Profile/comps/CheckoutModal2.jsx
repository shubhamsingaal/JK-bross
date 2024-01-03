import React from 'react'
import { Modal } from '../../../ui'
import { MapPin, PencilSimple } from 'phosphor-react'
import visaLogo from '/assets/visa-logo.png';
import mastercardLogo from '/assets/visa-logo.png';
import applepayLogo from '/assets/visa-logo.png';
import googlepayLogo from '/assets/visa-logo.png';

const CheckoutModal2 = ({ open, setOpen }) => {


    return (
        <Modal
            open={open}
            setOpen={setOpen}
            submitText={"Pay Now"}
            closeText={"Back"}
            size="lg"
            title="Checkout Preview"
            onSubmitClick={() => console.log("Hello")}
        >
            <div className='flex border-y-2 border-outline md:flex-row flex-col'>

                <div className='bg-[#F5F7FE] p-4 '>

                    {/* Disclaimer */}
                    <div className='md:w-[25rem] w-max ml-1'>
                        <p className='text-sm font-semibold'>Select a Payment Method</p>
                        <p className='text-xs text-gray-400'>Please Select a payment method most convenient to you.</p>
                    </div>

                    {/* Payment details */}
                    <div className='rounded-2xl p-4 my-1 '>
                        <div className="flex gap-4 ">
                            <img src={visaLogo} alt="Visa" className="w-auto h-auto border-2 border-grey p-4 rounded-xl" />
                            <img src={mastercardLogo} alt="Mastercard" className="w-auto h-auto border-2 border-grey p-4 rounded-xl" />
                            <img src={applepayLogo} alt="Apple Pay" className="w-auto h-auto border-2 border-grey p-4 rounded-xl" />
                            <img src={googlepayLogo} alt="Google Pay" className="w-auto h-auto border-2 border-grey p-4 rounded-xl" />
                        </div>


                    </div>

                    {/* Card Details */}
                   
                    <div className=' border-outline rounded-2xl p-4 my-4 flex flex-col gap-y-4'>
                        <label htmlFor="cardNumber" className="text-xs -m-3 mx-1">Card Number</label>
                        <input type="text" id="cardNumber" placeholder="•••• •••• •••• 6522" className="border text-xs p-2 rounded-xl" />

                        <label htmlFor="cardName" className="text-xs mt-2 -m-3 mx-1">Name</label>
                        <input type="text" id="cardName" placeholder="Dhruvil Jogiwala" className="border text-xs p-2 rounded-xl" />

                        <div className="flex gap-2 mt-2">
                            <div className="flex flex-col">
                                <label htmlFor="expirationDate" className="text-xs mb-1 mx-1">Expiration date</label>
                                <input type="text" id="expirationDate" placeholder="05/24" className="border text-xs p-2 rounded-xl" />
                            </div>
                            
                            <div className="flex flex-col">
                                <label htmlFor="cvv" className="text-xs mb-1 mx-1">CVV</label>
                                <input type="text" id="cvv" placeholder="•••" className="border text-xs p-2 rounded-xl" />
                            </div>
                            
                        </div>
                    </div>
                        {/* Checkboxes */}
                        <div className="flex items-center space-x-2 mt-2">
                        <input type="checkbox" id="saveCard" />
                        <label htmlFor="saveCard" className='text-xs'>My billing address is same to my <b>Moving to</b> address</label>
                        </div>

                        {/* Additional Checkbox */}
                        <div className="flex items-center space-x-2 mt-4">
                            <input type="checkbox" id="agreeTerms" />
                        <label htmlFor="agreeTerms" className='text-xs'>
                            My billing address is same to my <b>Moving from</b> address
                            </label>
                        </div>
                    </div>
                    


                <div className='bg-primary p-[1rem] md:p-[1.5rem] md:max-w-[25rem] text-white '>
                    <p className='text-sm mb-[1rem] border-b-2 border-opacity-50 border-outline border-dashed pb-[1rem]'>Order Summary</p>

                    <div className='border-b-2 border-opacity-50 border-outline border-dashed pb-[1rem] flex justify-between'>
                        <div className=''>
                            <p className='text-xs pb-[0.5rem]'>Amount Quoted</p>
                            <p className='text-xs pb-[0.5rem]'>Shifting Date</p>
                            <p className='text-xs'>No. of items added</p>
                        </div>
                        <div className='text-right'>
                            <p className='text-xs font-bold pb-[0.5rem]'>₹ 2,698</p>
                            <p className='text-xs pb-[0.5rem]'>23/08/2023</p>
                            <p className='text-xs'>5</p>
                        </div>
                    </div>

                    <div className='border-b-2 border-opacity-50 border-outline md:min-w-[24rem] border-dashed py-[0.5rem] flex justify-between'>
                        <div className=''>
                            <p className='text-xs pb-[0.5rem] font-bold'>Vehicle</p>
                            <p className='text-xs pb-[0.5rem]'>Small truck</p>
                        </div>
                        <div className='text-right'>
                            <p className='text-xs font-bold pb-[0.5rem] text-primary'>-</p>
                            <p className='text-xs pb-[0.5rem]'>2</p>
                        </div>
                    </div>

                    <div className=' border-dashed py-[0.5rem] flex justify-between'>
                        <div className=''>
                            <p className='text-xs pb-[0.5rem] font-bold'>Vehicle</p>
                            <p className='text-xs pb-[0.5rem]'>Booking amount of ₹500/- needed to be paid for order confirmation</p>
                        </div>
                        <div className='text-right'>
                            <p className='text-xs font-bold pb-[0.5rem]'>₹ 500</p>
                            <p className='text-xs pb-[0.5rem]'>-</p>
                        </div>
                    </div>

                </div>

            </div>
        </Modal>
    )
}

export default CheckoutModal2