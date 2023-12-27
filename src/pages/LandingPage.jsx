import React from 'react'
import { GenerateQuotation, LandingPageNav, MapView, ServicesCards, Reviews, Questions, Footer } from '../components'
import HeroLandingPage from "../assets/heroLandingPage.png"

const LandingPage = () => {
  return (
    <div className='overflow-x-hidden '>
        <LandingPageNav />
        
        <section className='hero bg-gray-600 h-[90svh] w-[100svw] relative'>
            <img src={HeroLandingPage} 
              className='h-[90svh] w-[100%] object-cover object-center absolute inset-0'
              alt="Hero JK Bros"
              />
            <GenerateQuotation /> 
        </section>

        <ServicesCards />

        {/* <div className=''>
            <div className='bubble'/>
            <div className='h-[30rem] w-[30rem] bg-red-400'></div>
        </div> */}
        <MapView />
        <Reviews />
        <Questions />
        <Footer />
    </div>
  )
}

export default LandingPage