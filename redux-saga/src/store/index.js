import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { counterReducer } from './reducer'

import mySaga from './sagas/index'

// Cria o middleware para interceptar ações do nosso app
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  counterReducer,
  applyMiddleware(sagaMiddleware) // aplica o middleware na nossa loja
)

sagaMiddleware.run(mySaga) // Roda o middleware passando como parâmetro o nosso saga

export default store;