import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between bg-indigo-900 text-white py-[6px] px-[6px]'>
        <div className="logo">
            <span className='font-bold text-xl mx-10'>iTask</span>
        </div> 
        <ul className="flex gap-8 msm:gap-4 mx-10 msm:mx-1">
            <li className='cursor-pointer hover:font-bold transition-all '>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all w-[75px] duration-100'>Your Task</li>
        </ul>
    </nav>
  )
}

export default Navbar
