import { Skeleton } from '@nextui-org/react'

function CardSkeleton () {
  const numberOfCards = 8
  const renderCardSkeletons = () => {
    const skeletons = []
    for (let i = 0; i < numberOfCards; i++) {
      skeletons.push(
        <article
          key={i}
          className='w-[235px] h-[350px] bg-white dark:bg-darkBlue rounded-md overflow-hidden shadow-lg border-1 border-gray-200 dark:border-0 hover:scale-105 transition-transform'
        >
          <Skeleton>
            <div className='w-full h-40 max-h-40 overflow-hidden'>
              <img className='w-full h-full' alt='country flag' />
            </div>
          </Skeleton>
          <section className='flex flex-col gap-20 p-7 border-t-1 border-gray-200 dark:border-t-0'>
            <div className='space-y-3'>
              <div className='pb-5 pt-1'>
                <Skeleton className='w-3/5 rounded-lg'>
                  <div className='h-4 w-3/5 rounded-lg' />
                </Skeleton>
              </div>
              <Skeleton className='w-4/5 rounded-lg'>
                <div className='h-3 w-4/5 rounded-lg bg-default-200' />
              </Skeleton>
              <Skeleton className='w-2/5 rounded-lg'>
                <div className='h-3 w-2/5 rounded-lg bg-default-300' />
              </Skeleton>
              <Skeleton className='w-3/5 rounded-lg'>
                <div className='h-3 w-3/5 rounded-lg bg-default-300' />
              </Skeleton>
            </div>
          </section>
        </article>
      )
    }
    return skeletons
  }

  return <>{renderCardSkeletons()}</>
}

export default CardSkeleton
