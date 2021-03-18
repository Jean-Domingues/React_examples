import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { counterReducer } from './reducer'

import mySaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  counterReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

export default store;