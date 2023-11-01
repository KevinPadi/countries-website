import React from 'react'

function SearchBar () {
  const handleSearch = () => {
    // Puedes agregar aquí la lógica de búsqueda
  }
  return (
    <div className='w-full sm:w-[330px] lg:w-[450px] relative'>
      <input type='text' name='country' className='bg-white dark:bg-darkBlue w-full h-10 px-20 py-7 block placeholder:text-sm placeholder:text-darkGray placeholder:dark:text-white placeholder:font-semibold font-semibold rounded-md drop-shadow-md' placeholder='Search for a country...' />
      <button
        onClick={handleSearch} className='absolute inset-y-0 left-5 flex items-center pl-3 pointer'
      >
        <svg className='fill-darkGray dark:fill-white' xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M781.692-136.924 530.461-388.155q-30 24.769-69 38.769t-80.692 14q-102.55 0-173.582-71.014t-71.032-173.537q0-102.524 71.014-173.601 71.014-71.076 173.538-71.076 102.523 0 173.6 71.032T625.384-580q0 42.846-14.385 81.846-14.385 39-38.385 67.846l251.231 251.231-42.153 42.153Zm-400.923-258.46q77.308 0 130.962-53.654Q565.385-502.692 565.385-580q0-77.308-53.654-130.962-53.654-53.654-130.962-53.654-77.308 0-130.962 53.654Q196.154-657.308 196.154-580q0 77.308 53.653 130.962 53.654 53.654 130.962 53.654Z' /></svg>
      </button>
    </div>
  )
}

export default SearchBar
