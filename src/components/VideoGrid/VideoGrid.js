import React from 'react';
import './VideoGrid.scss';
import { Divider } from 'semantic-ui-react';
import VideoPreview from '../VideoPreview/VideoPreview';

export default function VideoGrid(props) {
    const divider = props.hideDivider ? null : <Divider />;

    return (
        <>
            <h4>{props.title}</h4>
            <div className="video-grid">
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
            </div>
            {divider}
        </>
    );
}

