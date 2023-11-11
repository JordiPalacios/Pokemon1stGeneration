import React, { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { PokemonCard } from "../components";
import { PokemonFavouriteContext } from "../context/pokemonFavouriteContext";
import { PokemonContext } from "../context/pokemonContext";

export const FavouritesPokemons = () => {
    const { pokemonFavourite } = useContext(PokemonFavouriteContext)
    const { pokemons } = useContext(PokemonContext)

    const pokemonNavigate = useNavigate()

    //We filter pokemons by star
    const favouritePokemons = Object.keys(pokemonFavourite).filter(
        (name) => pokemonFavourite[name]
    )

    const pokemonsFavouriteNames = pokemons.filter((pokemon) => 
    favouritePokemons.includes(pokemon.name)    
    )

    console.log(pokemons)
    console.log(pokemonFavourite)
    console.log(favouritePokemons)
    console.log(pokemonsFavouriteNames)

    const handleClick = () => {
        pokemonNavigate('/')
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
                <h2>151 Pokémon</h2>
                </header>
            <div className="searchContainer">
                <p className="searchedPokemon">
                    <span><b>{pokemonsFavouriteNames.length}</b> favourite Pokémons have been found</span>
                </p>
                <div className="pokemonListContainer">
                    <div className="pokemonList">
                        {pokemonsFavouriteNames.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} />)}
                    </div>
                </div>
            </div>
        </>
    )
}