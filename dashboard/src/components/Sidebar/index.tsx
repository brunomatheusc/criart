import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { MdBusiness, MdInsertDriveFile, MdSettings, MdWork, MdShoppingCart, MdPeople } from 'react-icons/md';

import { Container, List, ListItem } from './styles';

const Sidebar: FC = () => {
    return (
        <>
            <Container>
                <List>
                    <ListItem><Link to="/produtos"><MdBusiness /><span>Produtos</span></Link></ListItem>
                    <ListItem><Link to="/pedidos"><MdInsertDriveFile /><span>Pedidos</span></Link></ListItem>
                    <ListItem><Link to="/usuarios"><MdPeople /><span>Usuário</span></Link></ListItem>
                    <ListItem><Link to="/compras"><MdShoppingCart /><span>Compras</span></Link></ListItem>
                    <ListItem><Link to="/relatorios"><MdWork /><span>Relatórios</span></Link></ListItem>
                    <ListItem><Link to="/configuracoes"><MdSettings /><span>Configurações</span></Link></ListItem>
                </List>
            </Container>    
        </>
    );
};

export default Sidebar;