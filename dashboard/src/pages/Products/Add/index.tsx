import React, { FC, useState, useEffect, useRef, FormEvent } from 'react';

import { Container, Form, Title, Input, Description, InputDiv, InputButton, Button } from './styles';

const AddProducts: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState(800);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [weight, setWeight] = useState(0);
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

                    <Input placeholder="Nome" value={ name } />

                    <Description placeholder="Descrição" />

                    <InputDiv>
                        <Input type="text" value={ price } placeholder="Preço" />
                        <Input type="text" value={ weight } placeholder="Peso" />
                        <Input type="text" value={ type } placeholder="Tipo" />
                        <Input type="text" value={ category } placeholder="Categoria" />
                    </InputDiv>

                    <InputButton>
                        <Button>Cadastrar</Button>
                    </InputButton>

                </Form>                    
            </Container>
        </>
    );
};

export default AddProducts;