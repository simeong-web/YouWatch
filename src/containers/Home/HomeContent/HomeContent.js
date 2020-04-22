import React, { Component } from 'react';
import './HomeContent.scss';
import VideoGrid from '../../../components/VideoGrid/VideoGrid';

export default class HomeContent extends Component {
    render() {
        return (
            <div className="home-content">
                <div className="responsive-video-grid-container">
                    <VideoGrid title="Trending" />
                    <VideoGrid title="Autos & Vehicles" hideDivider={true} />
                </div>
            </div>
        );
    }
}
