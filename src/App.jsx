import CardsSections from './components/CardsSections'
import Header from './components/Header'
import DetailsPage from './components/DetailsPage'
import { Route, Switch } from 'wouter'

function App () {
  return (
    <div className='flex items-center flex-col min-h-screen' style={{ scrollbarGutter: 'stable' }}>
      <Header />
      <Switch>
        <Route path='/' component={() => <CardsSections />} />
        <Route path='/country/:name' component={() => <DetailsPage />} />
      </Switch>
    </div>
  )
}

export default App
