import React from 'react';
import { shallow } from 'enzyme';
import VideoPreview from '../VideoPreview';

describe('Video Preview', () => {
    test('renders', () => {
        const wrapper = shallow(
            <VideoPreview />
        );

        expect(wrapper).toMatchSnapshot();
    });
    test('renders horizontally', () => {
        const wrapper = shallow(
            <VideoPreview horizontal={true} />
        );
        expect(wrapper).toMatchSnapshot();
    });
});