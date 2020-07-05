import React, { FC, useState, useEffect, useRef, FormEvent } from 'react';

import { Container, Form, Title, Input, Description, InputDiv, InputButton, Button } from './styles';

const AddProducts: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [containerHeight, setContainerHeight] = useState(800);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
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
            
        } catch (error) {
            
        }
    }

    return (
        <>
            <Container height={ containerHeight } ref={ containerRef }>
                <Form onSubmit={ handleSubmit }>
                    <Title>Cadastrar Produto</Title>

                    <Input placeholder="Nome" onChange={ (e) => { setName(e.target.value) }} value={ name } />

                    <Description placeholder="Descrição" onChange={ (e) => { setDescription(e.target.value) }} value={ description } />

                    <InputDiv>
                        <Input type="text" onChange={ (e) => { setPrice(e.target.value) } } value={ price } placeholder="Preço" />
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

export default AddProducts;