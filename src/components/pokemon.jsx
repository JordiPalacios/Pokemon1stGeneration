function Pokemon({image, name}) {
    return ( 
    <>
        <button>
            <img align="center" src={image}></img>
            <h3> {name} </h3>
        </button>
    </> 
    );
}

export default Pokemon;