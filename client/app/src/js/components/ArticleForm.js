/** @jsx React.DOM */

var React = require('react');
var WebApiUtils = require('../utils/WebApiUtils');

var ArticleForm = React.createClass({
    onSubmit: function (ev) {
        ev.preventDefault();

        var bodyParams = {
            article: {
                content: this.refs.articleContent.getDOMNode().value,
                user: this.refs.articleUser.getDOMNode().value
            }
        };

        WebApiUtils.post('/articles', bodyParams, this.onSuccessArticleCreated, this.onFailedArticleCreated);
    },

    onSuccessArticleCreated: function (data) {
        this.props.onAddArticle(data);
        this.refs.articleContent.getDOMNode().value = '';
        this.refs.articleUser.getDOMNode().value = '';
    },

    onFailedArticleCreated: function (response, error) {
    },

    render: function () {
        return (
            <form action="http://localhost:4000/api/v1/articles" method="post" className="article-form"
                  onSubmit={this.onSubmit}>
                <input type="text" placeholder="User Name" ref="articleUser"/>
                <textarea cols="30" rows="10" placeholder="Article Content" ref="articleContent"></textarea>
                <button type="submit">Create Article</button>
            </form>
        );
    }
});

module.exports = ArticleForm;
