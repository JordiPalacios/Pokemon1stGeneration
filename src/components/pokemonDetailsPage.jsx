import PokemonDetails from "./pokemonDetails"
import ResposeDetailsPokemon from '../mocks/resultsPokemonDetails.json'

function PokemonDetailsPage() {
    const pokemonDetailsPage = ResposeDetailsPokemon
    return ( 
        pokemonDetailsPage.map(details => 
            <PokemonDetails>
                {...details}
            </PokemonDetails>)
     );
}

export default PokemonDetailsPage;