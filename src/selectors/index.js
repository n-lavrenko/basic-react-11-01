import { createSelector } from 'reselect';


const articlesGetter = state => state.articles;
const filtersGetter = state => state.filter;
const commentsGetter = state => state.comments;
const idGetter = (state, props) => props.id;

export const filteredArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filter) => {
  const { selectedArticles, selectedDates: { from, to } } = filter;
  
  return articles.filter(article => {
    const published = Date.parse(article.date);
    return (!selectedArticles.length || selectedArticles.includes(article.id)) &&
      (!from || !to || (published > from && published < to))
  });
});

export const commentsSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
  return comments.find(comment => comment.id === id)
});