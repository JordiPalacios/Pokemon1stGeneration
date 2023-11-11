// import { useEffect, useState } from "react";
// import { usePokemon } from "../shared/pokemonContext";

// function usePokemonDetails() {
//   const {selectedPokemon, pokemonName} = usePokemon();
//   const [dataPokemonDetails, setDataPokemonDetails] = useState([]);
//   const [loadingPokemonDetails, setLoadingPokemonDetails] = useState(true);
//   const [errorPokemonDetails, setErrorPokemonDetails] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName||'charmander'}`);
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setDataPokemonDetails(data.results);
//         setLoadingPokemonDetails(false);
//       } catch (error) {
//         setErrorPokemonDetails(error);
//         setLoadingPokemonDetails(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return { dataPokemonDetails, loadingPokemonDetails, errorPokemonDetails };
// }

// export default usePokemonDetails;