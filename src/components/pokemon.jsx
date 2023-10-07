import navigatePokemonName from "./useNavigate";


function Pokemon({image, name}) {
    // const navegate = useNavigate();
    const navegate = navigatePokemonName(name);

    // const pokemonName = () => {
    //     navegate(`/pokemon/${name}`);
    // }
    return ( 
        <button onClick={navegate}>
            <img align="center" src={image}></img>
            <h3> {name} </h3>
        </button>
    );
}

export default Pokemon;