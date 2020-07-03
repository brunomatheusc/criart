import React, { FC } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import Dashboard from './../pages/Dashboard/index';

const Routes: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Dashboard } />
                <Route path="/signin" component={ SignIn } />
            </Switch>        
        </BrowserRouter>
    );
}

export default Routes;