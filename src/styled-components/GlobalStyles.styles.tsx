import styled, {createGlobalStyle} from 'styled-components';
import Card from 'react-bootstrap/Card';

export const GlobalStyles = createGlobalStyle`

*,
::before,
::after {
		box-sizing: border-box
}

body {
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	min-height: 100vh;
	background-color: #e9e9e9 !important;
    color: #1d1d1d;
}

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
		monospace;
}

a {
	text-decoration: none !important;
}

i {
	margin: 0 .25rem;
}

.active {
	background-color: #477096;
}
`;

export const CardCustom = styled(Card) `
    padding: 3rem;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
`;

export const WrapperButtons = styled.div `
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: end;
    align-items: center;
`;

export const Icon = styled.img `
    width: 1.1rem;
    margin: 0 .25rem;
`