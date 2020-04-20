import React, { Component } from 'react';
import './Watch.scss';
import VideoPreview from '../../components/VideoPreview/VideoPreview';

export default class Watch extends Component {
    render() {
        return (
            <>
                <VideoPreview horizontal={true} />
                <VideoPreview />
            </>
        );
    }
}
