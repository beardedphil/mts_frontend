import React from 'react';
import { shallow } from 'enzyme';
import SourceList from '../../components/SourceList/SourceList';
import sources from '../fixtures/sources';

test('should render SourceList correctly with no sources', () => {
    const wrapper = shallow(<SourceList sources={[]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render SourceList correctly with sources', () => {
    const wrapper = shallow(<SourceList sources={ sources } />);
    expect(wrapper).toMatchSnapshot();
});
