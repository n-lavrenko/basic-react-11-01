import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '../reducer'
import logger from '../middlewares/logger';


const enhancer = applyMiddleware(logger);

const store = createStore(rootReducer, {},
  compose(enhancer, window.devToolsExtension ? window.devToolsExtension() : f => f)
);

//dev only, no need in prod
window.store = store;

export default store