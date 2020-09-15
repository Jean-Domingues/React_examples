import React from 'react';
import { store, increment, decrement } from './store/config'
import {  useDispatch } from 'react-redux';
import './global.css'

function App() {
  const counter = store.getState();
  const dispatch = useDispatch();


  return (
    <div>
      <h1>Contando = {counter}</h1>
      <button type="button" onClick={() => dispatch(increment())}> + </button>
      <button type="button" onClick={()=> store.dispatch(decrement())}> - </button>
    </div>
  );
}

export default App;
