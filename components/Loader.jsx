import React from 'react'

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0d1117] z-50">
      <div className="w-6 h-6 border-4 border-transparent border-t-gray-500 border-l-gray-500 rounded-full animate-ping"></div>

    </div>
  )
}

export default Loader
