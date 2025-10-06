import React from 'react'
import img1 from '../src/assets/IMGS/shahrukh-rehman-05IxAEjVNl0-unsplash.jpg'
import img2 from '../src/assets/IMGS/jonas-b-AVSxYIcBxoM-unsplash.jpg'

const LastSec = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-around lg:-space-x-50 items-center mt-15 md:mt-13">
                  <div className='relative h-[50vh] w-[85vw] md:h-[40vh] md:w-[47vw] lg:h-[70vh] lg:w-[40vw]'>
                      <img src={img1} alt="" className='rounded-md w-full h-full object-cover'/>
                      <div className='absolute inset-0 flex justify-end mb-6 md:mb-10 mr-3 md:mr-5 items-end tracking-tight'>
              <button className='bg-gray-300 border px-2 md:px-4 md:py-1 rounded-md cursor-pointer'><a href="#products">SHOP NOW</a></button>
              </div>
                  </div>
                  <div className='relative h-[50vh] w-[85vw] md:h-[40vh] md:w-[47vw] lg:h-[70vh] lg:w-[40vw]'>
                      <img src={img2} alt="" className='rounded-md w-full h-full object-cover'/>
                      <div className='absolute inset-0 flex justify-end mb-6 md:mb-10 mr-3 md:mr-5 items-end tracking-tight'>
              <button className='bg-gray-300 border px-2 md:px-4 md:py-1 rounded-md cursor-pointer'><a href="#products">SHOP NOW</a></button>
              </div>
                  </div>
              </div>
    </div>
  )
}

export default LastSec
