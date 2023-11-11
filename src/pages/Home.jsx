import React from "react"
import { useQuery } from "../hooks/useQuery"
import { PokemonList } from "../components"
import { useNavigate } from "react-router-dom"

export const Home = () => {
  const {query, setQuery, error} = useQuery()
  const pokemonNavigate = useNavigate()

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
            <img src="src\assets\img\International_Pokémon_logo.svg" alt="pokemonLogo" />
          </button>
          <h1>Generation 1</h1>
          <h2>151 Pokémon</h2>
          <form className='form' onSubmit={handleSubmit}>
              <input onChange={handleChange} value={query} name='query' placeholder='Charmander, Blastoise, Venasaur...' />
              <button type='submit'>Search</button>
          </form>
          {error && <p className="error"><b>{error}</b></p>}
          <button onClick={goToFavouritesPage}>Favourites</button>
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