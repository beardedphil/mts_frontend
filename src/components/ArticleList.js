import React from 'react';
import Article from './Article';

const ArticleList = ({ articles }) => {
    return (
        <div className="article-list">
            {
                articles.length === 0 ? (
                    <p>No articles found.</p>
                ) : (
                    articles.map((article) => {
                        return (
                            <Article article={article} />
                        );
                    })
                )
            }
        </div>
    );
};

export default ArticleList;
