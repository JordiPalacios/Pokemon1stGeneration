function PokemonDetails(image, name, id, height, abilities) {
    return ( 
        <>
            <button>X</button>
            {/* <img src={image} alt="PokemonName" /> */}
            {/* <h3>{name}</h3> */}
            <li>
                <ul>ID: {id}</ul>
                <ul>Height: {height}</ul>
                <ul>Habilities {abilities}</ul>
            </li>

        </>
     );
}

export default PokemonDetails;