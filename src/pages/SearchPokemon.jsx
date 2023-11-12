import React, { useContext } from "react"
import { PokemonContext } from "../context/pokemonContext";
import { useLocation, useNavigate } from "react-router-dom";
import { PokemonCard } from "../components";
import { useQuery } from "../hooks/useQuery";



export const SearchPokemon = () => {
    const location = useLocation()
    const {pokemons} = useContext(PokemonContext)

    //We filter pokemons by words - Searching always in LowerCase
    const filteredPokemons = pokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))
   
    //Form
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
                <img src="src\assets\img\International_Pokémon_logo.svg" alt="pokemonLogo" 
                />
                </button>
                <h1>Generation 1</h1>
                <h2>{pokemons.length} Pokémons</h2>
                <form className='form' onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={query} name='query' placeholder='Charmander, Blastoise, Venasaur...' />
                    <button type='submit'>Search</button>
                </form>
                <div className="buttonsContainer">
                <button className="favouritePokemonsButton" onClick={goToFavouritesPage}>Favourites ★</button>
                <button className="homePokemonsButton" onClick={handleClick}>Home Page</button>
                </div>
                {error && <p className="error">{error}</p>}
                </header>
            <div className="searchContainer">
                <p className="searchedPokemon">
                    <span><b>{filteredPokemons.length}</b> Pokémons have been found</span>
                </p>
                <div className="pokemonListContainer">
                    <div className="pokemonList">
                        {filteredPokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} />)}
                    </div>
                </div>
            </div>
        </>
    );
}