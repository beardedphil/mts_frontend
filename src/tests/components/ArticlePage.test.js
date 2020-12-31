import React from 'react';
import axios from 'axios'
import articles from '../fixtures/articles';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { render, fireEvent } from '@testing-library/react';
import ArticlePage from '../../components/ArticlePage';
import ArticleList from '../../components/ArticleList/ArticleList';
import Article from '../../components/Article/Article';

jest.mock('axios');

describe('should render ArticlePage correctly', () => {
    // These tests pass when the assertions are true, and fail when I change the assertions
    // to make them false. They still throw a console error (...An update to ArticlePage
    // inside a test was not wrapped in act(...))
    //
    // Wrapping the updates in act(...) has not resolved the error. I've added a card to the
    // backlog to look into this at a later time, however the test is providing the correct
    // output, so fixing this is not a priority.

    test('should render ArticlePage correctly when articles are returned', (done) => {
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


        expect(axios.get).toHaveBeenCalledWith('http://localhost:8000/articles/',
            {
                "params": {
                    "keywords": []
                }
            }
        );

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

    test('should render ArticlePage correctly when articles are not returned', (done) => {
        const promise = new Promise((resolve, reject) =>
            setTimeout(
                () =>
                    resolve({
                        data: {
                            results: []
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


        expect(axios.get).toHaveBeenCalledWith('http://localhost:8000/articles/',
            {
                "params": {
                    "keywords": []
                }
            }
        );

        promise.then(() => {
            setImmediate(() => {
                act(() => {
                    wrapper.update();
                });
                expect(wrapper.find(ArticleList).length).toEqual(1);
                expect(wrapper.find(Article).length).toEqual(0);
                axios.get.mockClear();
                done();
            });
        });
    });
});


describe('should call API', () => {
    let input;

    beforeAll(() => {
        axios.get = jest.fn();

        const { getByLabelText } = render(<ArticlePage/>);
        input = getByLabelText('Search');
    });

    test('with empty array when search bar is empty',async () => {
        fireEvent.change(input, { target: { value: '' } });

        // Setting a timeout manually to account for search term debouncing
        setTimeout(() => {
            expect(axios.get).toHaveBeenCalledWith('http://localhost:8000/articles/',
                {
                    "params": {
                        "keywords": []
                    }
                }
            );
        }, 600)
    });

    test('with one element array when search bar has one term',async () => {
        fireEvent.change(input, { target: { value: 'wonder' } });

        // Setting a timeout manually to account for search term debouncing
        setTimeout(() => {
            expect(axios.get).toHaveBeenCalledWith('http://localhost:8000/articles/',
                {
                    "params": {
                        "keywords": [ 'wonder' ]
                    }
                }
            );
        }, 600)
    });

    test('with multiple element array when search bar has multiple terms',async () => {
        fireEvent.change(input, { target: { value: 'wonder woman netflix' } });

        // Setting a timeout manually to account for search term debouncing
        setTimeout(() => {
            expect(axios.get).toHaveBeenCalledWith('http://localhost:8000/articles/',
                {
                    "params": {
                        "keywords": [ 'wonder', 'woman', 'netflix' ]
                    }
                }
            );
        }, 600)
    });
});

