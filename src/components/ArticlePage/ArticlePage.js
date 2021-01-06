import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleList from '../ArticleList/ArticleList';
import { useTrustedSources } from '../contexts/TrustedSourceContext';
import './ArticlePage.scss';

const ArticlePage = () => {
    const [terms, setTerms] = useState('');
    const [articles, setArticles] = useState();
    const [keywords, setKeywords] = useState([]);
    const [trustedSources] = useTrustedSources();

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
            const sources = trustedSources.length > 0 ? trustedSources.toString() : null;
            return await axios.get('http://localhost:8000/articles/', {
                params: {
                    keywords,
                    sources
                }
            });
        };
        search().then((response) => {
            if (response) {
                setArticles(response.data.results);
            }
        }).catch((err) => {
            console.log(err);
        });
    }, [keywords, trustedSources]);


    return (
        <div className="article-page">
            <div className="form">
                <div className="field">
                    <input
                        data-testid="search"
                        id="search"
                        onChange={e => setTerms(e.target.value)}
                        placeholder="Search..."
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
