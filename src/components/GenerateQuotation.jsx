import React from 'react'
import rightArrow from "../assets/quotation-arrow.png"
import cityTempo from "../assets/city-tempo.png"
import vehicleShifting from "../assets/vehicle-shifting.png"
import withinCity from "../assets/within-city.png"
import betweenCities from "../assets/between-cities.png"
import { NavLink } from 'react-router-dom'
import SelectCityDropdown from './SelectCityDropdown'

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
    <div className='absolute h-full content-center md:h-[50svh] w-[70svw] top-[75%] left-[15svw] bg-[#DBE3FF]-[50%] rounded-3xl bg-white shadow-[0_0_100px_0_rgba(0,0,0,0.1)] shadow-[#4871FF] drop-shadow-4xl p-6 flex flex-col flex-wrap lg:flex-nowrap'>
        
        <SelectCityDropdown />

        <div className='flex gap-x-2 justify-normal md:justify-between relative'>

            <div className='flex gap-x-6 flex-wrap md:flex-nowrap w-[70%]'>
                {QuotationConfig.map((item, index) => {
                    return(
                        <div key={index} className='border-2 border-[#DBE3FF] w-[180px] h-[240px] p-2 rounded-3xl bg-[#F5F7FE] hover:bg-primary-50 transition cursor-pointer'>

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
}

export default GenerateQuotation