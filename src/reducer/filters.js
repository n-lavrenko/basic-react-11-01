import { DELETE_ARTICLE, FILTER_DATE, FILTER_TITLE } from '../constants'


const initialtState = {
  selectedArticles: [],
  selectedDates: {
    from: null,
    to: null
  }
};

export default (state = initialtState, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case FILTER_DATE:
      const {selectedDates} = payload;
      return {
        ...state,
        selectedDates
      };
    case FILTER_TITLE:
      const {selectedArticles} = payload;
      return {
        ...state,
        selectedArticles
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        selectedArticles: state.selectedArticles.filter(id => id !== payload.id)
      };
    default:
      return state
      
  }
  
}