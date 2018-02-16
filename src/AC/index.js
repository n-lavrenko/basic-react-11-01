import { ADD_COMMENT, DELETE_ARTICLE, FILTER_DATE, FILTER_TITLE, INCREMENT } from '../constants'


export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function filterDate(selectedDates) {
  return {
    type: FILTER_DATE,
    payload: { selectedDates }
  }
}

export function filterTitle(selectedArticles) {
  return {
    type: FILTER_TITLE,
    payload: { selectedArticles }
  }
}

export function addComment(articleId, user, text) {
  return {
    type: ADD_COMMENT,
    payload: {
      articleId,
      user,
      text
    }
  }
}