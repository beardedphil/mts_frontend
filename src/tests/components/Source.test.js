import React from 'react';
import { shallow } from 'enzyme';
import Source from '../../components/Source/Source';
import sources from '../fixtures/sources';
import { TrustedSourceProvider } from '../../components/contexts/TrustedSourceContext';

test('should render Source correctly', () => {
    const wrapper = shallow(
        <TrustedSourceProvider>
            <Source source={ sources[1] } />
        </TrustedSourceProvider>
    );
    expect(wrapper).toMatchSnapshot();
});
