import React from 'react'

import { connect } from 'react-redux'
import { DECREMENT, INCREMENT } from '../store/actions'

function Counter ({ counter, increment, decrement}){
  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(INCREMENT),
    decrement: () => dispatch(DECREMENT)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)