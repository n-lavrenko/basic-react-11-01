import { createSelector } from 'reselect';


const articlesGetter = state => state.articles;
const filtersGetter = state => state.filter;
const commentsGetter = state => state.comments;
const idGetter = (state, props) => props.id;

export const filteredArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filter) => {
  const { selectedArticles, selectedDates: { from, to } } = filter;
  
  let filteredArr = Object.keys(articles).filter(id => {
    const published = Date.parse(articles[id].date);
    return (!selectedArticles.length || selectedArticles.includes(id)) &&
      (!from || !to || (published > from && published < to))
  });
  
  return filteredArr.reduce((obj, key) => {
    obj[key] = obj;
    return obj
  }, {})
});

export const articlesSelectorFactory = () => createSelector(articlesGetter, idGetter, (articles, id) => {
  return articles[id]
});

export const commentsSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
  return comments[id]
});