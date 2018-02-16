import { DELETE_ARTICLE } from '../constants'
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
  }
  
  return articlesState
}