import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import NotFound from './notFound'
import Header from './shared/header'
import PokemonDetailsPage from './shared/pokemonDetailsPage'
import PokemonList from './components/pokemonList'
import PokemonDisplay from './shared/pokemonDisplay'
import PokemonFeatures from './shared/pokemonFeatures'

function App() {
  return (
    <>
      {/* <Route path='/'>
        <Header />
      </Route>
      <Route path='/pokemon'>
        <PokemonPage />
      </Route> */}
      <div className='mainPage'>
          <Header />
          <main>
            <PokemonDisplay />
            <PokemonFeatures />
          </main>
      </div>
    </>
  )
}

export default App
