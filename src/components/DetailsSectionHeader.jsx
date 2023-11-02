import React from 'react'

function DetailsSectionHeader () {
  return (
    <div className='h-10 md:h-24 flex justify-start items-center'>
      <button className='flex items-center gap-2 px-10 h-10 rounded-sm text-xs drop-shadow-lg bg-white dark:bg-darkBlue'>
        <svg className='fill-darkBlue dark:fill-white' xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M372.308-267.692 160-480l212.308-212.308L400.615-664 236.616-500H800v40H236.616l163.999 164-28.307 28.308Z' /></svg>
        Back
      </button>
    </div>
  )
}

export default DetailsSectionHeader
