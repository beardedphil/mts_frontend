import React from 'react';
import { shallow } from 'enzyme';
import Source from '../../components/Source';
import sources from '../fixtures/sources';

test('should render Source correctly', () => {
    const wrapper = shallow(<Source source={ sources[1] } />);
    expect(wrapper).toMatchSnapshot();
});
