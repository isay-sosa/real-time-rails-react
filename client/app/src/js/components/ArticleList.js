/** @jsx React.DOM */

var React = require('react');
var ArticleItem = require('./ArticleItem');

var ArticleList = React.createClass({
    getDefaultProps: function () {
        return {
            articles: []
        };
    },

    getArticleItems: function () {
        return this.props.articles.map(function (article) {
            return <ArticleItem key={article.id} content={article.content} user={article.user}/>;
        });
    },

    render: function () {
        return (
            <section className="article-list">
                { this.getArticleItems() }
            </section>
        );
    }
});

module.exports = ArticleList;
