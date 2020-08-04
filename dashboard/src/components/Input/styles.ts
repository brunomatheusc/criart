import styled from 'styled-components';

interface ContainerProps {
	isFocused: boolean;
	isFilled: boolean;
	isErrored: boolean;
}

export const Container = styled.div`
    border: 1px solid #C00000;
    border-radius: 5px;
    padding: 20px;
    width: 350px;
    height: 32px;

    &::placeholder {
        font-size: 12px;
    }  
`;
