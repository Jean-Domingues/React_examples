// Estado inicial da nossa loja
const initialState = {
  counter: 0,
}

/**
 * Reducer é uma função responsável por gerir o state da nossa loja
 * ele recebe um initialState como parâmetro, e também a action que vai ser
 * responsável por fazer a alteração no state
 */
export const counterReducer = (state = initialState, action ) => {
  switch (action.type) { 
    // verifica o type de cada action e dispara um novo valor para o state
    case 'counter/incremented':
      return { ...state, counter: state.counter + 1 }
    case 'counter/decremented':
      return { ...state, counter: state.counter - 1 }
    case 'counter/async_increment':
      return { ...state, counter: action.value }
    default:
      return state
  }
}
