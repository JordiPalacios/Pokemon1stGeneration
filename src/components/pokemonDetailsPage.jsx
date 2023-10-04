import PokemonDetails from "./pokemonDetails"
import ResposeDetailsPokemon from '../mocks/resultsPokemonDetails.json'

// Al hacer click en la imagen que se ejecute el url del pokemon
//     -Guardamos la info del nombre en una variable para pasarsela a la img y name
//     -La demas info la sacamos del link extraido

function PokemonDetailsPage() {
    const pokemonDetailsId = ResposeDetailsPokemon.id
    const pokemonDetailsType = ResposeDetailsPokemon.types
    const pokemonDetailsHeight = ResposeDetailsPokemon.height
    const pokemonDetailsAbilities = ResposeDetailsPokemon.abilities

    return ( 
        <>  
            <img src="https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif" alt="pokemonImage" />
            <p>Charizard</p>
            <p>Id: {pokemonDetailsId}</p>
            <p>Type: {pokemonDetailsType[0].type.name}</p>
            <p>Height: {pokemonDetailsHeight}</p>
            <p> Habilities:
                <ul>
                    {pokemonDetailsAbilities.map(details => 
                        <p>{details.ability.name}</p>
                        ) }
                </ul>
            </p>
        </>
     );
}

export default PokemonDetailsPage;