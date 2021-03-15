import React from "react";
import Counter from "./components/Counter";
import "./styles/global.css";

import { connect } from 'react-redux'

function App({ counter }) { // O estado que é obtido no connect é recebido como props
  return (
    <>
    <header>
      <div>Contador.com</div>
      <span>{counter}</span>
    </header>
      <div className="container">
        <Counter />
      </div>
    </>
  );
}

// Faz a conexão com a nossa loja do redux, e atualiza o componente a cada novo valor para o state
export default connect(state => state)(App);
