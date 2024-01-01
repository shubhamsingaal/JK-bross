import React, { useState } from 'react'
import EditProfileComponent from './EditProfileComponent'
import { CheckOutPreviewModal, Contact, EditProfile, Help, Legal, NotificationComp, PastOrders, Payment } from './comps'
import { Button, Modal } from '../../ui'

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

const sectionMap = {
  "editProfile": EditProfile,
  "payment": Payment,
  "notification": NotificationComp,
  "help": Help,
  "pastOrders": PastOrders,
  "legal": Legal,
  "contactUs": Contact,
  "logOut": ''
}


const ProfileInfo = () => {

  const [ section, setSection ] = useState()
  const handleClick = (value) => {
    setSection(value)
  }
  const selectedSection = section?.value
  const SelectedComp = selectedSection && sectionMap[selectedSection]

  const [ open, setOpen ] = useState(false)

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
                  <div className="inset-0 flex items-center justify-center">



                    {/* Not sure where this modal is supposed to be */}
                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="rounded-md bg-black/20 px-4 py-2 text-sm mt-4 font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                    >
                        Open Modal
                    </button>
                    <CheckOutPreviewModal open={open} setOpen={setOpen}/>
                  
                  </div>
            </div>
        
        </div>

    </div>
  )
}

export default ProfileInfo