import { useState, useEffect } from 'react'
import DetailsSectionHeader from './DetailsSectionHeader'
import CountryDetails from './CountryDetails'
import { useParams } from 'wouter'

function DetailsPage () {
  const [countryData, setCountryData] = useState(null)
  const params = useParams()
  const name = params.name.replaceAll('%20', ' ')

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,flags,tld,currencies,capital,region,subregion,languages,borders,population`)
      .then(response => response.json())
      .then(data => {
        setCountryData(data)
        console.log(data[0].flags)
      })
      .catch(error => {
        console.error('Hubo un error al obtener los datos:', error)
      })
  }, [])

  return (
    <section className='w-full max-w-[400px] sm:max-w-[574px] lg:max-w-[865px] xl:max-w-[1185px] mt-28 md:mt-28 pb-10 md:pb-20'>
      <div className='space-y-10 px-5'>
        <DetailsSectionHeader />
        <div className='flex flex-col items-center lg:flex-row gap-10 lg:gap-20 '>
          <div className='w-[300px] lg:w-[850px]'>
            {countryData ? <img className='w-full h-auto' src={countryData[0].flags.png} alt='flag' /> : 'no cargó'}
          </div>
          {countryData ? <CountryDetails data={countryData[0]} /> : 'no cargó'}
        </div>
      </div>
    </section>
  )
}

export default DetailsPage
