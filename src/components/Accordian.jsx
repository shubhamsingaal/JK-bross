import { useState } from "react";

const Accordion = ({ data, invert }) => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (  
      <div className="w-[100%] mx-auto mt-4">
      {data.map((item, index) => (
        <div key={index} className="mb-4 rounded">
          <div
            className="flex gap-x-8 items-center py-4 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          > 
            <svg
              className={`w-6 h-6 transition-transform transform ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke={invert ? '#262262' : "white"}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
            <h2 className={`text-lg font-semibold ${invert ? 'text-textPrimary' : 'text-white' }`}>{item.question}</h2>
          </div>
          <div
            className={`px-14 mb-4 transition-all overflow-hidden ${
              activeIndex === index ? 'max-h-[500px]' : 'max-h-0'
            }`}
          >
            <p className={`${invert ? "text-[#262262]" : "text-gray-300"}`}>{item.answer}</p>
          </div>
          
          {index < data.length - 1  &&  <div className={`w-[100%] border-b-2 border-dotted h-[0.01rem] ${invert ? 'bg-[#D8E3FF]' : '' }`}/> }

        </div>
      ))}
      </div>
    );
  };

  export default Accordion;