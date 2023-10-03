import Pokemon from "./pokemon.jsx";

// Creo que aqui debo hacer un fetch para cargar todos los pokemons de una
const pokemonList = [
    {
        "name": "Bulbasaur"
    },

    {
        "name": "Charizard"
    },

    {
        "name": "Blastoise"
    }
];

function PokemonList() {
    return ( 
        pokemonList.map(pokemon => <Pokemon {...pokemon}></Pokemon>)
     );
}

export default PokemonList;