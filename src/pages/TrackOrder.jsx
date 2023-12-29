import React from 'react'
import { HomeNav } from '../components'
import ordersNotFound from '/assets/ordersNotFound.svg'

const TrackOrder = () => {
  return (
    <>
        <HomeNav />
        <div className='w-[100svw] h-[90svh] flex justify-center items-center flex-col'>
          <div className='w-[30%] flex justify-center flex-col items-center gap-y-6'>
          <img src={ordersNotFound}/>
          <p className='text-gray-400'>Sorry, you have no Order to track.</p>
          <button className='bg-primary rounded-3xl px-1 md:px-2 text-white w-full p-2 hover:bg-blue-500'>
                  Proceed
          </button>
          </div>
        </div>
    </>
  )
}

export default TrackOrder