import React from 'react';

import { connect } from 'react-redux'

function App({ counter, increment, decrement }) {
  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'counter/incremented' }),
    decrement: () => dispatch({ type: 'counter/decremented'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
