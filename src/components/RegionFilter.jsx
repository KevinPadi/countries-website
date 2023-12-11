import { React, useState, useEffect } from 'react'
import { Select, SelectItem } from '@nextui-org/react'

function RegionFilter ({ setData }) {
  // const { onSelectRegion } = props
  const [value, setValue] = useState('')
  // const [filteredRegion, setFilteredRegion] = useState(null)

  const regions = [
    { label: 'Africa', value: 'Africa' },
    { label: 'America', value: 'America' },
    { label: 'Asia', value: 'Asia' },
    { label: 'Europe', value: 'Europe' },
    { label: 'Oceania', value: 'Oceania' }
  ]

  const handleSelectChange = (event) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    if (value !== '') {
      fetch(`https://restcountries.com/v3.1/region/${value}?fields=name,flags,tld,currencies,capital,region,subregion,languages,borders,population`)
        .then(response => response.json())
        .then(data => {
          setData(data)
        })
        .catch(error => {
          console.error('Hubo un error al obtener los datos:', error)
        })
    }
  }, [value])

  return (
    <>
      <div className='flex w-56 flex-wrap md:flex-nowrap gap-4 drop-shadow-md'>
        {/* <Select
        onChange={handleRegionChange}
        // selectedKeys={[value]}
        label='Filter by Region'
        className='max-w-xs font-semibold'
        classNames={{ trigger: 'bg-background rounded-md px-6', popover: 'bg-background rounded-md font-semibold', label: 'font-semibold z-50' }}
      >
        {regions.map((region) => (
          <SelectItem key={region.value} value={region.value}>
            {region.label}
          </SelectItem>
        ))}
      </Select> */}
        <Select
          label='Favorite Animal'
          variant='bordered'
          placeholder='Select an animal'
          selectedKeys={[value]}
          className='max-w-xs'
          onChange={handleSelectChange}
        >
          {regions.map((region) => (
            <SelectItem key={region.value} value={region.value}>
              {region.label}
            </SelectItem>
          ))}
        </Select>
        <p className='text-small text-default-500'>Selected: {value}</p>
      </div>
      {/* // <div> */}

      <label htmlFor='countries' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Select an option</label>
      <select onChange={handleSelectChange} id='countries' className='bg-gray-50 w-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
        {regions.map((region) => (
          <option key={region.value} value={region.value}>
            {region.label}s
          </option>
        ))}
      </select>

      {/* </div> */}
    </>
  )
}

export default RegionFilter
