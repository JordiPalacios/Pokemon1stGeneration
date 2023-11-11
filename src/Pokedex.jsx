import { PokedexRouter } from './PokedexRouter'
import { PokemonProvider } from './context/pokemonProvider';

function Pokedex() {
  return (
    <>
      <PokemonProvider>
        <PokedexRouter />
      </PokemonProvider>
    </>
  );
}

export default Pokedex
