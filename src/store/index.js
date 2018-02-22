import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '../reducer'
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import history from '../history'


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk, api, randomId, routerMiddleware(history), /*logger*/)
)
const store = createStore(rootReducer, enhancer)

//dev only, no need in prod
window.store = store

export default store