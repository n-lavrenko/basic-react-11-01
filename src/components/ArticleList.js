import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './Article'
import Accordion from './common/Accordion'
import { filteredArticlesSelector } from '../selectors';


class ArticleList extends Accordion {
  render() {
    const { articles } = this.props;
    if (!articles.length) {
      return <h3>No Articles</h3>
    }
    const articleElements = articles.map((article) => <li key={ article.id }>
      <Article article={ article }
               isOpen={ article.id === this.state.openItemId }
               toggleOpen={ this.toggleOpenItemMemoized(article.id) }
      />
    </li>);
    return (
      <ul>
        { articleElements }
      </ul>
    )
  }
}

ArticleList.defaultProps = {
  articles: []
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};


export default connect(state => ({
  articles: filteredArticlesSelector(state)
}))(ArticleList)