import { usePokemon } from '../../components/hooks/pokemonContext'
import { usePokemonDetailsContext } from '../../components/hooks/pokemonDetailsContext'
import { Link } from "react-router-dom";

// Al hacer click en la imagen que se ejecute el url del pokemon
//     -Guardamos la info del nombre en una variable para pasarsela a la img y name
//     -La demas info la sacamos del link extraido
function PokemonDetailsPage() {
    const { dataPokemonDetails } = usePokemonDetailsContext();
    const pokemonId = dataPokemonDetails ? dataPokemonDetails.id : null;
    const pokemonHeight = dataPokemonDetails ? dataPokemonDetails.height : null;

    const {pokemonName} = usePokemon();

    return ( 
        <div className="pokemonDetails"> 
            <Link to={`/pokemon`}>
                <button>
                    X
                </button>
            </Link>
            <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemonName}.gif`} alt="pokemonImage" />
            <h3>{pokemonName}</h3>
            <div className="detailsContainer">
                <ul>
                    <h4>Id:&nbsp;&nbsp;</h4>
                    <p>{pokemonId}</p>
                </ul>
                <ul>
                    <h4>Type:&nbsp;&nbsp;</h4>
                    {/* {dataPokemonDetails && dataPokemonDetails.types.map((type, index) => (
                        <p key={index}>{type.type.name}</p>
                    ))} */}
                </ul>
                <ul>
                    <h4>Height:&nbsp;&nbsp;</h4>
                    <p>{pokemonHeight}</p>
                </ul>
                <ul>
                    <div>
                        <h4>Habilities:</h4>
                        {/* {dataPokemonDetails && dataPokemonDetails.abilities.map((ability, index) => (
                            <li key={index}>{ability.ability.name}</li>
                        ))} */}
                     </div>
                </ul>
            </div>
        </div>
     );
}

export default PokemonDetailsPage;
