import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './shared/header'
import PokemonDisplay from './shared/pokemonDisplay'
import PokemonFeatures from './shared/pokemonDetails/pokemonFeatures'
import UrlNotFound from './shared/urlNotFound'


function App() {
  return (
    <>
      <div className='mainPage'>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/pokemon' element={<Header />} />
        </Routes>
        <main>
          <Routes>
            <Route path='/' element={<PokemonDisplay />} />
            <Route path='/pokemon' element={<PokemonDisplay />} />
            <Route path='/pokemon/:pokemonName'element={<PokemonFeatures />} />
            <Route path='*' element={<UrlNotFound />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
