import React, { Component } from 'react';
import AppLayout from './components/AppLayout/AppLayout';
import Home from './containers/Home/Home';
import { Route, Switch } from 'react-router-dom';
import Watch from './containers/Watch/Watch';

export default class App extends Component {
    render() {
        return (
            <AppLayout>
                <Switch>
                    <Route path="/watch" component={Watch} />
                    <Route path="/" component={Home} />
                </Switch>
            </AppLayout>
        );
    }
}
