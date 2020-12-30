import React from 'react';
import { shallow } from 'enzyme';
import ArticleList from '../../components/ArticleList';
import articles from '../fixtures/articles';

test('should render ArticleList correctly with no articles', () => {
    const wrapper = shallow(<ArticleList articles={[]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ArticleList correctly with articles', () => {
    const wrapper = shallow(<ArticleList articles={ articles } />);
    expect(wrapper).toMatchSnapshot();
});
