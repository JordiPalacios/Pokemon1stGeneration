import { useEffect, useState } from "react";
import navigatePokemonName from "../../components/hooks/useNavigate";
import { usePokemon } from "../../components/hooks/pokemonContext";
import { Link } from "react-router-dom";

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
    <Link to={`/pokemon/${name}`}>
      <button onClick={handleClick}>
        <img align="center" src={image} alt={name} />
        <h3>{name}</h3>
      </button>
    </Link>
  );
}

export default Pokemon;
