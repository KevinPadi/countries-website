import React from 'react'

function CountryCard () {
  return (
    <article className='w-[235px] h-[350px] bg-white dark:bg-darkBlue rounded-md overflow-hidden drop-shadow-lg'>
      <img className='w-full h-40' src='https://flagcdn.com/w320/br.png' alt='uruguay flag' />
      <section className='flex flex-col gap-5 p-7'>
        <h2 className='font-extrabold text-lg text-veryDarkBlue dark:text-white'>Brazil</h2>
        <section className='flex flex-col gap-1'>
          <div className='flex gap-1'>
            <p className='font-semibold text-sm text-veryDarkBlue dark:text-white'>Population:</p><p className='font-thin text-sm text-veryDarkBlue dark:text-white'>113.373.455</p>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold text-sm text-veryDarkBlue dark:text-white'>Region:</p><p className='font-thin text-sm text-veryDarkBlue dark:text-white'>America</p>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold text-sm text-veryDarkBlue dark:text-white'>Capital</p><p className='font-thin text-sm text-veryDarkBlue dark:text-white'>Brasilia</p>
          </div>
        </section>
      </section>
    </article>
  )
}

export default CountryCard
