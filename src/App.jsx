import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Header from './shared/header'
import PokemonDisplay from './shared/pokemonDisplay'
import PokemonFeatures from './shared/pokemonDetails/pokemonFeatures'


function App() {
  return (
    <>
      <div className='mainPage'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<PokemonDisplay />} />
            <Route path='/pokemon' element={<PokemonDisplay />} />
            <Route path='/pokemon/:pokemonName'element={<PokemonFeatures />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
