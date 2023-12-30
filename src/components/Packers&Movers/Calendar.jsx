import React, { useState } from 'react';
import classNames from 'classnames';
import OrderRequest from './OrderRequest';

const Calendar = () => {
    // Sample data for the calendar
    const calendarData = [
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },

    
        // Add more data as needed
    ];

    const [selectedDay, setSelectedDay] = useState(null);

    const handleBoxClick = (day) => {
        // Handle box click, show details for the selected day
        setSelectedDay(day);
        // Add logic to display details based on the selected day
    };

    return (
        
        <div className="overflow-x-auto scrollbar-style">
            <div className="flex mx-auto mt-4   border-gray-300 container sm:p-10  md:mb-2 md:mt-2 xl:mx-14 bg-white p-7  rounded-lg md:p-10 h-full w-auto">
                {calendarData.map((item) => (
                    <div
                        key={item.day}
                        className={classNames(
                            'flex-shrink-0 p-2 h-13 w-13 rounded-xl m-2 cursor-pointer border border-gray-400 bg-white',
                            { 'bg-blue-500 text-white border-blue-500': selectedDay === item.day }
                        )}
                        onClick={() => handleBoxClick(item.day)}
                    >
                        <div className="text-sm">{item.text}</div>
                        <div className="text-sm text-center text-blue-500">{item.day}</div>
                    </div>
                ))}
            </div>

            
        </div>
     
    );
};

export default Calendar;
