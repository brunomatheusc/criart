import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    html, body, #root {
		--webkit-font-smoothing: antialiased;
        height: 100%;
    }

	body, input, button, textarea {
		font: 16px Roboto, sans-serif;
	}

	button {
		cursor: pointer;
	}
`;