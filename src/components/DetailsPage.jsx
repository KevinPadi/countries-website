import React from 'react'
import DetailsSectionHeader from './DetailsSectionHeader'
import CountryDetails from './CountryDetails'

function DetailsPage () {
  return (
    <section className='w-full max-w-[400px] sm:max-w-[574px] lg:max-w-[865px] xl:max-w-[1185px] mt-28 md:mt-28 pb-10 md:pb-20'>
      <div className='space-y-10 px-5'>
        <DetailsSectionHeader />
        <div className='flex flex-col items-center lg:flex-row gap-10 lg:gap-20 '>
          <div className='w-[300px] lg:w-[850px]'>
            <img className='w-full h-auto' src='https://flagcdn.com/w320/br.png' alt='flag' />
          </div>
          <CountryDetails />
        </div>
      </div>
    </section>
  )
}

export default DetailsPage
