import React from 'react'

function CountryCard ({ name, population, region, capital, flag }) {
  const populationFormated = population.toLocaleString('en-US')

  return (
    <article className='w-[235px] h-[350px] bg-white dark:bg-darkBlue rounded-md overflow-hidden drop-shadow-lg'>
      <img className='w-full h-40' src={flag} alt={`${name} flag`} />
      <section className='flex flex-col gap-5 p-7'>
        <h2 className='font-extrabold text-lg text-veryDarkBlue dark:text-white'>{name}</h2>
        <section className='flex flex-col gap-1'>
          <div className='flex gap-1'>
            <p className='font-semibold text-sm text-veryDarkBlue dark:text-white'>Population:</p><p className='font-thin text-sm text-veryDarkBlue dark:text-white'>{populationFormated}</p>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold text-sm text-veryDarkBlue dark:text-white'>Region:</p><p className='font-thin text-sm text-veryDarkBlue dark:text-white'>{region}</p>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold text-sm text-veryDarkBlue dark:text-white'>Capital:</p><p className='font-thin text-sm text-veryDarkBlue dark:text-white'>{capital}</p>
          </div>
        </section>
      </section>
    </article>
  )
}

export default CountryCard
