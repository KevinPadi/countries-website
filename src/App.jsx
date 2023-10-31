import Header from './components/Header'
import RegionFilter from './components/RegionFilter'
import SearchBar from './components/SearchBar'

function App () {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='w-full mt-28 sm:mt-16 md:mt-28 bg-lightGray dark:bg-[#202c37]'>
        <section className='w-full h-40 md:h-20 px-5 sm:px-10 md:px-20 flex flex-col sm:flex-row justify-between items-start sm:items-center'>
          <SearchBar />
          <RegionFilter />
        </section>
      </main>
    </div>
  )
}

export default App
