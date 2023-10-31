import CountryFilterSection from './components/CountryFilterSection'
import Header from './components/Header'

function App () {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='w-full mt-28 sm:mt-16 md:mt-28 bg-lightGray dark:bg-[#202c37]'>
        <CountryFilterSection />
      </main>
    </div>
  )
}

export default App
