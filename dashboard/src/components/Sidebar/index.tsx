import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { MdBusiness, MdInsertDriveFile } from 'react-icons/md';

import { Container, List, ListItem } from './styles';

const Sidebar: FC = () => {
    return (
        <>
            <Container>
                <List>
                    <ListItem>
                        <Link to="/products">
                            <MdBusiness />
                            <span>Produtos</span>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link to="/orders">
                            <MdInsertDriveFile />
                            <span>Pedidos</span>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link to="/">
                            <MdInsertDriveFile />
                            <span>Relatórios</span>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link to="/config">
                            <MdInsertDriveFile />
                            <span>Configurações</span>
                        </Link>
                    </ListItem>
                </List>
            </Container>    
        </>
    );
};

export default Sidebar;