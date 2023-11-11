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

      return ( 
        <>
            <header className='mainPage'>
              <img src="src\assets\img\pokemon.png" alt="pokemonLogo" />
              <h1>Generation 1</h1>
              <h2>151 Pokémon</h2>
              <form className='form' onSubmit={handleSubmit}>
                  <input onChange={handleChange} value={query} name='query' placeholder='Charmander, Blastoise, Venasaur...' />
                  <button type='submit'>Search</button>
              </form>
              {error && <p className="error">{error}</p>}
            </header>
            <main className="PokemonListContainer">
                <PokemonList />
            </main>
        </>
       );
}







// import { usePokemon } from "../components/pokemonContext.jsx";
// import { useQuery } from "../hooks/useQuery.jsx";

// function Header() {


// export default Header;