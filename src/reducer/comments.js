import { normalizedComments as defaultComments } from '../fixtures'
import { ADD_COMMENT } from '../constants';


const commentsMap = defaultComments.reduce((acc, comment) => {
  acc[comment.id] = comment
  return acc
}, {})

export default (commentsState = commentsMap, action) => {
  const { type, payload } = action
  
  switch (type) {
    case ADD_COMMENT:
      const { id, user, text } = payload
    
      return {
        ...commentsState,
        [id]: {
          id,
          user,
          text
        }
      }
    default:
      return commentsState
  }
}