import { React, useState } from 'react'
import CountryCard from './CountryCard'
import CountryFilterSection from './CountryFilterSection'
import { Link } from 'wouter'

function CardsSections ({ countriesData }) {
  // TODO: metele scrollbar gutter al section para que no salte la ui
  const [searchCountry, setSearchCountry] = useState('')
  return (
    <section className='w-full flex flex-col items-center gap-10 mt-28 md:mt-28 bg-lightGray dark:bg-[#202c37] pb-10 lg:pb-20 overflow-hidden' style={{ scrollbarGutter: 'stable' }}>
      <CountryFilterSection searchCountry={searchCountry} setSearchCountry={setSearchCountry} />
      <section className='w-full sm:max-w-[574px] lg:max-w-[865px] xl:max-w-[1185px] flex sm:flex-col justify-center sm:justify-between px-5 sm:px-0' style={{ scrollbarGutter: 'stable' }}>
        <ul className='grid grid-cols-[repeat(auto-fit,minmax(235px,1fr))] gap-x-20 gap-y-10'>
          {countriesData === null
            ? <p>no cargó</p>
            : countriesData.filter(country =>
              country.name.common
                .toLowerCase()
                .trim()
                .includes(searchCountry.toLowerCase().trim())
            ).map((country, index) => (
              <li key={index}>
                <Link href={`/country/${country.name.common}`}>
                  <a>
                    <CountryCard name={country.name.common} population={country.population} region={country.region} capital={country.capital} flag={country.flags.png} />
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </section>
  )
}

export default CardsSections

// .map((country, index) => (
//   <li key={index}>
//     <Link href={`/country/${country.name.common}`}>
//       <a>
//         <CountryCard name={country.name.common} population={country.population} region={country.region} capital={country.capital} flag={country.flags.png} />
//       </a>
//     </Link>
//   </li>
// )
