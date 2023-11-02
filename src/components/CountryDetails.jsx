import React from 'react'
import Button from './Button'

function CountryDetails () {
  return (
    <div className='w-full'>
      <h2 className='text-3xl font-extrabold mb-6'>Brasil</h2>
      <div className='flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between w-full mb-10 '>
        <div>
          <div className='flex flex-col gap-1 text-start'>
            <div className='flex gap-1'>
              <p className='font-semibold text-darkBlue dark:text-white'>Native Name:</p><p className='text-darkBlue dark:text-white'>Brazil</p>
            </div>
            <div className='flex gap-1'>
              <p className='font-semibold text-darkBlue dark:text-white'>Population:</p><p className='text-darkBlue dark:text-white'>200,212,301</p>
            </div>
            <div className='flex gap-1'>
              <p className='font-semibold text-darkBlue dark:text-white'>Region:</p><p className='text-darkBlue dark:text-white'>America</p>
            </div>
            <div className='flex gap-1'>
              <p className='font-semibold text-darkBlue dark:text-white'>Sub Region:</p><p className='text-darkBlue dark:text-white'>South America</p>
            </div>
            <div className='flex gap-1'>
              <p className='font-semibold text-darkBlue dark:text-white'>Capital:</p><p className='text-darkBlue dark:text-white'>Brasilia</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-1 text-start'>
          <div className='flex gap-1'>
            <p className='font-semibold text-darkBlue dark:text-white'>Top Level Domain:</p><p className='text-darkBlue dark:text-white'>.br</p>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold text-darkBlue dark:text-white'>Currencies:</p><p className='text-darkBlue dark:text-white'>Real</p>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold text-darkBlue dark:text-white'>Languages:</p><p className='text-darkBlue dark:text-white'>Portugues</p>
          </div>
        </div>
      </div>
      <div>
        <div className='flex items-center flex-col sm:flex-row gap-5 lg:gap-2'>
          <p className='font-semibold text-darkBlue dark:text-white'>
            Border Countries:
          </p>
          <div className='flex items-center justify-between gap-2'>
            <Button label='Uruguay' />
            <Button label='Argentina' />
            <Button label='Bolivia' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetails
