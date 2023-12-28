import React from 'react'
import { GenerateQuotation, LandingPageNav, MapView, ServicesCards, Reviews, Questions, Footer } from '../components'

const LandingPage = () => {
  return (
    <div className='overflow-x-hidden '>
        <LandingPageNav />
        <GenerateQuotation /> 
        <ServicesCards />
        <MapView />
        <Reviews />
        <Questions />
        <Footer />
    </div>
  )
}

export default LandingPage

{/* <div className=''>
            <div className='bubble'/>
            <div className='h-[30rem] w-[30rem] bg-red-400'></div>
        </div> */}