import { useEffect, useState } from "react";
import { PokemonContext } from "./pokemonContext";
import { useQuery } from "../hooks/useQuery";

export const PokemonProvider = ({children}) => {

    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const [activeFilter, setActiveFilter] = useState(false)

    //Form Hook
    const {query} = useQuery({
        query: ''
    })

    //Call all 1st Generation Pokemons
    const getPokemons = async () => {
        const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'

        const res = await fetch(pokemonUrl)
        const data = await res.json()

        const pokemonName = data.results.map(async pokemon => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data;
        })
        const pokemonNameResults = await Promise.all(pokemonName)
        
        setPokemons(pokemonNameResults)
        setLoading(false)
    }

    // Call specific Pokemon by name
    const getPokemonByName = async name => {
        const pokemonUrl = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${pokemonUrl}pokemon/${name}`)
        const data = await res.json()
        return data;        
    }
   
    useEffect(() => {
        getPokemons()
    }, [])
    
    return (
        <PokemonContext.Provider 
        value={{
            // Pokemons Information
            query,
            pokemons,
            getPokemonByName,
            // Loading States
            loading,
            setLoading,
            // Filter Button
            activeFilter,
            setActiveFilter
        }}>
            {children}
        </PokemonContext.Provider>
    );
};
