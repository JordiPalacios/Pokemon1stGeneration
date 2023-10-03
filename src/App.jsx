import { useState } from 'react'
import './App.css'
import PokemonList from './components/pokemonList.jsx'

function App() {

  return (
    <main className='main'>
      <header className='header'>
        <img src="src\assets\img\pokemon.png" alt="pokemonLogo" />
        <h1>Generation 1</h1>
        <h2>151 Pokémon</h2>
      </header>
      <section className="pokemonSquare">
        <PokemonList />
      </section>
    </main>
  )
}

export default App
