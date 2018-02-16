import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '../reducer'


const middleware = applyMiddleware();

const store = createStore(
  rootReducer,
  compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
);

//dev only, no need in prod
window.store = store;

export default store