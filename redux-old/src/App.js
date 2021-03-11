import React from 'react';

import { connect } from 'react-redux'

function App({ counter, increment }) {
  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={increment}>+</button>
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
    increment: () => dispatch({ type: 'counter/incremented' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
