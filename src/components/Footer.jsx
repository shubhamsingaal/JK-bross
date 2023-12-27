import React from 'react'
import footerLogo from "/assets/footerJK-bro.png"
import googlePlay from "/assets/googleplay.png"
import appStore from "/assets/appstore.png"
import { Link } from 'react-router-dom'

const footerLinksTop = [
    {
        title: "Company",
        links: [
            "About",
            "offers",
            "Careers",
            "Blog"
        ]
    },
    {
        title: "Services",
        links: [
            "City Tempo",
            "For Enterprise",
            "Packers & Movers",
        ]
    },
    {
        title: "Support",
        links: [
            "Contact Us",
            "Privacy Policy",
            "Terms of service",
            "Driver Partner Terms & conditions"
        ]
    }

]

const footerLinkBottom = [
    [
        "Bangalore",
        "Pune"
    ],
    [
        "Hyderabad",
        "Chennai"
    ],
    [
        "Ahmedabad",
        "Noida",
    ],
    [
        "Mumbai",
        "Chandigarh"
    ],
    [
        "Kolkata",
        "Bhuwaneshwar"
    ]
]

const Footer = () => {
  return (
    <div className='footer bg-black py-[3rem] flex justify-center'>
        <div className='footer-content w-[70svw] flex flex-col gap-y-20'>
            {/* footer top */}
            <div className='flex justify-center items-center md:items-start md:justify-evenly flex-wrap gap-y-20 flex-col md:flex-row '>

                <div className='min-w-[10rem] max-w-[10rem] flex flex-col gap-y-2'>
                    <img src={footerLogo} alt="JK Bros Logo" className='w-[8rem]'/>
                    <img src={googlePlay} alt="google Play" className='w-[8rem]'/>
                    <img src={appStore} alt="app store" className='w-[8rem]'/>
                </div>

                <div className='mt-4 min-w-[10rem] max-w-[10rem] leading-7 text-gray-400'>
                    <p>Send Anything,</p>
                    <p>anywhere,</p>
                    <p>anytime.</p>
                </div>
                
                {footerLinksTop.map((group, index) => (
                    <div className='min-w-[10rem] max-w-[10rem]' key={index}>
                    <h1 className='text-white'>{group.title}</h1>
                    <ul>
                        {group.links.map((link, index) => (
                            <li key={index} className='list-none text-gray-400'>
                                <Link>{link}</Link>    
                            </li>
                        ))}
                    </ul>
                    </div>
                ))}

            </div>

            {/* footer bottom  */}
            <div className='flex justify-center items-center md:justify-evenly flex-wrap gap-y-20 flex-col md:flex-row relative'>
                <h1 className='text-white absolute top-[-2rem] md:left-[3rem] left-[11rem]'>Company</h1>
                    {footerLinkBottom.map((group, index) => (
                        <div key={index}>
                            {group.map((link, index) => (
                                <ul key={index} className='min-w-[10rem] max-w-[10rem]'>
                                    <li className='list-none text-gray-400'>
                                        <Link>{link}</Link>    
                                    </li>
                                </ul>
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default Footer