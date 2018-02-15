import {FILTER_DATE, FILTER_TITLE} from '../constants'

let initialtState = {
  selectedArticles: [],
  selectedDates: {
    from: null,
    to: null
  }
}

export default (state = initialtState, action) => {
  const {type, payload} = action
  
  switch (type) {
    case FILTER_DATE:
      const {selectedDates} = payload;
      return {...state, selectedDates}
    case FILTER_TITLE:
      const {selectedArticles} = payload;
      return {...state, selectedArticles: [...selectedArticles]}
    default:
      return state
      
  }
  
}