import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemones, setPokemons } from "./store/slices/pokemon";

export const PokemonApi = () => {
  const dispach = useDispatch();
  const {isLoading, pokemons =[], page} = useSelector(state => state.pokemons);

  useEffect(() => {
    dispach(getPokemones());       
  }, []);
  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <span>Loading : {!isLoading ? 'True': 'False'}</span>
      <ul>
        {
            pokemons.map(pokemon =>(
                <li key={pokemon.name}>{pokemon.name}</li>
            ))
        }
        
      </ul>
      <button
      disabled={isLoading}
      onClick={()=> dispach(getPokemones(page))}
      >
        Next
      </button>
    </>
  );
};
