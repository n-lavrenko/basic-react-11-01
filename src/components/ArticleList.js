import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './Article'
import Accordion from './common/Accordion'
import { filteredArticlesSelector } from '../selectors';


class ArticleList extends Accordion {
  render() {
    const { articles } = this.props;
    if (!Object.keys(articles).length) {
      return <h3>No Articles</h3>
    }
    const articleElements = Object.keys(articles).map(id => <li key={ id }>
      <Article article={ articles[id] }
               id={ id }
               isOpen={ id === this.state.openItemId }
               toggleOpen={ this.toggleOpenItemMemoized(id) }
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
  articles: {}
};

ArticleList.propTypes = {
  articles: PropTypes.object.isRequired
};

export default connect(state => ({
  articles: filteredArticlesSelector(state)
}))(ArticleList)