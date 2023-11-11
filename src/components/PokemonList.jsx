import React, { useContext } from 'react'
import { PokemonContext } from '../context/pokemonContext'
import { PokemonCard } from './PokemonCard'

export const PokemonList = () => {
  
    const {pokemons} = useContext(PokemonContext)

    return (
    <>
        <div className="pokemonDisplay">
            {pokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.name}/>)}
        </div>
    </>
  )
}
