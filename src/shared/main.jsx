import PokemonDetailsPage from "../components/pokemonDetailsPage";
import PokemonList from "../components/pokemonList";

function Main() {
    return ( 
        <main>
          <section className="pokemonDisplay">
            <PokemonList />
          </section>
          <section>
            <PokemonDetailsPage />
          </section>
        </main>
     );
}

export default Main;