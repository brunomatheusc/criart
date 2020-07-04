import React, { FC } from 'react';

import Header from '../../components/Header';

import { Container } from './styles';
import Sidebar from './../../components/Sidebar/index';
import AddProducts from './../Products/Add/index';

const Dashboard: FC = () => {
    return (
        <>
            <Header />
            
            <Container>
                <Sidebar />

                <AddProducts />    
            </Container>   
        </>
    );
};

export default Dashboard;