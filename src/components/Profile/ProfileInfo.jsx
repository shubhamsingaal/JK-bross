import React, { useState } from 'react'
import EditProfileComponent from './EditProfileComponent'
import { Contact, EditProfile, Help, Legal, NotificationComp, PastOrders, Payment } from './comps'

const profileOptions = [
  {
    value: "editProfile",
  },
  {
    value: "payment",
    title: "Payment",
    subtitle: "Payment modes and details"
  },
  {
    value: "notification",
    title: "Notification",
    subtitle: "",
  },
  {
    value: "help",
    title: "Help",
    subtitle: "FAQs & Links",
  },
  {
    value: "pastOrders",
    title: "Past orders",
    subtitle: ""
  },
  {
    value: "legal",
    title: "Legal",
    subtitle: ""
  },
  {
    value: "contactUs",
    title: "Contact Us",
    subtitle: "For ay queries or help",
    subSection:{
      title: `Mail us at`,
      email:  `yourcompany@gmail.com`
    }
  },
  {
    value: "logOut",
    title: "Log out",
    subtitle: ""
  }
]

const Logout = () => {
  return(
    <div className='md:w-[100%]'>
      <h1 className='font-playfair text-2xl text-textPrimary'>Log out</h1>

    </div>
  )
}

const sectionMap = {
  "editProfile": EditProfile,
  "payment": Payment,
  "notification": NotificationComp,
  "help": Help,
  "pastOrders": PastOrders,
  "legal": Legal,
  "contactUs": Contact,
  "logOut": Logout
}

const ProfileInfo = () => {

  const [ section, setSection ] = useState()
  const handleClick = (value) => {
    setSection(value)
  }
  const selectedSection = section?.value
  const SelectedComp = selectedSection && sectionMap[selectedSection]

  return (
    <div className='w-[100svw] flex justify-center'>

        <div className='md:w-[70%] w-[90%] py-14 flex md:flex-row flex-col md:justify-between flex-wrap gap-y-10'>
            
            <div className='md:w-[40%] flex-1'>
                <EditProfileComponent 
                    onChange={(value) => handleClick(value)}
                    value={section}
                    config={profileOptions}
                />
            </div>

            <div className='flex-1 md:w-[60%]'>
                  { SelectedComp && <SelectedComp />}
            </div>
        
        </div>

    </div>
  )
}

export default ProfileInfo