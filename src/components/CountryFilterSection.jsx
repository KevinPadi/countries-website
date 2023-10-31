import React from 'react'
import SearchBar from './SearchBar'
import RegionFilter from './RegionFilter'

function CountryFilterSection () {
  return (
    <section className='w-full h-40 md:h-20 px-5 sm:px-10 md:px-20 flex flex-col sm:flex-row justify-between items-start sm:items-center'>
      <SearchBar />
      <RegionFilter />
    </section>
  )
}

export default CountryFilterSection
