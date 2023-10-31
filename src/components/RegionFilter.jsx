import React from 'react'
import { Select, SelectItem } from '@nextui-org/react'

function RegionFilter () {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

  return (
    <div className='flex w-56 flex-wrap md:flex-nowrap gap-4 drop-shadow-md'>
      <Select
        label='Filter by Region'
        className='max-w-xs font-semibold'
        classNames={{ trigger: 'bg-background rounded-md px-6', popover: 'bg-background rounded-md font-semibold', label: 'font-semibold' }}
      >
        {regions.map((regions) => (
          <SelectItem key={regions} value={regions}>
            {regions}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}

export default RegionFilter
