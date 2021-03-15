import React from 'react'
import styles from '../styles/components/Counter.module.css'

import { connect } from 'react-redux'
import { DECREMENT, INCREMENT } from '../store/actions'

function Counter ({ counter, increment, decrement}){
  return (
    <div>
      <h1>Contador: {counter}</h1>
      <div className={styles.boxButton}>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      </div>
    </div>
  )
}

// Função responsável por receber o state e repassar para o componente
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}

// Função responsável de receber o dispatch e retornar as ações para o componente
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(INCREMENT),
    decrement: () => dispatch(DECREMENT)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)