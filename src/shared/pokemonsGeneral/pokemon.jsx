import { useEffect, useState } from "react";
import navigatePokemonName from "../../components/hooks/useNavigate";
import { usePokemon } from "../../components/hooks/pokemonContext";

function Pokemon({ image, name }) {
  const navegate = navigatePokemonName(name);
  const { pokemonName, setPokemonName, selectedPokemon, setSelectedPokemon } = usePokemon();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    console.log(pokemonName);
  }, [pokemonName]);

  function handleClick() {
    if (selectedPokemon === name) {
        setSelectedPokemon(null);
    } else {
        setPokemonName(name);
        setSelectedPokemon(name);
        navegate();
    }
}

const isSelected = selectedPokemon === name;

  return (
    <button onClick={handleClick}>
      <img align="center" src={image} alt={name} />
      <h3>{name}</h3>
    </button>
  );
}

export default Pokemon;
