import React from 'react';
import { shallow } from 'enzyme';
import ArticlePage from '../../components/ArticlePage';

test('should render ArticlePage correctly', () => {
    const wrapper = shallow(<ArticlePage />);
    expect(wrapper).toMatchSnapshot();
});
