import React, { createContext, useContext, useState, useEffect } from "react";

const PokemonDetailsContext = createContext();

export const usePokemonDetailsContext = () => useContext(PokemonDetailsContext);

export function PokemonDetailsProvider({ children }) {
  const [dataPokemonDetails, setDataPokemonDetails] = useState([]);
  const [loadingPokemonDetails, setLoadingPokemonDetails] = useState(true);
  const [errorPokemonDetails, setErrorPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDataPokemonDetails(data);
        setLoadingPokemonDetails(false);
      } catch (error) {
        setErrorPokemonDetails(error);
        setLoadingPokemonDetails(false);
      }
    };

    fetchData();
  }, []);

  return (
    <PokemonDetailsContext.Provider value={{ dataPokemonDetails, loadingPokemonDetails, errorPokemonDetails }}>
      {children}
    </PokemonDetailsContext.Provider>
  );
}
