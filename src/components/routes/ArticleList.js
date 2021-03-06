import React, { Component } from 'react'
import ArticleList from '../ArticleList'
import Article from '../Article'
import {Route} from 'react-router-dom'

class ArticleListPage extends Component {
    static propTypes = {

    };

    render() {
        console.log('---', 2)
        return (
            <div>
                <h2>Article list:</h2>
                <ArticleList/>
                <Route path = {`${this.props.match.path}/:id`} children = {this.getArticle} />
            </div>
        )
    }

    getArticle = ({ match }) => {
        if (!match) return <h2>Please select an article</h2>
        console.log('---', 3)
        return <Article id = {match.params.id} isOpen key = {match.params.id} />
    }
}

export default ArticleListPage