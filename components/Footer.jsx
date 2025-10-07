import React from 'react'
import facebookI from '../src/assets/ICONS/facebook.png'
import linkedInI from '../src/assets/ICONS/linkedin.png'
import xIcon from '../src/assets/ICONS/twitter.png'
import tiktokI from '../src/assets/ICONS/tik-tok.png'
import instagramI from '../src/assets/ICONS/instagram.png'
import whatsAppI from '../src/assets/ICONS/whatsapp.png'

const Footer = () => {
  return (
    <footer className="mt-50 bg-gradient-to-b from-stone-900 to-stone-700 text-gray-300 py-10 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
    {/* COMPANY */}
    <div className="flex-1 text-center">
      <h2 className="text-lg md:text-xl font-semibold text-white mb-4 relative inline-block after:content-[''] after:block after:w-10 after:h-[2px] after:bg-yellow-600 after:mx-auto md:after:mx-auto">
        COMPANY
      </h2>
      <ul className="space-y-2 text-sm md:text-[18px]">
        <li><a href="#" className="hover:text-yellow-600 transition-colors">About Us</a></li>
        <li><a href="#" className="hover:text-yellow-600 transition-colors">Contact Us</a></li>
        <li><a href="#" className="hover:text-yellow-600 transition-colors">Locations</a></li>
        <li><a href="#" className="hover:text-yellow-600 transition-colors">Careers</a></li>
        <li><a href="#" className="hover:text-yellow-600 transition-colors">FAQ</a></li>
      </ul>
    </div>

    {/* SERVICES */}
    <div className="flex-1 text-center">
      <h2 className="text-lg md:text-xl font-semibold text-white mb-4 relative inline-block after:content-[''] after:block after:w-10 after:h-[2px] after:bg-yellow-600 after:mx-auto md:after:mx-auto">
        SERVICES
      </h2>
      <ul className="space-y-2 text-sm md:text-[18px]">
        <li><a href="#" className="hover:text-yellow-600 transition-colors">Book Appointment</a></li>
        <li><a href="#" className="hover:text-yellow-600 transition-colors">Referral Program</a></li>
        <li><a href="#" className="hover:text-yellow-600 transition-colors">Warranty</a></li>
        <li><a href="#" className="hover:text-yellow-600 transition-colors">Returns & Refunds</a></li>
        <li><a href="#" className="hover:text-yellow-600 transition-colors">Affirm</a></li>
      </ul>
    </div>
  </div>

  {/* Divider */}
  <div className="border-t border-gray-700 my-10"></div>

  {/* Socials */}
  <div className="flex flex-col items-center space-y-6">
    <h2 className="text-lg font-semibold text-white">CONNECT WITH US</h2>
    <div className="flex justify-center items-center space-x-5 md:space-x-8">
      <img src={facebookI} alt="Facebook" className="w-7 md:w-9 hover:scale-110 transition-transform" />
      <img src={linkedInI} alt="LinkedIn" className="w-7 md:w-9 hover:scale-110 transition-transform" />
      <img src={xIcon} alt="X" className="w-7 md:w-9 hover:scale-110 transition-transform" />
      <img src={tiktokI} alt="TikTok" className="w-7 md:w-9 hover:scale-110 transition-transform" />
      <img src={whatsAppI} alt="WhatsApp" className="w-7 md:w-9 hover:scale-110 transition-transform" />
      <img src={instagramI} alt="Instagram" className="w-7 md:w-9 hover:scale-110 transition-transform" />
    </div>

    <p className="text-gray-500 text-sm md:text-base mt-6">
      © 2025 All Rights Reserved — <span className="text-yellow-600 font-medium">Orion Watches</span>
    </p>
  </div>
</footer>

  )
}

export default Footer
