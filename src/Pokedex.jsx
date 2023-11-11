import { PokedexRouter } from './PokedexRouter'
import { PokemonFavouriteProvider } from './context/pokemonFavouriteProvider';
import { PokemonProvider } from './context/pokemonProvider';

function Pokedex() {
  return (
    <>
      <PokemonProvider>
        <PokemonFavouriteProvider>
          <PokedexRouter />
        </PokemonFavouriteProvider>
      </PokemonProvider>
    </>
  );
}

export default Pokedex
