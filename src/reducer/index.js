import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filter from './filters'
import comments from './comments'


export default combineReducers({
  counter: counterReducer,
  articles,
  filter,
  comments
})