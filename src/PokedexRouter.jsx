import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home, PageNotFound, PokemonDetails, SearchPokemon} from './pages';
import { Navegation } from "./components/Navigation";
import { FavouritesPokemons } from "./pages/FavouritesPokemons";

export const PokedexRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navegation />}>
                <Route index element={<Home/>} />
                <Route path="pokemon" element={<Home/>} />
                <Route path="pokemon/:pokemonName" element={<PokemonDetails />} />
                <Route path="search" element={<SearchPokemon />} />
                <Route path="favourite" element={<FavouritesPokemons />} />
            </Route>

            <Route path='*' element={<Navigate to ="/" replace />} />
            {/* <Route path='*' element={<PageNotFound />} /> */}
        </Routes>
    );
};