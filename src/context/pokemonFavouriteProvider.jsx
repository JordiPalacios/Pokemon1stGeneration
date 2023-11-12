import React, { useState } from 'react'
import { PokemonFavouriteContext } from './pokemonFavouriteContext'

export const PokemonFavouriteProvider = ({ children }) => {
    const [pokemonFavourite, setPokemonFavourite] = useState({})

    const toggleFavouritePokemon = (pokemonName) => {
        setPokemonFavourite((prev) => {
            const newPokemonFavourite = {...prev}
            newPokemonFavourite[pokemonName] = !prev[pokemonName]

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