import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleList from '../ArticleList/ArticleList';
import { useTrustedSources } from '../contexts/TrustedSourceContext';
import './ArticlePage.scss';

const ArticlePage = () => {
    const [terms, setTerms] = useState('');
    const [articles, setArticles] = useState();
    const [articlesLink, setArticlesLink] = useState();
    const [keywords, setKeywords] = useState([]);
    const [trustedSources] = useTrustedSources();

    const getMoreArticles = async () => {
        const sources = trustedSources.length > 0 ? trustedSources.toString() : null;
        return await axios.get(articlesLink, {
            params: {
                keywords,
                sources
            }
        });
    };

    const scrollLoadArticles = () => {
        getMoreArticles().then((response) => {
            if (response) {
                setArticles([...articles, ...response.data.results]);
                setArticlesLink(response.data.next);
            }
        }).catch((err) => {
            console.log(err);
        });
    }

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
            return await axios.get('https://mytrustedsourceapi.herokuapp.com/articles/', {
                params: {
                    keywords,
                    sources
                }
            });
        };
        search().then((response) => {
            if (response) {
                setArticles(response.data.results);
                setArticlesLink(response.data.next);
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

            <ArticleList articles={ articles } next={ scrollLoadArticles } hasMore={ !!articlesLink } />
        </div>
    );
};

export default ArticlePage;
