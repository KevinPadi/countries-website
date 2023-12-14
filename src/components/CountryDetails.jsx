import Button from './Button'
import { useState, useEffect } from 'react'

function CountryDetails ({ data: { name, population, region, subregion, capital, currencies, languages, borders, tld } }) {
  const capitalName = capital.length !== 0 ? capital : 'None'
  const nativeNameObject = name.nativeName
  const nativeName = nativeNameObject && Object.values(nativeNameObject)[0] && nativeNameObject[Object.keys(nativeNameObject)[0]].common !== undefined
    ? nativeNameObject[Object.keys(nativeNameObject)[0]].common
    : 'None'
  const populationFormated = population.toLocaleString('en-US')
  const currencyName = currencies && Object.values(currencies)[0] !== undefined ? Object.values(currencies)[0].name : 'None'
  const languagesList = languages && Object.values(languages)[0] !== undefined ? Object.values(languages).join(', ') : 'None'
  const [bordersCountries, setBordersCountries] = useState([])

  useEffect(() => {
    if (borders.length > 0) {
      fetch(`https://restcountries.com/v3.1/alpha?codes=${borders.join(',')},?fields=name`)
        .then(response => response.json())
        .then(data => {
          setBordersCountries(data)
        })
        .catch(error => {
          console.error('Hubo un error al obtener los datos:', error)
        })
    }
  }, [borders])

  console.log(bordersCountries ? bordersCountries.map((country) => console.log(country.name.common)) : 'none')
  return (
    <div className='w-full'>
      <h2 className='text-3xl font-extrabold mb-6'>{name.common}</h2>
      <div className='flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between w-full mb-10 '>
        <div>
          <div className='flex flex-col gap-1 text-start'>
            <div className='flex gap-1'>
              <p className='font-semibold text-darkBlue dark:text-white'>Native Name:</p><p className='text-darkBlue dark:text-white'>{nativeName === undefined ? 'none' : nativeName}</p>
            </div>
            <div className='flex gap-1'>
              <p className='font-semibold text-darkBlue dark:text-white'>Population:</p><p className='text-darkBlue dark:text-white'>{populationFormated}</p>
            </div>
            <div className='flex gap-1'>
              <p className='font-semibold text-darkBlue dark:text-white'>Region:</p><p className='text-darkBlue dark:text-white'>{region}</p>
            </div>
            <div className='flex gap-1'>
              <p className='font-semibold text-darkBlue dark:text-white'>Sub Region:</p><p className='text-darkBlue dark:text-white'>{subregion}</p>
            </div>
            <div className='flex gap-1'>
              <p className='font-semibold text-darkBlue dark:text-white'>Capital:</p><p className='text-darkBlue dark:text-white'>{capitalName}</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-1 text-start'>
          <div className='flex gap-1'>
            <p className='font-semibold text-darkBlue dark:text-white'>Top Level Domain:</p><p className='text-darkBlue dark:text-white'>{tld}</p>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold text-darkBlue dark:text-white'>Currencies:</p><p className='text-darkBlue dark:text-white'>{currencyName}</p>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold text-darkBlue dark:text-white'>Languages:</p><p className='text-darkBlue dark:text-white'>{languagesList}</p>
          </div>
        </div>
      </div>
      <div>
        <div className='flex lg:w-full items-center flex-col sm:flex-row gap-5 lg:gap-2'>
          <p className='font-semibold text-darkBlue dark:text-white'>
            Border Countries:
          </p>
          <div className='flex items-center gap-2 flex-wrap'>
            {bordersCountries ? bordersCountries.map((country) => <Button key={country.name.common} label={country.name.common} />) : <Button label='no H' />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetails
