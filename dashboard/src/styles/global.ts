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

    h1, h2, h3, h4, h5, h6 {
        color: #1e2739;
    }
`;