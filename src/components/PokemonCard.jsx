import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { PokemonFavouriteContext } from '../context/pokemonFavouriteContext';

export const PokemonCard = ({ pokemon }) => {
  const {pokemonFavourite, toggleFavouritePokemon} = useContext(PokemonFavouriteContext);
  const favouriteState = {
    favourite: '★',
    notFavourite: '☆'
  }

  const handleClick = () => {   
    toggleFavouritePokemon(pokemon.name)
  } 

  return (
    <>
      <div className='pokemonCard'>
        <div>
          <button onClick={handleClick}> {pokemonFavourite[pokemon.name] ? favouriteState.favourite : favouriteState.notFavourite} </button>                    
        </div>
        <Link to={`/pokemon/${pokemon.name}`}>
          <button>
              <img 
              align="center"
              src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
              alt={pokemon.name}
              />
              <h3>{pokemon.name}</h3>
          </button>
        </Link>
      </div>
    </>
  )
}
