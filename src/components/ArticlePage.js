import React from 'react';
import ArticleList from './ArticleList';
import articles from '../tests/fixtures/articles';

const ArticlePage = () => {
    return (
        <div className="article-page">
            <h1>ArticlePage Component</h1>
            <ArticleList articles={ articles } />
        </div>
    );
};

export default ArticlePage;
