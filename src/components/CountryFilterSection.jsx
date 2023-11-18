import React from 'react'
import SearchBar from './SearchBar'
import RegionFilter from './RegionFilter'

function CountryFilterSection ({ searchCountry, setSearchCountry }) {
  return (
    <section className='w-full sm:max-w-[574px] lg:max-w-[865px] xl:max-w-[1185px] h-40 sm:h-20 px-5 sm:px-0 flex flex-col sm:flex-row justify-between items-start sm:items-center'>
      <SearchBar searchCountry={searchCountry} setSearchCountry={setSearchCountry} />
      <RegionFilter />
    </section>
  )
}

export default CountryFilterSection
