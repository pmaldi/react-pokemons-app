import React, { FunctionComponent, useState, useEffect } from "react";
import Pokemon from "../models/pokemon";
import { useHistory } from "react-router-dom";
import PokemonCard from "../components/pokemon-card";
import PokemonService from "../services/pokemon-service";
import PokemonSearch from "../components/pokemon-search";

const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const history = useHistory();
  useEffect(() => {
    PokemonService.getPokemons().then(pokemons => setPokemons(pokemons));
  }, []);

  const addPokemon = () => {
    history.push("/pokemons/add");
  }

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <span className="btn-floating halfway-fab waves-effect waves-light"><i className="material-icons" onClick={addPokemon}>add</i></span>
        <div className="row">
          <PokemonSearch />
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
