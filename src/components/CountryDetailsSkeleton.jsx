import { Skeleton } from '@nextui-org/react'

function CountryDetailsSkeleton () {
  return (
    <div className='space-y-10 px-5'>
      <div className='flex flex-col items-center lg:flex-row gap-10 lg:gap-20 '>
        <Skeleton className='rounded-lg'>
          <div className='w-[300px] h-40 lg:h-56 lg:w-[850px]'>
            <div className='w-full h-20 bg-blue-800/80' />
          </div>
        </Skeleton>
        <div className='w-full'>
          <Skeleton className='w-2/5 h-8 rounded-md mb-10'>
            <h2 className='w-10 text-3xl font-extrabold mb-0' />
          </Skeleton>
          <div className='flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between w-full mb-10 '>
            <div>
              <div className='flex flex-col gap-2 text-start'>
                <div className='flex gap-1 items-center'>
                  {/* <p className='font-semibold text-darkBlue dark:text-white'>Native Name:</p> */}
                  <Skeleton className='w-48 h-4'>
                    <p className='' />
                  </Skeleton>
                </div>
                <div className='flex gap-1'>
                  <Skeleton className='w-36 h-4'>
                    <p className='' />
                  </Skeleton>
                </div>
                <div className='flex gap-1'>
                  <Skeleton className='w-32 h-4'>
                    <p className='' />
                  </Skeleton>
                </div>
                <div className='flex gap-1'>
                  <Skeleton className='w-44 h-4'>
                    <p className='' />
                  </Skeleton>
                </div>
                <div className='flex gap-1'>
                  <Skeleton className='w-28 h-4'>
                    <p className='' />
                  </Skeleton>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2 text-start'>
              <div className='flex gap-1'>
                <Skeleton className='w-32 h-4'>
                  <p className='' />
                </Skeleton>
              </div>
              <div className='flex gap-1'>
                <Skeleton className='w-28 h-4'>
                  <p className='' />
                </Skeleton>
              </div>
              <div className='flex gap-1'>
                <Skeleton className='w-40 h-4'>
                  <p className='' />
                </Skeleton>
              </div>
            </div>
          </div>
          <div>
            <div className='flex lg:w-full items-center flex-col sm:flex-row gap-5 lg:gap-2'>
              <Skeleton className='w-32 h-4'>
                <p className='' />
              </Skeleton>
              <nav className='flex items-center gap-2 flex-wrap'>
                <Skeleton className='w-24 h-6'>
                  <div className='flex items-center text-xs font-semibold px-5 h-8 bg-white dark:bg-darkBlue text-darkBlue dark:text-white drop-shadow-md rounded-sm' />
                </Skeleton>
                <Skeleton className='w-24 h-6'>
                  <div className='flex items-center text-xs font-semibold px-5 h-8 bg-white dark:bg-darkBlue text-darkBlue dark:text-white drop-shadow-md rounded-sm' />
                </Skeleton>
                <Skeleton className='w-24 h-6'>
                  <div className='flex items-center text-xs font-semibold px-5 h-8 bg-white dark:bg-darkBlue text-darkBlue dark:text-white drop-shadow-md rounded-sm' />
                </Skeleton>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetailsSkeleton
