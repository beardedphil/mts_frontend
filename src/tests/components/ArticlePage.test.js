import React from 'react';
import axios from 'axios'
import articles from '../fixtures/articles';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { render, fireEvent } from '@testing-library/react';
import ArticlePage from '../../components/ArticlePage/ArticlePage';
import ArticleList from '../../components/ArticleList/ArticleList';
import Article from '../../components/Article/Article';
import { TrustedSourceProvider } from '../../components/contexts/TrustedSourceContext';

jest.mock('axios');

describe('should call API', () => {
    let input;

    beforeAll(() => {
        axios.get = jest.fn();

        const { getByTestId } = render(
            <TrustedSourceProvider>
                <ArticlePage/>
            </TrustedSourceProvider>
        );
        input = getByTestId('search');
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
