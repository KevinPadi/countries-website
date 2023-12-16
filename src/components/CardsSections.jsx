import { React, useState, useEffect } from 'react'
import CountryCard from './CountryCard'
import CountryFilterSection from './CountryFilterSection'
import { Link } from 'wouter'
import CardSkeleton from './CardSkeleton'

function CardsSections () {
  const [searchCountry, setSearchCountry] = useState('')
  const [data, setData] = useState([])

  const getCountries = () => {
    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all?fields=name,flags,tld,currencies,capital,region,subregion,languages,borders,population')
        .then(response => response.json())
        .then(data => {
          setData(data)
        })
        .catch(error => {
          console.error('Hubo un error al obtener los datos:', error)
        })
    }, [])
  }

  const getCountryByRegion = async (regionName) => {
    if (regionName) {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/region/${regionName}?fields=name,flags,tld,currencies,capital,region,subregion,languages,borders,population`)
        if (!res.ok) throw new Error('Failed..........')
        const data = await res.json()
        setData(data)
      } catch (error) {
        console.log(error)
      }
    } else {
      fetch('https://restcountries.com/v3.1/all?fields=name,flags,tld,currencies,capital,region,subregion,languages,borders,population')
        .then(response => response.json())
        .then(data => {
          setData(data)
        })
        .catch(error => {
          console.error('Hubo un error al obtener los datos:', error)
        })
    }
  }

  getCountries()

  return (
    <section className='w-full flex flex-col items-center gap-10 mt-28 md:mt-28 bg-lightGray dark:bg-[#202c37] pb-10 lg:pb-20 overflow-hidden' style={{ scrollbarGutter: 'stable' }}>
      <CountryFilterSection searchCountry={searchCountry} setSearchCountry={setSearchCountry} onSelect={getCountryByRegion} />
      <section className='w-full sm:max-w-[574px] lg:max-w-[865px] xl:max-w-[1185px] flex sm:flex-col justify-center sm:justify-between px-5 sm:px-0' style={{ scrollbarGutter: 'stable' }}>
        <ul className='grid grid-cols-[repeat(auto-fit,minmax(235px,1fr))] gap-x-20 gap-y-10'>
          {data.length === 0
            ? <CardSkeleton />
            : data.filter(country =>
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
