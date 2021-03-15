// Estado inicial da nossa loja
const initialState = {
  counter: 0,
}

// Cria o reducer
export const counterReducer = (state = initialState, action ) => {
  switch (action.type) { 
    // verifica o type de cada action e dispara um novo valor para o state
    case 'counter/incremented':
      return { ...state, counter: state.counter + 1 }
    case 'counter/decremented':
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}
