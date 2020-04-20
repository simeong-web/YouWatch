import React, { Component } from 'react';
import './Watch.scss';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import Video from '../../components/Video/Video';

export default class Watch extends Component {
    render() {
        return (
            <div className="watch-grid">
                <Video className="video" id='-7fuHEEmEjs' />
                <div className="metadata" style={{ width: '100%', height: '100%', background: '#F91112' }}>Metadata</div>
                <div className="video-info-box" style={{ width: '100%', height: '100px', background: '#BD10E0' }}>Video Info Box</div>
                <div className="comments" style={{ width: '100%', height: '100px', background: '#9013FE' }}>Comments</div>
                <RelatedVideos className="related-videos" />
            </div>
        );
    }
}
