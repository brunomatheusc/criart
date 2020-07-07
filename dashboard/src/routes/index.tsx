import React, { FC } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import Dashboard from './../pages/Dashboard/index';
import ListProducts from './../pages/Products/List/index';
import AddProducts from './../pages/Products/Add/index';
import Route from './Route';

const Routes: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ SignIn } isPrivate={ true } />
                <Route path="/dashboard" component={ Dashboard } />
                <Route path="/products" component={ ListProducts } />
                <Route path="/products/add" component={ AddProducts } />
            </Switch>        
        </BrowserRouter>
    );
}

export default Routes;