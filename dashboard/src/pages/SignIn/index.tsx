import React, { FC, useState, FormEvent } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import { Container, Title, Form, Input, Button, InputGroup } from './styles';
import api from '../../services/api';

const SignIn: FC = () => {
    const [email, setEmail] = useState('bmatheusc@gmail.com');
    const [password, setPassword] = useState('123456');
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);

    async function handleSignIn(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const response = await api.post('/sessions', { email, password });

            if (response.status === 200) {

            }
        } catch (error) {
            const message = error.response.data.message;
            alert(message);
        }
    }

    function handlePasswordClick() {
        setIsVisiblePassword(!isVisiblePassword);
    }

    return (
        <>
            <Container>
                <Title>Dashboard</Title>

                <Form onSubmit={ handleSignIn }>
                    <Input value={ email } onChange={ e => setEmail(e.target.value) } placeholder="Usuário" />

                    <InputGroup>
                        <Input value={ password } onChange={ e => setPassword(e.target.value) } type={ isVisiblePassword ? "text" : "password" } placeholder="Senha" />
                        
                        { isVisiblePassword ? 
                        <MdVisibilityOff size={ 24 } color="#fff" onClick={ handlePasswordClick } /> :
                        <MdVisibility size={ 24 } color="#fff" onClick={ handlePasswordClick } />
                        }
                    </InputGroup>

                    <Button type="submit">Entrar</Button>
                </Form>
            </Container>
        </>
    );
}

export default SignIn;