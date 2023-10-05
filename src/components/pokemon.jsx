import { useNavigate } from "react-router-dom";

function Pokemon({image, name}) {
    const navegate = useNavigate();

    const pokemonName = () => {
        navegate(`/pokemon/${name}`);
    }
    return ( 
        <button onClick={pokemonName}>
            <img align="center" src={image}></img>
            <h3> {name} </h3>
        </button>
    );
}

export default Pokemon;