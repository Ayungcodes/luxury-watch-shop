import React from 'react'
import logo from '../src/assets/logo.PNG'
import { useState } from 'react'
import facebookI from '../src/assets/ICONS/facebook.png'
import linkedInI from '../src/assets/ICONS/linkedin.png'
import xIcon from '../src/assets/ICONS/twitter.png'
import tiktokI from '../src/assets/ICONS/tik-tok.png'
import instagramI from '../src/assets/ICONS/instagram.png'
import whatsAppI from '../src/assets/ICONS/whatsapp.png'

const Navbar = ({ openCart, setCartOpen }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [logginState, setLogginState] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingCartLoggin, setLoadingCartLoggin] = useState(false)

  const openLoggin = () => {
    setLoadingCartLoggin(true) // show roller
    setTimeout(() => {
      setLoadingCartLoggin(false) 
      setLogginState(!logginState)
    }, 1000) // 1 second delay
  }

  const openLogginCart = () => {
    setLoadingCartLoggin(true) // show roller
    setTimeout(() => {
      setLoading(false)
      setLoadingCartLoggin(false) 
      setCartOpen(true)
    }, 1000) // 1 second delay
  }


  return (
    <>
      <nav className="border-b border-stone-600 text-gray-300">

    <div>
        <h1 className='text-center text-[11px] md:text-[15px] bg-yellow-900 py-1 border-b border-gray-700'>GET YOUR LUXURY WATCH TODAY STARTING FROM AS LOW AS ₦199,999</h1>
      </div>

    <div className="flex justify-between items-center px-2 md:px-4 py-1">


      <div className='flex gap-2'>
        <button 
      className='md:hidden text-gray-300 focus:outline-none'
      onClick={() => setIsOpen(!isOpen)}
      >
        <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        >
          <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d={
            isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
          }
          />
        </svg>
      </button>
        <a href="#">
          <img src={logo} alt="" className="h-10 md:h-12" />
        </a>
      </div>      

      <div className="hidden md:flex space-x-9 lg:space-x-15 font-bold text-[14px]">
        <a href="">
          <div className="relative group inline-block">
          <span className="">HOME</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        <a href="">
          <div className="relative group inline-block">
          <span className="">PRODUCTS</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        <a href="">
          <div className="relative group inline-block">
          <span className="">ABOUT</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        <a href="">
          <div className="relative group inline-block">
          <span className="">CONTACT US</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
      </div>
      
      <div class="flex space-x-2">
        <button
        onClick={openLoggin}
        ><i className="fa-regular fa-user text-xl md:text-2xl transition-all duration-200 hover:text-gray-500"></i></button>

        <button
        onClick={openCart}
        ><i className="fa-solid fa-basket-shopping text-xl md:text-2xl transition-all duration-200 hover:text-gray-500"></i></button>
      </div>

      </div>
  </nav>

  {isOpen && (
    <div className="fixed left-0 w-full h-screen bg-[#1e1e1e] text-gray-300 text-center space-y-5 border-t border-gray-600 px-6 py-8 z-40">

          <div className="w-[85vw] h-10 bg-gray-400 text-[#3f301d] rounded-xl flex justify-center items-center">
        <i className="fa-solid fa-magnifying-glass ml-2.5"></i>
        <input type="text" placeholder="What are you looking for?" name="" id="" className="bg-gray-400 placeholder-[#3f301d] rounded-xl flex-1 pl-2 focus:outline-0" />

      </div>

          <div className="flex justify-between mx-6 my-10 text-[15px]">
            <div className='flex flex-col space-y-7'>
              <a href="">
          <div className="relative group inline-block">
          <span className="">HOME</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        <a href="">
          <div className="relative group inline-block">
          <span className="">PRODUCTS</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        <a href="">
          <div className="relative group inline-block">
          <span className="">ABOUT</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        <a href="">
          <div className="relative group inline-block">
          <span className="">CONTACT US</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
            </div>


        <div className='flex flex-col space-y-7'>
          <a href="">
          <div className="relative group inline-block">
          <span className="">MEN</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        <a href="">
          <div className="relative group inline-block">
          <span className="">WOMEN</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        <a href="">
          <div className="relative group inline-block">
          <span className="">BRANDS</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        <a href="">
          <div className="relative group inline-block">
          <span className="">ACCESSORIES</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        </div>
          </div>
          
        </div>
  )}

          {logginState && (
        <div className="flex flex-col overflow-y-auto lg:overflow-y- fixed inset-0 z-60 mx-auto my-auto h-screen min-h-screen w-screen bg-gray-100 transition-transform ease-linear duration-300">

          {/* navigation for loggin page */}

          <nav className="bg-[#1e1e1e] border-b border-stone-600 text-gray-300">

    <div className="flex justify-between items-center px-2 md:px-4 py-1">


      <div className='flex gap-2'>
        <button 
      className='md:hidden text-gray-300 focus:outline-none'
      onClick={() => setIsOpen(!isOpen)}
      >
        <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        >
          <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d={
            isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
          }
          />
        </svg>
      </button>
        <a href="#">
          <img src={logo} alt="" className="h-10 md:h-12" />
        </a>
      </div>      

      <div className="hidden md:flex space-x-9 lg:space-x-15 font-bold text-[14px]">
        <a href="">
          <div className="relative group inline-block">
          <span className="">HOME</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        <a href="">
          <div className="relative group inline-block">
          <span className="">PRODUCTS</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        <a href="">
          <div className="relative group inline-block">
          <span className="">ABOUT</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        <a href="">
          <div className="relative group inline-block">
          <span className="">CONTACT US</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
      </div>
      
      <div class="flex space-x-2">
        <button
        onClick={openLoggin}
        ><i className="fa-regular fa-user text-xl md:text-2xl transition-all duration-200 hover:text-gray-500"></i></button>

        <button
        onClick={openLogginCart}
        ><i className="fa-solid fa-basket-shopping text-xl md:text-2xl transition-transform duration-500 hover:text-gray-500"></i></button>
      </div>

      </div>
  </nav>

        {/* nav open (toggle for loggin) */}

  {isOpen && (
    <div className="fixed left-0 w-full h-screen bg-[#1e1e1e] text-gray-300 text-center space-y-5 border-t border-gray-600 px-6 py-8 z-40">

          <div className="w-[85vw] h-10 bg-gray-400 text-[#3f301d] rounded-xl flex justify-center items-center">
        <i className="fa-solid fa-magnifying-glass ml-2.5"></i>
        <input type="text" placeholder="What are you looking for?" name="" id="" className="bg-gray-400 placeholder-[#3f301d] rounded-xl flex-1 pl-2 focus:outline-0" />

      </div>

          <div className="flex justify-between mx-6 my-10 text-[15px]">
            <div className='flex flex-col space-y-7'>
              <a href="">
          <div className="relative group inline-block">
          <span className="">HOME</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        <a href="">
          <div className="relative group inline-block">
          <span className="">PRODUCTS</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        <a href="">
          <div className="relative group inline-block">
          <span className="">ABOUT</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        <a href="">
          <div className="relative group inline-block">
          <span className="">CONTACT US</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
            </div>


        <div className='flex flex-col space-y-7'>
          <a href="">
          <div className="relative group inline-block">
          <span className="">MEN</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        <a href="">
          <div className="relative group inline-block">
          <span className="">WOMEN</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        <a href="">
          <div className="relative group inline-block">
          <span className="">BRANDS</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        <a href="">
          <div className="relative group inline-block">
          <span className="">ACCESSORIES</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-400 ease-in-out group-hover:w-full"></span>
        </div>
        </a>
        </div>
          </div>
          
        </div>
  )}

        {/* hero for loggin */}

        <div className='bg-gray-300 h-[20vh] py-7 w-screen mx-auto flex flex-col items-center justify-center space-y-2 md:space-y-6'>
          <h1 className='text-[22px] md:text-4xl font-semibold'>My Account</h1>
          <div className='flex w-[50vw] justify-between md:justify-evenly md:-space-x-3 md:text-xl'>
            <button
            onClick={() => {
              setLogginState(!logginState)
            }}
            >Home</button>
            <button>Shop</button>
            <button className='text-gray-600'>My Account</button>
          </div>
        </div>

        {/* loggin/register */}

        <div className='w-[95vw] flex flex-col md:flex-row flex-1 mx-auto justify-center items-center space-y-3 mt-11 md:mt-0 mb-15 md:mb-25'>
            <div className='mx-4 lg:mx-10'>
              <div className='space-y-4 md:space-y-6 flex flex-col'>
              <h1 className='text-xl md:text-3xl font-semibold'>Login</h1>
            <input type="text" placeholder='Username or email address *' className='py-2 px-3 w-76 md:w-87 lg:w-97 border border-gray-700 rounded-xl' name="" id="" />
            <input type="password" placeholder='Password *' className='py-2 px-3 w-76 md:w-87 lg:w-97 border border-gray-700 rounded-xl' name="" id="" />
            </div>
            <div className='flex mt-3 space-x-16 md:space-x-11 lg:space-x-17 text-[15px]'>
              <div className='flex items-center'>
                <button className='bg-gray-900 text-gray-200 py-1.5 px-5 md:px-7 lg:px-10 text-[14px] md:text-lg rounded-xl'>LOGIN</button>
              </div>
              
              <div className='space-y-1'>
                <div className='space-x-1'>
                <input type="checkbox" name="" id="" />
              <label htmlFor="" className='md:text-lg'>Remember me</label>
              </div>
              <a href="" className='underline underline-offset-2 font-semibold md:text-lg'>Forgot Your Password?</a>
              </div>
            </div>
            </div>
            
            <div className='flex flex-col space-y-0.5 md:space-y-1 mx-7 md:mx-5 lg:mx-10 mt-5'>
              <h1 className='text-lg md:text-xl font-semibold'>Don't Have An Account?</h1>
              <p className='md:text-lg'>
                Create an account to enjoy faster checkout, track your orders easily, save your favorite watches, and get early access to exclusive deals.
              </p>
              <div className='mt-2'>
                <button className='bg-gray-900 text-gray-200 py-1.5 px-5 md:px-7 lg:px-10 text-[14px] md:text-lg rounded-xl'>REGISTER</button>
              </div>
            </div>
        </div>

        {/* footer */}

          <div className=' bg-gray-300 w-screen h-[15vh] lg:h-[18vh] lg:py-7 flex justify-center items-center'>
          <div className='space-y-2 mx-4 md:mx-28 lg:mx-60 md:space-y-6 lg:space-y-3'>
              <h1 className='pt-6 text-center text-[15px] md:text-[18px] lg:text-[22px] font-semibold'>CONNECT WITH US</h1>
              <div className="flex items-center space-x-5 md:space-x-8 mb-4">
              <div className='w-8 md:w-11'>
                  <img src={facebookI} alt="" className='w-full object-contain'/>
              </div>
              <div className='w-7 md:w-10'>
                  <img src={linkedInI} alt="" className='w-full object-contain'/>
              </div>
              <div className='w-7 md:w-10'>
                  <img src={xIcon} alt="" className='w-full object-contain'/>
              </div>
              <div className='w-7 md:w-10'>
                  <img src={tiktokI} alt="" className='w-full object-contain'/>
              </div>
              <div className='w-7 md:w-10'>
                  <img src={whatsAppI} alt="" className='w-full object-contain'/>
              </div>
              <div className='w-7 md:w-10'>
                  <img src={instagramI} alt="" className='w-full object-contain'/>
              </div>
              </div>
        </div>
      </div>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500/40 backdrop-blur-sm z-50">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      )}
      {loadingCartLoggin && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500/40 backdrop-blur-sm z-50">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
    )}

    {loadingCartLoggin && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500/40 backdrop-blur-sm z-50">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      )}
    </>
  )
}

export default Navbar
