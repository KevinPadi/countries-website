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
  }

  return (
    <header className='bg-white dark:bg-darkBlue w-full flex justify-center h-20 drop-shadow-md fixed z-50'>
      <div className='w-full sm:max-w-[574px] lg:max-w-[1080px] xl:max-w-[1185px] h-full flex justify-between items-center px-5'>
        <h1 className='text-veryDarkBlue dark:text-white font-bold text-sm sm:text-xl'>Where in the world?</h1>
        <button onClick={changeTheme} className='text-veryDarkBlue dark:text-white font-semibold flex justify-center items-center gap-2 text-sm sm:text-lg'>
          <svg className='fill-veryDarkBlue dark:hidden' xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M481.154-140.001q-141.666 0-240.832-99.167Q141.155-338.334 141.155-480q0-135.768 92.115-232.883 92.114-97.115 225.575-105.192 8.615 0 16.922.615t16.307 1.846q-30.615 28.615-48.768 69.153-18.154 40.539-18.154 86.461 0 98.334 68.834 167.168 68.834 68.833 167.168 68.833 46.538 0 86.768-18.153 40.23-18.153 68.461-48.768 1.231 8 1.846 16.307.616 8.307.616 16.922-7.693 133.461-104.808 225.575-97.115 92.115-232.883 92.115Zm0-59.999q88 0 158-48.5t102-126.5q-20 5-40 8t-40 3q-123 0-209.5-86.5t-86.5-209.5q0-20 3-40t8-40q-78 32-126.5 102t-48.5 158q0 116 82 198t198 82Zm-10-270Z' />
          </svg>
          <svg className='fill-white hidden dark:block' xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z' />
          </svg>
          {toggleTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </header>
  )
}

export default Header
