import React from 'react';
import { mount } from 'enzyme';
import SourcePage from '../../components/SourcePage';
import axios from 'axios';
import { TrustedSourceProvider } from '../../components/contexts/TrustedSourceContext';

test('should call api', () => {
    axios.get = jest.fn();
    mount(
        <TrustedSourceProvider>
            <SourcePage />
        </TrustedSourceProvider>
    );
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8000/sources/');
});
