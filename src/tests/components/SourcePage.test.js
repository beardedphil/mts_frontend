import React from 'react';
import { mount } from 'enzyme';
import SourcePage from '../../components/SourcePage';
import axios from 'axios';

test('should call api', () => {
    axios.get = jest.fn();
    mount(<SourcePage />);
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8000/sources/');
});
