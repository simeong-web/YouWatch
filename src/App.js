import React, { Component } from 'react';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import SideBar from './containers/SideBar/SideBar';
import Home from './containers/Home/Home';

export default class App extends Component {
    render() {
        return (
            <>
                <HeaderNav />
                <SideBar />
                <Home />
            </>
        );
    }
};
