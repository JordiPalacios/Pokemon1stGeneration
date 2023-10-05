function Header() {
    return ( 
      <header className='header'>
        <img src="src\assets\img\pokemon.png" alt="pokemonLogo" />
        <h1>Generation 1</h1>
        <h2>151 Pokémon</h2>
        <form className='form'>
          <input placeholder='Charmander, Blastoise, Venasaur...' />
          <button type='submit'>Search</button>
        </form>
      </header>
     );
}

export default Header;