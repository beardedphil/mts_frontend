import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Article from '../Article/Article';
import './ArticleList.scss';

const ArticleList = ({ articles = [], hasMore, next }) => {
    return (
        <InfiniteScroll
            className="article-list"
            dataLength={ articles.length }
            data-testid="article-list"
            hasMore={ hasMore }
            loader={ <h4>Loading...</h4> }
            next={ next }
        >
            {
                articles.map((article) => {
                    return (
                        <Article article={article} key={article.id}/>
                    );
                })
            }
        </InfiniteScroll>
    );
};

export default ArticleList;
