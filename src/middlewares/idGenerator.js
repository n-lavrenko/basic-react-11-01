import { ADD_COMMENT } from '../constants'


export default store => next => action => {
  switch (action.type) {
    case ADD_COMMENT:
      action = { ...action,
        payload: {
          ...action.payload,
          id: `***${action.payload.user} --- ID ---${action.payload.text}***`
        }
      }
  }
  next(action)
}