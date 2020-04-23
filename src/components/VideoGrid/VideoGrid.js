import React from 'react';
import './VideoGrid.scss';
import { Divider } from 'semantic-ui-react';
import VideoPreview from '../VideoPreview/VideoPreview';
import VideoGridHeader from './VideoGridHeader/VideoGridHeader';

export default function VideoGrid(props) {
    if (!props.videos || !props.videos.length) {
        return <div />;
    }

    const gridItems = props.videos.map(video => {
        return (<VideoPreview video={video} key={video.id} />);
    });


    const divider = props.hideDivider ? null : <Divider />;
    return (
        <>
            <VideoGridHeader title={props.title} />
            <div className="video-grid">
                {gridItems}
            </div>
            {divider}
        </>
    );
}

