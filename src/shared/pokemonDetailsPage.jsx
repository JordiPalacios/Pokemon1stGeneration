import usePokemonDetails from '../getInformation/getPokemonDetails'
import ResposeDetailsPokemon from '../mocks/resultsPokemonDetails.json'
import { usePokemon } from './pokemonContext'

// Al hacer click en la imagen que se ejecute el url del pokemon
//     -Guardamos la info del nombre en una variable para pasarsela a la img y name
//     -La demas info la sacamos del link extraido
function PokemonDetailsPage() {
    const {dataPokemonDetails} = usePokemonDetails();
    const pokemonDetailsId = ResposeDetailsPokemon.id
    const pokemonDetailsType = ResposeDetailsPokemon.types
    const pokemonDetailsHeight = ResposeDetailsPokemon.height
    const pokemonDetailsAbilities = ResposeDetailsPokemon.abilities

    const {selectedPokemon, pokemonName} = usePokemon();


    const back = () => {
        console.log(pokemonName, dataPokemonDetails);
    }
    
    return ( 
        <div className="pokemonDetails"> 
            <button
            onClick={back}>
                X
            </button>
            <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemonName}.gif`} alt="pokemonImage" />
            <h3>{pokemonName}</h3>
            <div className="detailsContainer">
                <ul>
                    <h4>Id:&nbsp;&nbsp;</h4>
                    <p>{dataPokemonDetails.id}</p>
                </ul>
                <ul>
                    <h4>Type:&nbsp;&nbsp;</h4>
                    <p>{pokemonDetailsType[0].type.name}</p>
                </ul>
                <ul>
                    <h4>Height:&nbsp;&nbsp;</h4>
                    <p>{pokemonDetailsHeight}</p>
                </ul>
                <ul>
                    <div>
                        <h4>Habilities:</h4>
                        <p>
                            {pokemonDetailsAbilities.map(details => 
                                <li>{details.ability.name}</li>
                                ) }
                        </p>
                     </div>
                    
                </ul>
            </div>
        </div>
     );
}

export default PokemonDetailsPage;
