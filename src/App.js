import React, { Component } from 'react';
import AppLayout from './components/AppLayout/AppLayout';
import Home from './containers/Home/Home';

export default class App extends Component {
    render() {
        return (
            <>
                <AppLayout>
                    <Home />
                </AppLayout>
            </>
        );
    }
};
