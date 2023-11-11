import { useEffect } from "react";
import { PokemonContext } from "./pokemonContext";

export const PokemonProvider = ({children}) => {

    const getPokemons = async() => {
        const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
        const res = await fetch(pokemonUrl)
        const data = await res.json();
        console.log(data);

    }

    useEffect(() => {
        getPokemons()
    },[])
    
    return (
        <PokemonContext.Provider value={{
            id:0
        }}>
            {children}
        </PokemonContext.Provider>
    );
};
