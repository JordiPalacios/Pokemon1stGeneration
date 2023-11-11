// import { useEffect, useState } from "react";

// function usePokemonName() {
//   const [dataPokemonName, setDataPokemonName] = useState([]);
//   const [loadingPokemonName, setLoadingPokemonName] = useState(true);
//   const [errorPokemonName, setErrorPokemonName] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setDataPokemonName(data.results);
//         setLoadingPokemonName(false);
//       } catch (error) {
//         setErrorPokemonName(error);
//         setLoadingPokemonName(false);
//       }
//     };
    
//     fetchData();
//   }, []);

//   return { dataPokemonName, loadingPokemonName, errorPokemonName };
// }

// export default usePokemonName;
