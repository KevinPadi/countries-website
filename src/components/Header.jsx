import { React, useState } from 'react'

function Header () {
  const [toggleTheme, setToggleTheme] = useState('dark')

  const changeTheme = (e) => {
    e.preventDefault()

    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      setToggleTheme('')
    } else {
      document.documentElement.classList.add('dark')
      setToggleTheme('dark')
    }
    console.log(document.documentElement.classList)
  }

  return (
    <header className='bg-white dark:bg-darkBlue w-full h-20 drop-shadow-md'>
      <div className='w-full h-full flex justify-between items-center px-20'>
        <h1 className='text-veryDarkBlue dark:text-white font-bold text-xl'>Where in the world?</h1>
        {/* <h1 className='text-white font-semibold text-xl'>Where in the world?</h1> */}
        {/* <h1 className='text-white font-thin text-xl'>Where in the world?</h1> */}
        <button onClick={changeTheme} className='text-veryDarkBlue dark:text-white font-semibold'>
          {toggleTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </header>
  )
}

export default Header
