import React, { FC, ComponentType } from 'react';
import { Route as ReactDOMRoute, RouteProps as ReactRouteProps } from 'react-router-dom';

import MainLayout from '../components/Layout/Main';
import AuthLayout from './../components/Layout/Auth/index';

interface ReactProps extends ReactRouteProps {
    isPrivate?: boolean;
    component: ComponentType;
}

const Route: FC<ReactProps> = ({ isPrivate = false, component: Component, ...rest }) => {
    const Layout = (isPrivate) ? AuthLayout : MainLayout;

    return (
        <ReactDOMRoute { ...rest } render={ () => (
            <Layout>
                <Component />
            </Layout>
        )}/>
    );
};

export default Route;