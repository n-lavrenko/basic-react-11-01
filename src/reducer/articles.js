import { ADD_COMMENT, DELETE_ARTICLE, LOAD_ALL_ARTICLES } from '../constants'
import { arrToMap } from './utils'


export default (articles = {}, action) => {
  const { type, payload, response, randomId } = action
  
  switch (type) {
    case DELETE_ARTICLE:
      const articlesCopy = { ...articles }
      delete articlesCopy[payload.id]
      return articlesCopy
    
    case ADD_COMMENT:
      const article = articles[payload.articleId]
      return {
        ...articles,
        [payload.articleId]: {
          ...article,
          comments: (article.comments || []).concat(randomId)
        }
      }
    
    case LOAD_ALL_ARTICLES:
      return arrToMap(response)
    default:
      return articles
  }
  
}