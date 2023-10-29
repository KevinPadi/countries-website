import React from 'react'

function Header () {
  return (
    <header className='bg-darkBlue w-full h-20'>
      <div className='w-full h-full flex justify-between items-center px-20'>
        <h1 className='text-white font-bold text-xl'>Where in the world?</h1>
        {/* <h1 className='text-white font-semibold text-xl'>Where in the world?</h1> */}
        {/* <h1 className='text-white font-thin text-xl'>Where in the world?</h1> */}
        <button className='text-white font-semibold'>Dark Mode</button>
      </div>
    </header>
  )
}

export default Header
