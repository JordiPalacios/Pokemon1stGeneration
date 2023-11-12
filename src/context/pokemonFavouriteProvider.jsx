import React, { useState } from 'react'
import { PokemonFavouriteContext } from './pokemonFavouriteContext'

export const PokemonFavouriteProvider = ({ children }) => {
    const storedPokemonFavourite = JSON.parse(localStorage.getItem('pokemonFavourite')) || {}
    const [pokemonFavourite, setPokemonFavourite] = useState(storedPokemonFavourite)

    const toggleFavouritePokemon = (pokemonName) => {
        setPokemonFavourite((prev) => {
            const newPokemonFavourite = {...prev}
            newPokemonFavourite[pokemonName] = !prev[pokemonName]

            //Storage new favourite pokemons
            localStorage.setItem('pokemonFavourite', JSON.stringify(newPokemonFavourite))

            return newPokemonFavourite;
        })
    }

  return (
    <PokemonFavouriteContext.Provider
    value={{
        pokemonFavourite, 
        toggleFavouritePokemon
    }}
    >
        {children}
    </PokemonFavouriteContext.Provider>
  )
}