import React from 'react';
import Article from '../Article/Article';
import './ArticleList.scss';

const ArticleList = ({ articles = [] }) => {
    return (
        <div className="article-list" data-testid="article-list">
            {
                articles.length === 0 ? (
                    <p>No articles found.</p>
                ) : (
                    articles.map((article) => {
                        return (
                            <Article article={article} key={article.id}/>
                        );
                    })
                )
            }
        </div>
    );
};

export default ArticleList;
