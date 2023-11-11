import React, { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../context/pokemonContext'
import { Link, useParams } from 'react-router-dom'
import { Loader } from '../components'
import { firstUpperCase } from '../FunctionsJS/FunctionsJS'

export const PokemonDetails = () => {
    const { getPokemonByName } = useContext(PokemonContext)

    const [loading, setLoading] = useState(true)
    const [pokemon, setPokemon] = useState({})

    const { pokemonName } = useParams()

    //Request details about the Pokemon selected
    const fetchPokemon = async name => {
        const data = await getPokemonByName(name)
        setPokemon(data)
        setLoading(false)
    }

    useEffect(() => {
      fetchPokemon(pokemonName)
    }, [])

  return (
    <main>
        {
            loading ? (
                <Loader />
            ) : (
                <>
                    <div className="PokemonDetailsContainer">
                        <div className="PokemonDetailsCard">
                            <Link to={`/pokemon`}>
                                <button>
                                    X
                                </button>
                            </Link>
                            <div>
                                <img align="center"
                                src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
                                alt={pokemon.name} />
                            </div>
                            <div className='PokemonDetailsText'>
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