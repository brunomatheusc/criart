import React, { FC } from 'react';
import { MdEdit, MdDelete, MdAdd } from 'react-icons/md';

import { Container, Header, Button, Title, Table } from './styles'

const ListOrders: FC = () => {
    return (
        <>
            <Container>
                <Header>
                    <Title>Lista de Pedidos</Title>
                    <Button to="/orders/new"><MdAdd />Novo Pedido</Button>
                </Header>

                <Table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Tipo</th>
                            <th>Categoria</th>
                            <th>Opções</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Produto 1</td>
                            <td>R$ 50,00</td>
                            <td>Sousplat</td>
                            <td>Mesa</td>
                            <td>
                                <MdEdit />
                                <MdDelete />
                            </td>
                        </tr>

                        <tr>
                            <td>Produto 1</td>
                            <td>R$ 50,00</td>
                            <td>Sousplat</td>
                            <td>Mesa</td>
                            <td>
                                <MdEdit />
                                <MdDelete />
                            </td>
                        </tr>

                        <tr>
                            <td>Produto 1</td>
                            <td>R$ 50,00</td>
                            <td>Sousplat</td>
                            <td>Mesa</td>
                            <td>
                                <MdEdit />
                                <MdDelete />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default ListOrders;