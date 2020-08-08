import styled, { css } from 'styled-components';
import InputMask from 'react-input-mask';

interface InputProps {
    width?: number;
}

interface IContainer {
    height: number;
}

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 70%;
`;

export const Container = styled.div<IContainer>`
    width: 100%;

    ${({ height }) => height && css`
        height: calc(${height}px - 160px);
    `}
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
`;

const inputBasis = css`
    border: 1px solid #C00000;
    border-radius: 5px;
    padding: 20px;
    width: 350px;
`;

export const Input = styled.input<InputProps>`
    ${inputBasis};
    height: 32px;

    ${({width}) => width && css`
        width: ${width}px;
    `}

    &::placeholder {
        font-size: 12px;
    }
`;

export const InputMasked = styled(InputMask)`
    ${inputBasis};
    height: 32px;

    /* ${({width}) => width && css`
        width: ${width}px;
    `} */

    &::placeholder {
        font-size: 12px;
    }
`;

export const InputGroup = styled.div`
    position: relative;
    margin-bottom: 20px;

    button {
        position: absolute;
        background-color: transparent;
        border: none;
        top: 6px;
        right: 12px;
        bottom: 0;
    }
`;

export const Select = styled.select<InputProps>`
    ${inputBasis};
    padding: 10px;
    color: #757575;
    margin-bottom: 20px;

    ${({width}) => width && css`
        width: ${width}px;
    `}

    &::placeholder {
        font-size: 12px;
    }

    option {
        font-size: 12px;
        color: #757575;
    }
`;

export const InputDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;

    input {
        margin-bottom: 20px;
        margin-right: 20px;
    }
`;

export const InputButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Button = styled.button`
    height: 32px;
    width: 200px;
    text-align: center;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #c00;
    color: #fff;
`;
