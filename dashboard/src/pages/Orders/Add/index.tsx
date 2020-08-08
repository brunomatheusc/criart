import React, { FC, useState, useEffect, useRef, FormEvent } from 'react';
import { MdAdd } from 'react-icons/md';

import { Container, Form, Title, InputGroup, Input, InputMasked, Select, InputDiv, InputButton, Button } from './styles';
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

    function handleMask(value: string) {
        value = value.replace(',', '');
        const parsedNumber = parseInt(value, 10);
        const regex = /[0-9]+/;

        if (value.match(regex)) {
            let newValue = parsedNumber.toString();
            const length = newValue.length;
            let masked =  '';
            
            if (length < 3) {
                newValue = newValue.padStart(3, '0');
            }

            const position = (length - 2) > 0 ? (length - 2) : 1;

            masked = `${newValue.slice(0, position)},${newValue.slice(position)}`;
            setPrice(masked);
        }
    }

    return (
        <>
            <Container height={ containerHeight } ref={ containerRef }>
                <Form onSubmit={ handleSubmit }>
                    <Title>Cadastrar Pedido</Title>

                    <InputGroup>
                        <Input placeholder="Cliente" onChange={ (e) => { setName(e.target.value) }} value={ name } width={720} />

                        <button><MdAdd /></button>                        
                    </InputGroup>

                    <Select placeholder="Produto" onChange={ (e) => { setName(e.target.value) }} value={ name } width={720}>
                        <option value="-">Selecione o produto</option>
                        <option value="0">Produto 0</option>
                        <option value="1">Produto 1</option>
                        <option value="2">Produto 2</option>
                    </Select>

                    <InputDiv>
                        {/*<InputMasked mask="R$ 0,00" defaultValue="R$ 0,00" onChange={ (e) => { handleMask(e.target.value) } } value={ price } placeholder="R$ 0,00" />*/}
                        <Input onChange={ (e) => { handleMask(e.target.value) } } value={ price } placeholder="R$ 0,00" />
                        <Input type="text" onChange={ (e) => { setWeight(e.target.value) } } value={ weight } placeholder="Peso" />
                        
                        <Select onChange={ (e) => { setType(e.target.value) } } value={ type } placeholder="Tipo">
                            <option value="-">Tipo</option>
                            <option value="1">Fio de Malha</option>
                            <option value="2">Barbante</option>
                        </Select>
                        
                        <Select onChange={ (e) => { setCategory(e.target.value) } } value={ category } placeholder="Categoria">
                            <option value="-">Categoria</option>
                            <option value="1">Sousplat</option>
                            <option value="2">Porta Vaso</option>
                            <option value="2">Cachepot</option>
                        </Select>
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