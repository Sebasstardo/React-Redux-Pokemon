import { createSlice } from '@reduxjs/toolkit'


//thunks acciona una tarea , con una accion asincrona
export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState:{
    page:0,
    pokemons: [],
    isLoading:false,
  },
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true
    },
    setPokemons:(state, action)=>{
        state.isLoading = false;
        state.page = action.payload.page;
        state.pokemons = action.payload.pokemons;        
    }
  },
})

//sirve para disparar la accion que se desea utilizar
export const { startLoadingPokemons, setPokemons  } = pokemonSlice.actions
