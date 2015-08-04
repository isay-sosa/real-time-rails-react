/** @jsx React.DOM */

var React = require('react');

var ArticleItem = React.createClass({
    getDefaultProps: function () {
        return {
            content: '',
            user: ''
        };
    },

    render: function () {
        return (
            <article className="article">
                <p className="article-content">{this.props.content}</p>
                <small className="article-user">{this.props.user}</small>
            </article>
        );
    }
});

module.exports = ArticleItem;
