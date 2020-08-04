import React, { FC, useState, useEffect, useRef, FormEvent } from 'react';
import { MdAdd } from 'react-icons/md';

import { Container, Form, Title, Input, Select, InputDiv, InputButton, Button } from './styles';
import api from '../../../services/api';

const AddOrders: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [containerHeight, setContainerHeight] = useState(800);
    const [name, setName] = useState('');
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');
    const [weight, setWeight] = useState('');
    const [type, setType] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        if (containerRef.current) {
            setContainerHeight(containerRef.current.offsetHeight || 800);
        }
    }, [containerRef]);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        try {
            const response = await api.post('', {
                
            })
        } catch (error) {
            
        }
    }

    return (
        <>
            <Container height={ containerHeight } ref={ containerRef }>
                <Form onSubmit={ handleSubmit }>
                    <Title>Cadastrar Pedido</Title>

                    <Input placeholder="Cliente" onChange={ (e) => { setName(e.target.value) }} value={ name } width={720} />

                    <Select placeholder="Produto" onChange={ (e) => { setName(e.target.value) }} value={ name } width={720}>
                        <option value="-">Selecione o produto</option>
                        <option value="0">Produto 0</option>
                        <option value="1">Produto 1</option>
                        <option value="2">Produto 2</option>
                    </Select>

                    <InputDiv>
                        <Input type="text" onChange={ (e) => { setPrice(e.target.value) } } value={ price } placeholder="Valor" />
                        <Input type="text" onChange={ (e) => { setWeight(e.target.value) } } value={ weight } placeholder="Peso" />
                        <Input type="text" onChange={ (e) => { setType(e.target.value) } } value={ type } placeholder="Tipo" />
                        <Input type="text" onChange={ (e) => { setCategory(e.target.value) } } value={ category } placeholder="Categoria" />
                    </InputDiv>

                    <InputButton>
                        <Button type="submit">Cadastrar</Button>
                    </InputButton>
                </Form>                    
            </Container>
        </>
    );
};

export default AddOrders;