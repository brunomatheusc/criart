import React, { FC } from 'react';

import { Container } from './styles';

const AuthLayout: FC = ({ children }) => {
    return (
        <>
            <Container>
                { children }
            </Container>    
        </>
    );
};

export default AuthLayout;