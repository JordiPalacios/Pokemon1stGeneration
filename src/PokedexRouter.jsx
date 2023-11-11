import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, PageNotFound, PokemonDetails, SearchPokemon} from './pages';
import { Navegation } from "./components/Pavigation";

export const PokedexRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navegation />}>
                <Route index element={<Home/>} />
                <Route path="pokemon/:pokemonName" element={<PokemonDetails />} />
                <Route path="search" element={<SearchPokemon />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};