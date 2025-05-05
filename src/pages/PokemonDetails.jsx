import React, { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../context/pokemonContext'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Loader } from '../components'
import { firstUpperCase } from '../FunctionsJS/FunctionsJS'
import { PokemonFavouriteContext } from '../context/pokemonFavouriteContext'

export const PokemonDetails = () => {

    const [loading, setLoading] = useState(true)
    const {pokemonFavourite, toggleFavouritePokemon} = useContext(PokemonFavouriteContext);
    const favouriteState = {
        favourite: '★',
        notFavourite: '☆'
    }

    const handleClick = () => {   
        toggleFavouritePokemon(pokemon.name)
    } 

    const { pokemonName } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPokemon = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
            if (!response.ok) {
            throw new Error("Pokemon not found");
            }
            const data = await response.json();
            setPokemon(data);
            setLoading(false);
        } catch (err) {
            setError(true);
            setTimeout(() => navigate("/"), 3000); // Redirige al inicio después de 3 segundos
        }
        };

        fetchPokemon();
    }, [pokemonName, navigate]);

    if (error) {
        return <p>Pokémon not found. Redirecting to the homepage...</p>;
    }

    if (!pokemon) {
        return <p>Loading...</p>;
    }

    return (
        <main>
            {
                loading ? (
                    <Loader />
                ) : (
                    <>
                        <div className="pokemonDetailsContainer">
                            <div className="pokemonDetailsCard">
                                <div className="pokemonDetailsButton">
                                    <Link to={`/pokemon`}>
                                        <button>
                                            X
                                        </button>
                                    </Link>
                                    <div className='favouritePokemon'>
                                        <button onClick={handleClick}> {pokemonFavourite[pokemon.name] ? favouriteState.favourite : favouriteState.notFavourite} </button>                    
                                    </div>
                                </div>
                                <div>
                                    <img align="center"
                                    src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
                                    alt={pokemon.name} />
                                </div>
                                <div className='pokemonDetailsText'>
                                    <h3>{firstUpperCase(pokemon.name)}</h3>
                                    <ul>
                                        <h4>Id:&nbsp;&nbsp;</h4>
                                        <p>{pokemon.id}</p>
                                    </ul>
                                    <ul>
                                        <h4>Type:&nbsp;&nbsp;</h4>
                                        {pokemon.types.map((type, index)=> (
                                            <p key={index}>{firstUpperCase(type.type.name)}</p>
                                            ))}
                                    </ul>
                                    <ul>
                                        <h4>Height:&nbsp;&nbsp;</h4>
                                        <p>{pokemon.height}</p>
                                    </ul>
                                    <ul>
                                        <div>
                                            <h4>Habilities:</h4>
                                            {pokemon.abilities.map((ability, index) => (
                                                <li key={index}>{firstUpperCase(ability.ability.name)}</li>
                                                ))}
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </main>
    )
}