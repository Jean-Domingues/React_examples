import { createStore } from 'redux'
import { counterReducer } from './reducer'

// Cria a nossa loja passando como parâmetro o nosso reducer
const store = createStore(counterReducer)

export default store;