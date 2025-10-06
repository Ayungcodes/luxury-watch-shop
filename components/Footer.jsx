import React from 'react'
import facebookI from '../src/assets/ICONS/facebook.png'
import linkedInI from '../src/assets/ICONS/linkedin.png'
import xIcon from '../src/assets/ICONS/twitter.png'
import tiktokI from '../src/assets/ICONS/tik-tok.png'
import instagramI from '../src/assets/ICONS/instagram.png'
import whatsAppI from '../src/assets/ICONS/whatsapp.png'

const Footer = () => {
  return (
    <div className='bg-gray-600 px-5 py-5 mt-35 mx-auto'>
        <div className="flex flex-col space-y-7 md:space-y-12 justify-center items center my-5 text-gray-800">
            <div className="flex justify-between md:justify-evenly mx-6">
                
                <div className=''>
                    <h1 className='text-[17px] md:text-xl font-semibold underline text-center'>COMPANY</h1>
                    <div className='flex flex-col text-[13px] md:text-[17px] text-center'>
                        <a href="">ABOUT US</a>
                        <a href="">CONTACT US</a>
                        <a href="">LOCATIONS</a>
                        <a href="">CAREERS</a>
                        <a href="">FAQ</a>
                    </div>
                </div>

                <div className=''>
                    <h1 className='text-[17px] md:text-xl font-semibold underline text-center'>SERVICES</h1>
                        <div className='flex flex-col text-[13px] md:text-[17px] text-center'>
                            <a href="">BOOK APPOINTMENT</a>
                            <a href="">REFERRAL PROGRAM</a>
                            <a href="">WARRANTY</a>
                            <a href="">RETURNS & REFUNDS</a>
                            <a href="">AFFIRM</a>
                        </div>
                </div>
                
            </div>

            <div className='bg-gray-950 h-0.5 w-full'></div>

            <div className='space-y-3 mx-4 md:mx-28 lg:mx-60 md:space-y-6'>
                <h1 className='text-center md:text-[18px] font-semibold'>CONNECT WITH US</h1>
                <div className="flex justify-evenly items-center">
                <div className='w-9 md:w-12'>
                    <img src={facebookI} alt="" className='w-full object-contain'/>
                </div>
                <div className='w-8 md:w-10'>
                    <img src={linkedInI} alt="" className='w-full object-contain'/>
                </div>
                <div className='w-8 md:w-10'>
                    <img src={xIcon} alt="" className='w-full object-contain'/>
                </div>
                <div className='w-8 md:w-10'>
                    <img src={tiktokI} alt="" className='w-full object-contain'/>
                </div>
                <div className='w-8 md:w-10'>
                    <img src={whatsAppI} alt="" className='w-full object-contain'/>
                </div>
                <div className='w-8 md:w-10'>
                    <img src={instagramI} alt="" className='w-full object-contain'/>
                </div>
            </div>
            <p className='text-center text-[14px] md:text-[16px] mt-10 -mb-5 md:-mb-2'>@2025 All Rights Reserved</p>
            </div>

        </div>
    </div>
  )
}

export default Footer
