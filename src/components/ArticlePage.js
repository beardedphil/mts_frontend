import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleList from './ArticleList/ArticleList';

const ArticlePage = () => {
    const [articles, setArticles] = useState();

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('http://localhost:8000/articles/', {
                params: {

                }
            });

            setArticles(data.results);
        };
        search().then();
    }, []);


    return (
        <div className="article-page">
            <h1>ArticlePage Component</h1>
            <ArticleList articles={ articles } />
        </div>
    );
};

export default ArticlePage;
