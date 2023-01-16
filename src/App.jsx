import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { increment, decrement, incrementByAmount } from './store/slices/counter/counterSlice'

function App() {
  
  //seleccionar algo del store
  const {contador} = useSelector(state => state.counter)
  
  //sirve para llamar y dispara las acciones de los reducer
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> count is {contador}</h1>
      <div className="card">
        <button onClick={()=>dispatch(increment())}>
         Increment
        </button>
        <button onClick={()=>dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={()=>dispatch(incrementByAmount())}>
          Increment by 2
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
