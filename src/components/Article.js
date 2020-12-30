import React from 'react';

const Article = ({ article }) => {
    return (
        <div className="article">
            <h3>{ article.title }</h3>
            <a href={ article.article_link }>{ article.article_link }</a>
            <img src={ article.image_link } alt={ article.title } />
            <p>{ article.source }</p>
        </div>
    );
};

export default Article;
