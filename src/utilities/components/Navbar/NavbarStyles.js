import styled from 'styled-components';
import Navbar from "react-bootstrap/Navbar";

export const WrapperNav = styled.div `
    width: 100%;
    height: 5rem;
    position: relative;
`

export const NavbarCustom = styled(Navbar)`
    width: 100%;
    height: 5rem;
    position: fixed;
    padding: 0rem 2rem 0rem ${(props) => props.toggle ? '16rem' : '6rem'};
    z-index: 1;
    transition: .5s;
`;
