/** @jsx React.DOM */

var React = require('react');
var WebApiUtils = require('../utils/WebApiUtils');
var ArticleForm = require('./ArticleForm');
var ArticleList = require('./ArticleList');

var Article = React.createClass({
    getInitialState: function () {
        return {
            articles: []
        };
    },

    componentDidMount: function () {
        WebApiUtils.get('/articles', this.onSuccessArticlesFetch, this.onFailedArticleFetch);
    },

    onSuccessArticlesFetch: function (data) {
        this.setState({articles: data});
    },

    onFailedArticleFetch: function (response, error) {
    },

    addArticle: function (article) {
        var articles = this.state.articles;
        articles.push(article);
        this.setState({articles: articles});
    },

    render: function () {
        return (
            <div className="articles-container">
                <ArticleForm onAddArticle={this.addArticle}/>
                <br/>
                <ArticleList articles={this.state.articles}/>
            </div>
        );
    }
});

module.exports = Article;
