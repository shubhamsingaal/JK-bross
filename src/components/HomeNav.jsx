import React from 'react'
import { NavLink } from 'react-router-dom'
import jkbLogo from '../assets/jk-bro-logo.png'
import { CaretRight } from '@phosphor-icons/react'

const HomeNav = () => {
  return (
    <div className='w-[100svw] h-[10svh] flex bg-[#F5F7FE] border-b-2 border-outline'>

        <div className='w-[50svw] flex items-center justify-start md:ml-16'>
          <NavLink to="/">
            <img src={jkbLogo} className='w-[5rem] md:ml-[10rem] ml-[2rem]'/>
          </NavLink>
        </div>
        
        <div className='w-[50svw] flex items-center justify-center'>
            <div className='flex gap-x-2 md:gap-x-4 items-center'>

            <div className=' w-max md:px-4 md:py-2 px-4 py-1 rounded-full flex md:gap-x-4 border-2 border-outline'>
                <div className='md:leading-3'>
                    <h1 className='text-[0.5rem] md:text-xs font-bold tracking-[0.1rem]'>
                    DRIVE WITH US
                    </h1>
                    <p className='text-xs'>
                    turn kms into money
                    </p>
                </div>
                <button className='bg-primary rounded-full px-1 md:px-2 text-white'>
                    <div className='flex md:gap-x-10 px-2 items-center'>
                        <p className='text-[0.5rem] md:text-xs font-semibold'>
                            JOIN US
                        </p>
                        <CaretRight size={16} weight="bold" />
                    </div>
                </button>
            </div>

            <NavLink to="/loginsignup" className="mr-0 md:mr-4">
                <h1 className='text-sm font-semibold text-textPrimary'>Log in / Sign Up</h1>
            </NavLink>
            </div>
        </div>
    </div>
  )
}

export default HomeNav