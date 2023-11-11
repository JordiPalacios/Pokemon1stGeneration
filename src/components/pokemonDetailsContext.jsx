// import React, { createContext, useContext, useState, useEffect } from "react";
// import { usePokemon } from "./pokemonContext";

// const PokemonDetailsContext = createContext();

// export const usePokemonDetailsContext = () => useContext(PokemonDetailsContext);

// export function PokemonDetailsProvider({ children }) {
//     const { pokemonName } = usePokemon();
//     const [dataPokemonDetails, setDataPokemonDetails] = useState([]);
//     const [loadingPokemonDetails, setLoadingPokemonDetails] = useState(true);
//     const [errorPokemonDetails, setErrorPokemonDetails] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setDataPokemonDetails(data);
//         setLoadingPokemonDetails(false);
//       } catch (error) {
//         setErrorPokemonDetails(error);
//         setLoadingPokemonDetails(false);
//       }
//     };

//     fetchData();
//   }, [pokemonName]);

//   return (
//     <PokemonDetailsContext.Provider value={{ dataPokemonDetails, loadingPokemonDetails, errorPokemonDetails }}>
//       {children}
//     </PokemonDetailsContext.Provider>
//   );
// }
