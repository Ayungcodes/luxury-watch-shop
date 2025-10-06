import React from 'react'
import rolex from '../src/assets/Rolex.jpg'
import cartier from '../src/assets/Cartier.jpg'


const Textimonials = () => {
  return (
    <>
      <div id='wrapper' className='mt-10'>
        <h1 className='mx-11 text-gray-200 text-2xl font-semibold text-center mb-6'>Shop By Brands</h1>
        <div className='flex flex-wrap justify-center items-center gap-4 md:gap-6 mx-1 md:mx-5 lg:mx-20 md:-space-y-2'>
            <button className='bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200'>Richard Mille</button>
            <button className='bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200'>Rolex</button>
            <button className='bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200'>OMEGA</button>
            <button className='bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200'>Franck Muller</button>
            <button className='bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200'>BAUME & MERCIER</button>
            <button className='bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200'>Jaeger-LeCoultre</button>
            <button className='bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200'>Cartier</button>
            <button className='bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200'>Vacheron Constantin</button>
            <button className='bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200'>Panerai</button>
            <button className='bg-gray-400 px-4 py-1 md:px-7 md:py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-200'>Audemars Piguet</button>
        </div>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-around lg:-space-x-50 items-center mt-15 md:mt-13">
            <div className='relative h-[50vh] w-[85vw] md:h-[40vh] md:w-[47vw] lg:h-[70vh] lg:w-[40vw]'>
                <img src={rolex} alt="" className='rounded-md w-full h-full object-cover'/>
                <div className='absolute inset-0 flex justify-end mb-6 md:mb-10 mr-3 md:mr-5 items-end tracking-tight'>
        <button className='bg-gray-300 border px-2 md:px-4 md:py-1 rounded-md cursor-pointer'><a href="#products">SHOP NOW</a></button>
        </div>
            </div>
            <div className='relative h-[50vh] w-[85vw] md:h-[40vh] md:w-[47vw] lg:h-[70vh] lg:w-[40vw]'>
                <img src={cartier} alt="" className='rounded-md w-full h-full object-cover'/>
                <div className='absolute inset-0 flex justify-end mb-6 md:mb-10 mr-3 md:mr-5 items-end tracking-tight'>
        <button className='bg-gray-300 border px-2 md:px-4 md:py-1 rounded-md cursor-pointer'><a href="#products">SHOP NOW</a></button>
        </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Textimonials
