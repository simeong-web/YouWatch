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
            this.fetchCategoriesAndMostPopularVideos();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
            this.fetchCategoriesAndMostPopularVideos();
        }
    }

    fetchCategoriesAndMostPopularVideos() {
        this.props.fetchMostPopularVideos();
        this.props.fetchVideoCategories();
    }
};

function mapStateToProps(state) {
    return {
        youtubeLibraryLoaded: getYoutubeLibraryLoaded(state)
    };
}

function mapDispatchToProps(dispatch) {
    const fetchMostPopularVideos = videoActions.mostPopular.request;
    const fetchVideoCategories = videoActions.categories.request;
    return bindActionCreators({ fetchMostPopularVideos, fetchVideoCategories }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
