import React from 'react'
import { NavLink } from 'react-router-dom'
import jkbLogo from '../assets/jk-bro-logo.png'
import navBg from "../assets/navBg.png"

const LandingPageNav = () => {
  return (
    <div className="relative flex items-center">
        {/* Image is for test, need to remove once that curve on nav is implemented */}
        <NavLink to="/">
          <img src={navBg} className='bg-transparent'/>  
        </NavLink>
        
        <div className="absolute w-[50svw] flex items-center justify-between">
          <img src={jkbLogo} className='w-[5rem] ml-[10rem]'/>

          <NavLink to="/enterprise" className="mr-[1rem] hover:font-semibold transition">  
            For Enterprise
          </NavLink>

        </div>

        <div className="absolute w-[50svw] left-[50svw] flex justify-between">

          <NavLink to="/delivery" className=" hover:font-semibold transition">
            Delivery Partner
          </NavLink>

          <NavLink to="/support" className="mr-[10rem] hover:font-semibold transition">
            Support
          </NavLink>
          
        </div>
    </div>
  )
}

export default LandingPageNav