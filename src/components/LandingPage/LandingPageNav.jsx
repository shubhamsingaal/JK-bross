import React from 'react'
import { NavLink } from 'react-router-dom'
import jkbLogo from '/assets/jk-bro-logo.png'

const LandingPageNav = () => {
  return (
    <div className="relative flex items-center h-[10svh] w-[100svw]">
        {/* Image is for test, need to remove once that curve on nav is implemented */}
        
        <div className="absolute w-[50svw] flex items-center justify-between">
          <NavLink to="/">
            <img src={jkbLogo} className='md:w-[5rem] w-[4rem] ml-[1rem] md:ml-[10rem]'/>
          </NavLink>

          <NavLink to="/enterprise" className="mr-[1rem] hover:font-semibold transition text-sm md:text-md">  
            For Enterprise
          </NavLink>

        </div>

        <div className="absolute w-[50svw] left-[50svw] flex justify-between">

          <NavLink to="/delivery" className=" hover:font-semibold transition text-sm md:text-md">
            Delivery Partner
          </NavLink>

          <NavLink to="/support" className="md:mr-[10rem] mr-[1rem] hover:font-semibold transition text-sm md:text-md">
            Support
          </NavLink>
          
        </div>
    </div>
  )
}

export default LandingPageNav