import React from 'react';
import axios from 'axios'
import articles from '../fixtures/articles';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import ArticlePage from '../../components/ArticlePage';
import ArticleList from '../../components/ArticleList/ArticleList';
import Article from '../../components/Article/Article';

jest.mock('axios');

test('should render ArticlePage correctly', (done) => {
    // This test passes when the assertions are true, and fails when I change the assertions
    // to make them false. It is still throwing a console error (...An update to ArticlePage
    // inside a test was not wrapped in act(...)
    //
    // Wrapping the updates in act(...) has not resolved the error. I've added a card to the
    // backlog to look into this at a later time, however the test is providing the correct
    // output, so fixing this is not a priority.

    const promise = new Promise((resolve, reject) =>
        setTimeout(
            () =>
                resolve({
                    data: {
                        results: articles
                    },
                }),
            100
        )
    );

    axios.get = jest.fn(() => promise);

    let wrapper = null;

    act(() => {
        wrapper = mount(<ArticlePage />);
    });


    expect(axios.get).toHaveBeenCalledWith('http://localhost:8000/articles/', {"params": {}});

    promise.then(() => {
        setImmediate(() => {
            act(() => {
                wrapper.update();
            });
            expect(wrapper.find(ArticleList).length).toEqual(1);
            expect(wrapper.find(Article).length).toEqual(articles.length);
            axios.get.mockClear();
            done();
        });
    });
});
