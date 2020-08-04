import React, { FC, useState, InputHTMLAttributes, useCallback } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
}

const Input: FC<InputProps> = ({ name, ...rest }) => {
	const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    
	const handleInputFocus = useCallback(() => {
		setIsFocused(true);
	}, []);

    return (
        <>
            <Container>
                <input { ...rest } />    
            </Container>
        </>
    );
};

export default Input;