import React from 'react'
// import bg1 from '../src/assets/ern-gan-3vSGyBo8_pU-unsplash.jpg'
// import bg2 from '../src/assets/jonas-b-AVSxYIcBxoM-unsplash.jpg'
import bg3 from '../src/assets/paul-cuoco-CO2vOhPqlrM-unsplash.jpg'
// import bg4 from '../src/assets/shahrukh-rehman-05IxAEjVNl0-unsplash.jpg'
// import { useState } from 'react'

// const BG_URL = [
//     bg1, bg2, bg3, bg4
// ]

const Hero = () => {
    // const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <>
      <div className='relative w-screen h-full flex justify-between'>
        <div>
            <img src={bg3} alt="" className='backdrop-blur-2xl'/>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#4e342e]/80 via-[#6d4c41]/60 to-transparent"></div>

        <div className='absolute inset-0 flex justify-between items-start mt-2 md:-mt-4 lg:mt-8 tracking-tight mx-3 md:mx-10'>
            <div className='space-y-1 md:space-y-4 flex flex-col md:tracking-tight mt-3 md:mt-15'>
            <h1 className='text-3xl md:text-5xl w-[90vw] md:w-[55vw] font-bold text-gray-300'>Elegant Time for Elegant People</h1>
        <p className='text-gray-400 text-sm md:text-xl'>Discover A World Full Of Elegant Watches</p>
        <a href="#products" className='bg-yellow-500 py-1 w-20 mt-5 md:mt-1 md:w-27 text-[12px] text-center md:text-[16px] rounded-md hover:bg-yellow-600'>SHOP NOW</a>

        <p className='leading-[0.3] hidden md:flex flex-col mt-3 md:text-lg w-68 tracking-tighter text-gray-300'><span className='text-4xl font-serif'>"</span><span className='text-lg md:text-xl'>A wristwatch isn’t just about telling time — it’s about telling the world you value it.</span><span className='text-4xl font-serif'>"</span> <span className="text-[16px] block opacity-80">— Timeless Wisdom</span></p>
        </div>

        {/* <p className='md:hidden mt-10 text-sm w-[40vw] tracking-tighter text-gray-300'><span className='text-xl font-serif'>"</span>A wristwatch isn’t just about telling time — it’s about telling the world you value it.<span className='text-xl font-serif'>"</span> <span className="text-sm block opacity-80">— Timeless Wisdom</span></p> */}

        <p className='hidden tracking-wide md:flex flex-col text-xl w-70 text-gray-300 mt-40'><span className='text-3xl font-serif'>"</span><i>A gentleman's choice of timepiece says as much about him as does his tailor.</i><span className='text-3xl font-serif'>"</span> <span className="text-[16px] block opacity-80">— Unknown Watchmaker's Proverb</span></p>

        </div>

        <div className='absolute inset-0 flex flex-col items-end justify-center mt-17 tracking-tight mx-11 space-y-6 w-[45vw]'>
            <h1 className='text-gray-300'></h1>
        </div>
      </div>
    </>
  )
}

export default Hero
