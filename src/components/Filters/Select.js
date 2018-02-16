import React, { Component } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { connect } from 'react-redux';
import { filterTitle } from '../../AC';


class SelectFilter extends Component {
  
  // handleChange = selected => this.setState({ selected })
  
  render() {
    const { articles, selectedArticles, filterTitle } = this.props;
    const options = Object.keys(articles).map(id => ({
      label: articles[id].title,
      value: articles[id].id
    }));
    
    return <Select
      options={ options }
      value={ selectedArticles }
      onChange={ (selected) => filterTitle(selected.map(option => option.value)) }
      multi
    />
  }
}

export default connect(state => ({
  articles: state.articles,
  selectedArticles: state.filter.selectedArticles
}), { filterTitle })
(SelectFilter)