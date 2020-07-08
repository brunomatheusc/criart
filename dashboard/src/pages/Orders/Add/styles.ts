import styled, { css } from 'styled-components';

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

export const Input = styled.input`
    ${inputBasis};
    height: 32px;

    &::placeholder {
        font-size: 12px;
    }
`;

export const Description = styled.textarea`
    ${inputBasis};
    margin: 20px 0;

    &::placeholder {
        font-size: 12px;
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
    text-align: center;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #c00;
    color: #fff;
`;
