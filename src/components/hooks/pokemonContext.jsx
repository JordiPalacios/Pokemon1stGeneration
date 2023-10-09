import { createContext, useContext, useState } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonName, setPokemonName] = useState("charmander");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <PokemonContext.Provider 
        value={{ pokemonName, setPokemonName, selectedPokemon, setSelectedPokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  return useContext(PokemonContext);
};
