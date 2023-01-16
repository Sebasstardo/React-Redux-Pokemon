import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

//ESTO ES UNA FUNCION asincrona QUE REGRESA UNA TAREA(reducers)
export const getPokemones = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());
    // TODO: realizar peticion HTTP
    // const resp = fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // const data = await (await resp).json();
    const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
    const {data} = resp;
    dispatch(setPokemons({pokemons:data.results, page:page +1}));
  };
};
