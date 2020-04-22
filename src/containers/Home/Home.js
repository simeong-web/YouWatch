import React, { Component } from 'react';
import './Home.scss';
import SideBar from '../SideBar/SideBar';
import HomeContent from './HomeContent/HomeContent';

export default class Home extends Component {
    render() {
        return (
            <>
                <SideBar />
                <HomeContent />
            </>
        );
    }
};
