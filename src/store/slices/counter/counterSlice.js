import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    contador:20
  },
  reducers: {
    increment: (state) => {
      state.contador += 1;
    },
    decrement: (state) => {
      state.contador -= 1
    },
    incrementByAmount: (state, action) => {

      //el payload puede ser lo que necesites
      //objetos, booleanos, string etc..
      state.contador += action.payload
    },
  },
})

//sirve para disparar la accion que se desea utilizar
export const { increment, decrement, incrementByAmount } = counterSlice.actions

