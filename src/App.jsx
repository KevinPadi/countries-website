import CardsSections from './components/CardsSections'
import Header from './components/Header'
import DetailsPage from './components/DetailsPage'
import { Route } from 'wouter'

function App () {
  return (
    <div className='flex items-center flex-col min-h-screen' style={{ scrollbarGutter: 'stable' }}>
      <Header />
      <Route path='/' component={() => <CardsSections />} />
      <Route path='/country/:name' component={() => <DetailsPage />} />
    </div>
  )
}
//
export default App
