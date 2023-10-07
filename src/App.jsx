import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Header from './shared/header'
import PokemonDisplay from './shared/pokemonDisplay'
import PokemonFeatures from './components/pokemonFeatures'

function App() {

  return (
    <>
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
