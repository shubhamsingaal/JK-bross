import React from 'react'
import rightArrow from "/assets/quotation-arrow.png"
import cityTempo from "/assets/city-tempo.png"
import vehicleShifting from "/assets/vehicle-shifting.png"
import withinCity from "/assets/within-city.png"
import betweenCities from "/assets/between-cities.png"
import { NavLink } from 'react-router-dom'
import SelectCityDropdown from './SelectCityDropdown'
import HeroLandingPage from "/assets/heroLandingPage.png"

const QuotationConfig = [
    {
        id: 1,
        title: "City Tempo",
        imgUrl: cityTempo
    },
    {
        id: 2,
        title: "Vehicle Shifting",
        imgUrl: vehicleShifting
    },
    {
        id: 3,
        title: "Within City",
        imgUrl: withinCity
    },
    {
        id: 4,
        title: "Between City",
        imgUrl: betweenCities
    },
]

const GenerateQuotation = () => {
  return (
        <section className='hero bg-white 
            xxxs:h-[280svh] 
            xxs:h-[230svh]
            xs:h-[210svh] 
            sm:h-[200svh] 
            md:h-[240svh] 
            lg:h-[240svh] 
            laptop:h-[180svh] 
            xl:h-[120svh] 
            w-[100svw]'>
                {/* ugly way to add height to element, added cause absolute section below is overflowing above content */}
            <div className='relative'>
                <img src={HeroLandingPage} 
                    className='h-[90svh] w-[100%] object-cover object-center inset-0'
                    alt="Hero JK Bros"
                    />

                <div className='
                        bg-white md:min-w-[70%] md:max-w-[70%] w-[90%] z-10 absolute top-[70%] left-1/2 transform -translate-x-1/2
                        rounded-3xl 
                        shadow-[0_0_100px_0_rgba(0,0,0,0.1)] shadow-[#4871FF] 
                        drop-shadow-4xl p-6
                    '>
 
                    <div className='flex md:flex-row flex-col gap-4'>

                        <div className='flex flex-col gap-4 items-center md:items-start gap-y-4'>
                            <SelectCityDropdown />
                            <div className='flex xl:flex-nowrap flex-wrap justify-evenly gap- md:gap-x-5'>
                                {QuotationConfig.map((item, index) => {
                                    return(
                                        <div key={index} className='border-2 border-[#DBE3FF] min-w-[10.5rem] h-[240px] p-2 rounded-3xl bg-[#F5F7FE] hover:bg-primary-50 transition cursor-pointer'>

                                            <div className='card-image border-2 border-[#DBE3FF] h-[80%] rounded-3xl'>
                                                    <img src={item.imgUrl} className='w-full h-full object-cover rounded-3xl'/> 
                                            </div>
                                            <div className='h-[20%] m-auto w-max items-center flex '>
                                                <p className="text-primary font-semibold">
                                                    {item.title}
                                                </p>
                                            </div>            
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='flex w-full justify-center'>
                        <NavLink
                            to="/home" 
                            className='group bg-primary rounded-3xl md:p-6 hover:bg-primary-200 tranition w-full md:mx-[1rem]'>
                            <div className='min-w-[10rem] max-h-max relative p-6'>
                                <h1 className='w-[7rem] text-3xl font-semibold text-white tracking-wide'>
                                    Get Quotation
                                </h1>
                                    <br/>
                                <h1 className='w-[7rem] text-4xl font-thin text-[#48aeff] tracking-wide group-hover:text-primary-400 transition'>
                                    <span className='text--500'>
                                        In just 2 mins
                                    </span>
                                </h1>
                                <img src={rightArrow} className='mt-[1rem]'/>
                            </div>
                        </NavLink>
                        </div>
                    </div>


                </div>
            </div>
        </section>
  )
}

export default GenerateQuotation





export const Old = () => (
<div className='
        absolute h-full 
        content-center 
        md:h-[50svh] w-[70svw] 
        top-[75%] left-[15svw] 
        bg-[#DBE3FF]-[50%] rounded-3xl bg-white 
        shadow-[0_0_100px_0_rgba(0,0,0,0.1)] shadow-[#4871FF] 
        drop-shadow-4xl p-6 flex flex-col flex-wrap md:flex-nowrap'>
        
        <SelectCityDropdown />

        <div className='flex gap-x-2 justify-normal md:justify-between relative'>

            <div className='flex gap-x-6 flex-wrap md:flex-nowrap w-[70%]'>
                {QuotationConfig.map((item, index) => {
                    return(
                        <div key={index} className='border-2 border-[#DBE3FF] min-w-[10.5rem] h-[240px] p-2 rounded-3xl bg-[#F5F7FE] hover:bg-primary-50 transition cursor-pointer'>

                            <div className='card-image border-2 border-[#DBE3FF] h-[80%] rounded-3xl'>
                                    <img src={item.imgUrl} className='w-full h-full object-cover rounded-3xl'/> 
                            </div>
                            <div className='h-[20%] m-auto w-max items-center flex '>
                                <p className="text-primary font-semibold">
                                    {item.title}
                                </p>
                            </div>            
                        </div>
                    )
                })}
            </div>

            <NavLink
                to="/home" 
                className='group w-[25%] h-[135%] bg-primary -mt-[6%] rounded-3xl p-10 hover:bg-primary-200 tranition'>
                <h1 className='text-3xl font-semibold text-white tracking-wide '>
                    Get Quotation
                </h1>
                    <br/>
                <h1 className='text-4xl font-thin text-[#48aeff] tracking-wide group-hover:text-primary-400 transition'>
                    <span className=' text--500'>
                        In just 2 mins
                    </span>
                </h1>
                <img src={rightArrow} className='bottom-0 absolute'/>
            </NavLink>

        </div>

    </div>
)