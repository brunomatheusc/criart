import React, { FC } from 'react';

import Header from '../../components/Header';

import { Container } from './styles';
import Sidebar from './../../components/Sidebar/index';

const Dashboard: FC = () => {
    return (
        <>
            <Container>
                <Header />
                <Sidebar />    
            </Container>   
        </>
    );
};

export default Dashboard;