import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleList from './ArticleList/ArticleList';

const ArticlePage = () => {
    const [terms, setTerms] = useState('');
    const [articles, setArticles] = useState();
    const [keywords, setKeywords] = useState([])

    useEffect(() => {
        const timerId = setTimeout(() => {
            setKeywords(terms);
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, [terms]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('http://localhost:8000/articles/', {
                params: {
                    keywords
                }
            });

            setArticles(data.results);
        };
        search().then();
    }, [keywords]);


    return (
        <div className="article-page">
            <h1>ArticlePage Component</h1>
            <div className="form">
                <div className="field">
                    <label htmlFor="search">Search</label>
                    <input
                        id="search"
                        onChange={e => setTerms(e.target.value)}
                        type="text"
                        value={terms}
                    />
                </div>
            </div>

            <ArticleList articles={ articles } />
        </div>
    );
};

export default ArticlePage;
