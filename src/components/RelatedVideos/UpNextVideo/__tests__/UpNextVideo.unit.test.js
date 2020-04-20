import React from 'react';
import { shallow } from 'enzyme';
import UpNextVideo from '../UpNextVideo';

describe('UpNextVideo', () => {
    test('renders', () => {
        const wrapper = shallow(
            <UpNextVideo />
        );
        expect(wrapper).toMatchSnapshot();
    });
});