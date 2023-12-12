import { Select, SelectItem } from '@nextui-org/react'

function RegionFilter ({ onSelect }) {
  const regions = [
    { label: 'Africa', value: 'Africa' },
    { label: 'America', value: 'America' },
    { label: 'Asia', value: 'Asia' },
    { label: 'Europe', value: 'Europe' },
    { label: 'Oceania', value: 'Oceania' }
  ]

  const handleSelectChange = (event) => {
    const regionName = event.target.value
    onSelect(regionName)
  }

  return (
    <div className='flex w-56 flex-wrap md:flex-nowrap gap-4 drop-shadow-md'>
      <Select
        label='Filter by Region'
        variant='flat'
        placeholder='Select Region'
        className='max-w-xs font-semibold'
        classNames={{ trigger: 'bg-background rounded-md px-6', popover: 'bg-background rounded-md font-semibold', label: 'font-semibold z-50' }}
        onChange={handleSelectChange}
      >
        {regions.map((region) => (
          <SelectItem key={region.value} value={region.value}>
            {region.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}

export default RegionFilter
