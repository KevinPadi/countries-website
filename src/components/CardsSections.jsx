import React from 'react'
import CountryCard from './CountryCard'
import CountryFilterSection from './CountryFilterSection'

function CardsSections () {
  return (
    <section className='w-full flex flex-col items-center gap-10 mt-28 md:mt-28 bg-lightGray dark:bg-[#202c37]'>
      <CountryFilterSection />
      <section className='w-full sm:max-w-[574px] lg:max-w-[865px] xl:max-w-[1185px] flex sm:flex-col justify-center sm:justify-between px-5 sm:px-0'>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(235px,1fr))] gap-x-20 gap-y-10'>
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
        </div>
      </section>
    </section>
  )
}

export default CardsSections
