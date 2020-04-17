import React, { Component } from 'react';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import SideBar from './containers/SideBar/SideBar';

export default class App extends Component {
    render() {
        return (
            <>
                <HeaderNav />
                <SideBar />
            </>
        );
    }
};
