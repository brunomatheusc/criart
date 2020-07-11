import React, { FC, useState, useEffect, useRef, FormEvent } from 'react';

import { Container, Form, Title, Input, Description, InputDiv, InputButton, Button } from './styles';
import api from '../../../services/api';

const AddProducts: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [containerHeight, setContainerHeight] = useState(800);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [weight, setWeight] = useState('');
    const [typeId, setTypeId] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [mainImage, setMainImage] = useState('');
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    useEffect(() => {
        if (containerRef.current) {
            setContainerHeight(containerRef.current.offsetHeight || 800);
        }
    }, [containerRef]);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        try {
            const response = await api.post('/products', {
                name, description, price, weight, typeId, categoryId, mainImage, imageUrls 
            });

            if (response.status === 200) {
                alert("Cadastrado com sucesso");
            }
        } catch (error) {
            console.log(error);
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
                        <Input type="text" onChange={ (e) => { setTypeId(e.target.value) } } value={ typeId } placeholder="Tipo" />
                        <Input type="text" onChange={ (e) => { setCategoryId(e.target.value) } } value={ categoryId } placeholder="Categoria" />
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