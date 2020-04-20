import React from 'react';
import './RelatedVideos.scss';
import UpNextVideo from '../RelatedVideos/UpNextVideo/UpNextVideo';
import VideoPreview from '../VideoPreview/VideoPreview';

export default function RelatedVideos(props) {
    return (
        <div className="related-videos">
            <UpNextVideo />
            <VideoPreview horizontal={true} />
            <VideoPreview horizontal={true} />
            <VideoPreview horizontal={true} />
        </div>
    );
}
