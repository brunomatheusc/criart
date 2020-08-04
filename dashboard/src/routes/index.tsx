import React, { FC } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import ListProducts from '../pages/Products/List';
import AddProducts from '../pages/Products/Add';
import Route from './Route';
import ListOrders from '../pages/Orders/List';
import AddOrders from '../pages/Orders/Add';

const Routes: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ SignIn } isPrivate={ true } />
                <Route path="/dashboard" component={ Dashboard } />
                <Route path="/produtos" exact component={ ListProducts } />
                <Route path="/produtos/novo" component={ AddProducts } />
                <Route path="/pedidos" exact component={ ListOrders } />
                <Route path="/pedidos/novo" component={ AddOrders } />
                <Route path="/usuarios" exact component={ ListOrders } />
                <Route path="/compras" exact component={ ListOrders } />
                <Route path="/configuracoes" exact component={ ListOrders } />
            </Switch>        
        </BrowserRouter>
    );
}

export default Routes;