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

    const handleClick = () => {
        pokemonNavigate('/')
    }

    return (
        <>
            <header className='mainPage'>
                <button 
                className="backButton"
                onClick={handleClick}>
                <img src="https://raw.githubusercontent.com/JordiPalacios/Fotos/3300f4522e3ae238ba3076d80cb6cecb4bfcd3ac/pokemonLogo.svg" alt="pokemonLogo" 
                />
                </button>
                <h1>Generation 1</h1>
                <h2>{pokemons.length} Pokémon</h2>
                <button className="homePokemonsButton" onClick={handleClick}>Home Page</button>
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
