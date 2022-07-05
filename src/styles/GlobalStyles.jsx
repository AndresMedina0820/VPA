import styled, { createGlobalStyle } from 'styled-components';
import Card from 'react-bootstrap/Card';

export const GlobalStyles = createGlobalStyle`

:root {
	--text-color-default: #1d1d1d;
	--danger: red;
}

html {
	box-sizing: border-box;
	font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
}

*,
::before,
::after {
	box-sizing: border-box
}

body {
	margin: 0 auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100vh;
	min-height: 100vh;
	overscroll-behavior: none;
	background-color: #e9e9e9 !important;
    color: #1d1d1d;
}

ul, li, h1, h2, h3, p, button {
	margin: 0;
	padding: 0;
}

ul {
	list-style: none;
}

a {
	text-decoration: none;
	color: var(--text-color-default);
}

a:hover {
	color: var(--text-color-default);
}

i {
	margin: 0 .25rem;
}

.text-danger {
	color: var(--danger);
}

.active {
	background-color: #477096;
}

.cursor-pointer {
	cursor: pointer;
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
