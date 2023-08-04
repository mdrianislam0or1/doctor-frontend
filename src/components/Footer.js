import React from 'react'
import { FaLocationDot,FaPhoneFlip,FaVoicemail } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='bg-black text-white sm:py-0 md:py-8 lg:py-8 sm:mt-0 md:mt-4 lg:mt-4'>
        <div className='px-10 mx-auto container'>
            <div className='grid grid-cols-4 gap-4'>
                    <div className='p-6'>
                        <h1 className='font-bold sm:text-xl md:text-4xl lg:text-4xl'>Doctor Management System</h1>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>

                    </div>
                    <div className='p-6'>
                        <h1 className='font-bold sm:text-sm md:text-xl lg:text-xl'>For Patients</h1>
                        <p className='text-sm pt-1'>Search for Doctors</p>
                        <p className='text-sm pt-1'>Login</p>
                        <p className='text-sm pt-1'>Register</p>
                    </div>
                    <div className='p-6'>
                        <h1 className='font-bold sm:text-sm md:text-xl lg:text-xl'>For Doctors</h1>
                        <p className='text-sm pt-1'>Appointments</p>
                        <p className='text-sm pt-1'>Chat</p>
                        <p className='text-sm pt-1'>Login</p>
                    </div>
                    <div className='p-6'>
                        <h1 className='font-bold sm:text-sm md:text-xl lg:text-xl'>Contact Us</h1>
                        <p className='text-sm pt-1'><FaLocationDot className='text-xl text-white'/> 3556 Beech Street, USA </p>
                        <p className='text-sm pt-1'><FaPhoneFlip className='text-xl text-white'/> +1 315 369 5943 </p>
                        <p className='text-sm pt-1'><FaVoicemail className='text-xl text-white'/> doctor@example.com </p>
                    </div>
                    
            </div>
        </div>
    </div>
  )
}

export default Footer