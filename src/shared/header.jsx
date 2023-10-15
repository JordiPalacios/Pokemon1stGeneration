import { usePokemon } from "../components/pokemonContext.jsx";
import { useQuery } from "../hooks/useQuery.jsx";

function Header() {
  const {query, setQuery, error} = useQuery()

  const handleSubmit = (event) => { 
    event.preventDefault()
    console.log({query})
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ') | /^[0-9]/.test(newQuery)) return
    setQuery(newQuery)
  }

  
    return ( 
      <header className='header'>
        <img src="src\assets\img\pokemon.png" alt="pokemonLogo" />
        <h1>Generation 1</h1>
        <h2>151 Pokémon</h2>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' placeholder='Charmander, Blastoise, Venasaur...' />
          <button type='submit'>Search</button>
        </form>
        {error && <p className="error">{error}</p>}
      </header>
     );
}

export default Header;