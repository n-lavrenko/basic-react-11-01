import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducer'
import logger from 'redux-logger'


const middleware = applyMiddleware(logger);

const store = createStore(
  rootReducer,
  compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
)

//dev only, no need in prod
window.store = store

export default store