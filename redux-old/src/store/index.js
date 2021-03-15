import { createStore } from 'redux'
import { counterReducer } from './reducer'

// Cria a nossa loja passando como reducer o counterReducer
const store = createStore(counterReducer)

export default store;