import React from 'react'
import { Link } from 'react-router-dom'

export const PokemonCard = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.name}`}>
        <div className='PokemonCard'>
            <button>
                <img 
                align="center"
                src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
                alt={pokemon.name}
                />
                <h3>{pokemon.name}</h3>
            </button>
        </div>
    </Link>
  )
}
