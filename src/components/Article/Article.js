import React from 'react';
import './Article.scss';

const Article = ({ article }) => {
    return (
        <div className="article">
            <a href={ article.article_link } target="_blank" rel="noreferrer">
                <div className="article-background">
                    <img className="source" src={`./images/${ article.source }.png`} alt={ article.source }/>
                    <img className="image" src={ article.image_link } alt={ article.title } />
                    <div className="title-background">
                        <p className="title">{ article.title }</p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Article;
