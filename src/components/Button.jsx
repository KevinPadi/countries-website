import React from 'react'

function Button ({ label }) {
  return (
    <button className='text-xs font-semibold px-5 h-8 bg-white dark:bg-darkBlue text-darkBlue dark:text-white drop-shadow-md rounded-sm'>
      {label}
    </button>
  )
}

export default Button
