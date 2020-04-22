import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as videoActions from '../../store/actions/video';
import './Home.scss';
import SideBar from '../SideBar/SideBar';
import HomeContent from './HomeContent/HomeContent';
import { getYoutubeLibraryLoaded } from '../../store/reducers/api';
import { bindActionCreators } from 'redux';

class Home extends Component {
    render() {
        return (
            <>
                <SideBar />
                <HomeContent />
            </>
        );
    }

    componentDidMount() {
        if (this.props.youtubeLibraryLoaded) {
            this.props.fetchMostPopularVideos();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
            this.props.fetchMostPopularVideos();
        }
    }
};

function mapStateToProps(state) {
    return {
        youtubeLibraryLoaded: getYoutubeLibraryLoaded(state)
    };
}

function mapDispatchToProps(dispatch) {
    const fetchMostPopularVideos = videoActions.mostPopular.request;
    return bindActionCreators({ fetchMostPopularVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
