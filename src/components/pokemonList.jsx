import Pokemon from "./pokemon.jsx";
import responsePokemonName from "../mocks/resultsPokemonsName.json"

function PokemonList() {
    const pokemons = responsePokemonName.results

    return ( 
        pokemons.map(
            pokemon => 
            <Pokemon 
                name={pokemon.name}
                image={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name.toLowerCase()}.gif`}
                >
            </Pokemon>
        )
     );
}

export default PokemonList;