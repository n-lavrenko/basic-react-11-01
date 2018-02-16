import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'
import { normalizedArticles as defaultArticles } from '../fixtures'


const articlesMap = defaultArticles.reduce((acc, article) => {
  acc[article.id] = article
  return acc
}, {})

export default (articlesState = articlesMap, action) => {
  const { type, payload } = action
  
  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter(article => article.id !== payload.id)
  
    case ADD_COMMENT:
      const { articleId, id } = action.payload
      return {
        ...articlesState,
        [articleId]: {
          ...articlesState[articleId],
          comments: [...articlesState[articleId].comments, id]
        }
      }
    default:
      return articlesState
  }
  
}