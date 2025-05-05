import React, { useContext } from "react"
import { useQuery } from "../hooks/useQuery"
import { PokemonList } from "../components"
import { useNavigate } from "react-router-dom"
import { PokemonContext } from "../context/pokemonContext"

export const Home = () => {
  const {query, setQuery, error} = useQuery()
  const pokemonNavigate = useNavigate()
  const {pokemons} = useContext(PokemonContext)

  const handleSubmit = (event) => { 
    event.preventDefault()
    if (query.trim() === '') {
      pokemonNavigate('/')
    } else {
      pokemonNavigate('/search', {
        state: query
      })
    }
    }
  
  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ') | /^[0-9]/.test(newQuery)) return
    setQuery(newQuery)
  }

  const handleClick = () => {
    pokemonNavigate('/')
  }

  const goToFavouritesPage = () => {
    pokemonNavigate('/favourite')
  }

  return ( 
    <>
        <header className='mainPage'>
          <button 
            className="backButton"
            onClick={handleClick}>
            <img src="https://raw.githubusercontent.com/JordiPalacios/Fotos/3300f4522e3ae238ba3076d80cb6cecb4bfcd3ac/pokemonLogo.svg" alt="pokemonLogo" />
          </button>
          <a href="https://jordicode.dev/" target="_blank" rel="noopener noreferrer">jordicode.dev</a>
          <h1>Generation 1</h1>
          <h2>{pokemons.length} Pokémon</h2>
          <form className='form' onSubmit={handleSubmit}>
              <input onChange={handleChange} value={query} name='query' placeholder='Charmander, Blastoise, Venasaur...' />
              <button type='submit'>Search</button>
          </form>
          <button className="favouritePokemonsButton" onClick={goToFavouritesPage}>Favourites ★</button>
          {error && <p className="error"><b>{error}</b></p>}
        </header>
        <main className="pokemonListContainer">
            <PokemonList />
        </main>
    </>
    );
}







// import { usePokemon } from "../components/pokemonContext.jsx";
// import { useQuery } from "../hooks/useQuery.jsx";

// function Header() {


// export default Header;