import styled from 'styled-components';

import backgroundImage from '../../assets/background.png';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    background: url(${backgroundImage}) no-repeat center center fixed;

    width: 100%;
    height: 100%;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 48px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;  
    align-items: center;  
`;

export const Input = styled.input`
    width: 400px;
    height: 46px;
    border: 0;
    border-bottom: 2px solid #fff;
    background-color: transparent;
    color: #fff;

    &::placeholder {
        color: #D1D1D1;
        opacity: 0.5;
        font-size: 20px;
    }

    margin-top: 20px;
    & + input {
    }
`;

export const InputGroup = styled.div`
    display: flex;
    position: relative;

    svg {
        position: absolute;
        right: 0;
        bottom: 10px;
    }
`;

export const Button = styled.button`
    margin-top: 40px;
    width: 331px;
    height: 45px;
    background: #000000;
    border: 1px solid #933D3D;
    box-sizing: border-box;
    border-radius: 10px;
    color: #fff;
`;