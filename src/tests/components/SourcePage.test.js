import React from 'react';
import { shallow } from 'enzyme';
import SourcePage from '../../components/SourcePage';

test('should render SourcePage correctly', () => {
    const wrapper = shallow(<SourcePage />);
    expect(wrapper).toMatchSnapshot();
});
