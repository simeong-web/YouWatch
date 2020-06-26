import React, { Component } from 'react';
import './Watch.scss';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import Video from '../../components/Video/Video';
import VideoMetadata from '../../components/VideoMetadata/VideoMetadata';
import VideoInfoBox from '../../components/VideoInfoBox/VideoInfoBox';
import Comments from '../Comments/Comments';

export default class Watch extends Component {
    getVideoId() {
        const searchParams = new URLSearchParams(this.props.location.search);
        return searchParams.get('v');
    }
    
    render() {
        return (
            <div className="watch-grid">
                <Video className="video" id='-7fuHEEmEjs' />
                <VideoMetadata className="metadata" viewCount={1000} />
                <VideoInfoBox className="video-info-box" />
                <Comments className="comments" />
                <RelatedVideos className="related-videos" />
            </div>
        );
    }
}
