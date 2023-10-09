import Pokemon from "./pokemon.jsx";
import usePokemonName from "../../getInformation/getFirstName.jsx";

function PokemonList() {
    const {dataPokemonName} = usePokemonName();

    return ( 
        <>
            {dataPokemonName.map((pokemon) => (
                <Pokemon
                    key={pokemon.name}
                    name={pokemon.name}
                    image={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
            />
            ))}
        </>
    );
}

export default PokemonList;