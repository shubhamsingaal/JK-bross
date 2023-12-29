import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const EditProfileComponent = ({
  onChange,
  value,
  config
}) => {

  const [ profileOption, setProfileOptiion ] = useState(value)

  const handleOptionClick = (value) => {
    setProfileOptiion(value)
    onChange(value) 
  }

  useEffect(() => {
    setProfileOptiion(config[0])
    onChange && onChange(config[0])
  }, [])


  return (
    <div className='w-[100%] bg-[#F5F7FE] border-2 rounded-3xl border-[#DBE3FF] pb-[8rem] '>

        <div>
          {config.map(( option ) => (
              <>
              {
              option?.value === "editProfile" 
              ? (
                <div key={option.value} 
                    onClick={() => handleOptionClick(option)}
                    className={`
                        ${profileOption?.value === option.value && option.value !== "contactUs" 
                        ? "bg-primary text-white hover:bg-primary!" 
                        : "hover:bg-[#C8D4FF] hover:bg-opacity-30 hover:text-black"} 
                        cursor-pointer rounded-t-3xl w-full flex justify-center flex-col px-[2rem] pb-[1rem] py-[2rem]
                        border-b border-dotted border-[#C8D4FF]
                        `}
                >
                  <div>
                    <h1 className='font-playfair md:text-2xl text-xl'>Dhruvil Jogiwala</h1>
                    <div className='flex items-center gap-2 w-max'>
                      <p className={`text-sm ${profileOption?.value === option.value  ? "text-gray-300": "text-gray-400"} `}> +91 99999 99999 </p>
                      <div className={`w-[.2rem] h-[.2rem] rounded-full
                          ${profileOption?.value === option.value  ? "bg-gray-300": "bg-gray-700"}
                        `}></div>
                      <p className={`text-sm ${profileOption?.value === option.value ? "text-gray-300": "text-gray-400"} `}> dhruviljogiwala786@gmail.com </p>
                    </div> 
                  </div>

                </div>
              )
              : 
              (
                <div 
                    className={`
                          ${profileOption?.value === option.value && option.value !== "contactUs" 
                            ? "bg-primary text-white hover:bg-primary!" 
                            : "hover:bg-[#C8D4FF] hover:bg-opacity-30 hover:text-black"} 
                          px-[2rem] py-[1.5rem] border-b border-dotted border-[#C8D4FF] cursor-pointer transition-all 
                          `} 
                    key={option.value} 
                    onClick={() => handleOptionClick(option)}
                >
                <h1>{option?.title}</h1>
                <p className={`text-sm ${profileOption?.value === option.value && option.value !== "contactUs" ? "text-gray-300": "text-gray-400"} `}>{option?.subtitle}</p>
                
                {
                    option.subSection?.title 
                    && 
                    <div className='flex py-[1rem] mt-4 border-t border-dotted border-[#C8D4FF]'>
                        {option.subSection.title} 
                        <Link className="px-2 text-primary">
                          {option.subSection.email}
                        </Link>
                    </div>
                }

              </div>  
              )}</>
          ))}

        </div>


    </div>
  )
}

export default EditProfileComponent