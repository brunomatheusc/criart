import React, { FC } from 'react';

import { MdAccountCircle, MdNotifications, MdExpandMore } from 'react-icons/md';

import { Container, Title, UserInfo } from './styles';

const Header: FC = () => {
    return (
        <>
            <Container>
                <Title>Produtos</Title>

                <UserInfo>
                    <MdNotifications size={ 24 } color="#a1a1a1" />
                    <MdAccountCircle size={ 24 } color="#a1a1a1" />

                    <h1>John Doe</h1>
                    <MdExpandMore />
                </UserInfo>
            </Container>
        </>
    );
};

export default Header;