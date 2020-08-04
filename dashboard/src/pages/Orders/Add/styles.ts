import styled, { css } from 'styled-components';

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

    & + input {
        margin-top: 20px;
    }
`;

export const Select = styled.select<InputProps>`
    ${inputBasis};
    padding: 10px;
    color: #757575;

    ${({width}) => width && css`
        width: ${width}px;
    `}

    &::placeholder {
        font-size: 12px;
    }

    input + & {
        margin-top: 20px;
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
        margin: 20px 0;
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
    padding: 20px;
    text-align: center;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #c00;
    color: #fff;
`;
