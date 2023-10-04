import './App.css'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/notFound'
import PokemonList from './components/pokemonList.jsx'

function App() {
  return (
    //aqui debo poner routes
    <>
      
      {/* <Route index element= {<PokemonsMainPage />} />
      <Route path='/pokemon' element= {<PokemonsMainPage />} />
      <Route path='/pokemon' element= {<PokemonsMainPage />} /> */}
      {/* <Route path='*' element= {<NotFound />}  /> */}

      <div className='mainPage'>
        <header className='header'>
          <img src="src\assets\img\pokemon.png" alt="pokemonLogo" />
          <h1>Generation 1</h1>
          <h2>151 Pokémon</h2>
          <form className='form'>
            <input placeholder='Charmander, Blastoise, Venasaur...' />
            <button type='submit'>Search</button>
          </form>
        </header>
        <main>
          <section className="pokemonSquare">
            <PokemonList />
          </section>
        </main>
      </div>
    </>
  )
}

export default App
